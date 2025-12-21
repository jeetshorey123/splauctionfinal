// Supabase Integration for SPL Auction System
const { createClient } = supabase;

// Initialize Supabase client
const supabaseUrl = 'https://pwmefeaoqwcjycbnvmgw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bWVmZWFvcXdjanljYm52bWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTc2MjYsImV4cCI6MjA4MDkzMzYyNn0.zTGrX-rAXjcDoEDj6KEaiClrQq4DMK-YRWb_tx0IOmg';
const sb = createClient(supabaseUrl, supabaseKey);

// Global state
let currentTournament = null;
let currentTournamentId = null;
let teamData = {};

const TEAMS = [
  { id: 1, name: 'Warriors', logo: 'warrior.jpg', purse: 100000, max_players: 10 },
  { id: 2, name: 'Challengers', logo: 'fighters.jpeg', purse: 100000, max_players: 10 },
  { id: 3, name: 'Valiant', logo: 'valiant.jpg', purse: 100000, max_players: 10 },
  { id: 4, name: 'Strikers', logo: 'strikers.jpeg', purse: 100000, max_players: 10 },
  { id: 5, name: 'Mavericks', logo: 'mavericks.jpg', purse: 100000, max_players: 10 },
  { id: 6, name: 'Legends', logo: 'legend.jpg', purse: 100000, max_players: 10 }
];

// Supabase Functions
async function getTournaments() {
  const { data, error } = await sb.from('tournaments').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching tournaments:', error);
    return [];
  }
  return data || [];
}

async function createTournamentInDB(name) {
  const { data, error } = await sb.from('tournaments').insert([{ name }]).select();
  if (error) {
    console.error('Error creating tournament:', error);
    throw error;
  }
  return data[0];
}

async function deleteTournamentFromDB(tournamentId) {
  const { error } = await sb.from('tournaments').delete().eq('id', tournamentId);
  if (error) {
    console.error('Error deleting tournament:', error);
    throw error;
  }
}

async function getTeamsForTournament(tournamentId) {
  const { data, error } = await sb.from('teams').select('*').eq('tournament_id', tournamentId);
  if (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
  return data || [];
}

async function upsertTeam(teamData) {
  const { data, error } = await sb.from('teams').upsert(teamData).select();
  if (error) {
    console.error('Error upserting team:', error);
    throw error;
  }
  return data[0];
}

async function getPlayers() {
  const { data, error } = await sb.from('players').select('*');
  if (error) {
    console.error('Error fetching players:', error);
    return [];
  }
  return data || [];
}

async function getPlayersForTournament(tournamentId) {
  if (!tournamentId) {
    const { data, error } = await sb.from('players').select('*').is('tournament_id', null);
    if (error) {
      console.error('Error fetching available players:', error);
      return [];
    }
    return data || [];
  }
  const { data, error } = await sb.from('players').select('*').eq('tournament_id', tournamentId);
  if (error) {
    console.error('Error fetching tournament players:', error);
    return [];
  }
  return data || [];
}

async function updatePlayer(playerId, updates) {
  const { data, error} = await sb.from('players').update(updates).eq('id', playerId).select();
  if (error) {
    console.error('Error updating player:', error);
    throw error;
  }
  return data[0];
}

// Initialize teams for tournament
async function initializeTeamsForTournament(tournamentId) {
  const existingTeams = await getTeamsForTournament(tournamentId);
  if (existingTeams.length === 0) {
    for (const team of TEAMS) {
      await upsertTeam({
        id: team.id,
        tournament_id: tournamentId,
        name: team.name,
        logo: team.logo,
        purse_left: team.purse,
        players_purchased: 0
      });
    }
  }
}

// Load teams data
async function loadTeamsData() {
  if (!currentTournamentId) {
    teamData = {};
    TEAMS.forEach(t => {
      teamData[t.id] = { ...t, purse_left: t.purse, players_purchased: 0 };
    });
    return;
  }
  
  const teams = await getTeamsForTournament(currentTournamentId);
  const players = await getPlayersForTournament(currentTournamentId);
  
  teamData = {};
  teams.forEach(t => {
    // Count actual players sold to this team
    const soldPlayers = players.filter(p => p.team_id === t.id && p.status === 'sold');
    const actualCount = soldPlayers.length;
    
    // Update the count if it doesn't match
    if (t.players_purchased !== actualCount) {
      t.players_purchased = actualCount;
      // Sync to database
      upsertTeam(t).catch(err => console.error('Error syncing team count:', err));
    }
    
    teamData[t.id] = t;
  });
}

// Render teams grid
async function renderTeamsGrid() {
  await loadTeamsData();
  const g = document.getElementById('teamsGrid');
  g.innerHTML = '';
  TEAMS.forEach(t => {
    const ti = teamData[t.id] || { purse_left: t.purse, players_purchased: 0 };
    const playersPurchased = ti.players_purchased || 0;
    const playersToPurchase = t.max_players - playersPurchased;
    const c = document.createElement('div');
    c.className = 'team-card';
    c.onclick = () => showTeamDetails(t.id);
    c.innerHTML = `<img src="${t.logo}" alt="${t.name}" class="team-logo"><div class="team-name">${t.name}</div><div class="team-stats"><div class="stat-row"><span class="stat-label">Purse Left:</span><span class="stat-value">₹${ti.purse_left.toLocaleString()}</span></div><div class="stat-row"><span class="stat-label">Players Purchased:</span><span class="stat-value">${playersPurchased}</span></div><div class="stat-row"><span class="stat-label">Players to Purchase:</span><span class="stat-value">${playersToPurchase}</span></div></div>`;
    g.appendChild(c);
  });
}

// Show team details
async function showTeamDetails(tid) {
  const t = TEAMS.find(tm => tm.id === tid);
  const ti = teamData[tid] || { purse_left: t.purse, players_purchased: 0 };
  const players = await getPlayersForTournament(currentTournamentId);
  const pl = players.filter(p => p.team_id === tid && p.status === 'sold');
  const playersPurchased = ti.players_purchased || 0;
  const playersToPurchase = t.max_players - playersPurchased;
  document.getElementById('teamDetails').innerHTML = `<div class="team-details-container"><div class="team-header"><img src="${t.logo}" alt="${t.name}" class="team-logo"><h2>${t.name}</h2></div><div class="team-summary"><div class="summary-card"><div class="summary-label">Total Purse</div><div class="summary-value">₹${t.purse.toLocaleString()}</div></div><div class="summary-card"><div class="summary-label">Purse Left</div><div class="summary-value">₹${ti.purse_left.toLocaleString()}</div></div><div class="summary-card"><div class="summary-label">Players Purchased</div><div class="summary-value">${playersPurchased}</div></div><div class="summary-card"><div class="summary-label">Players to Purchase</div><div class="summary-value">${playersToPurchase}</div></div></div><div class="players-section"><h3>Players Roster</h3>${pl.length > 0 ? `<table class="players-table"><thead><tr><th>Player ID</th><th>Player Name</th><th>Price</th></tr></thead><tbody>${pl.map(p => `<tr><td>${p.player_id}</td><td>${p.player_name}</td><td>₹${p.price.toLocaleString()}</td></tr>`).join('')}</tbody></table>` : '<div class="empty-state"><p>No players purchased yet</p></div>'}</div></div>`;
  showPage('teamDetailsPage');
}

// Show admin page
async function showAdminPage() {
  const hasTournament = currentTournamentId !== null;
  document.getElementById('tournamentCreation').style.display = hasTournament ? 'none' : 'block';
  document.getElementById('auctionSection').style.display = hasTournament ? 'block' : 'none';
  document.getElementById('deleteTournamentBtn').style.display = hasTournament ? 'inline-block' : 'none';
  
  if (hasTournament) {
    const ps = document.getElementById('playerSelect');
    const ts = document.getElementById('teamSelect');
    ps.innerHTML = '<option value="">Choose a player...</option>';
    
    // Only show players that are truly available (not sold to any tournament) and IDs 1-62
    const allPlayers = await getPlayers();
    const availablePlayers = allPlayers.filter(p => p.status === 'available' && p.tournament_id === null && p.id >= 1 && p.id <= 62);
    availablePlayers.forEach(p => {
      const o = document.createElement('option');
      o.value = p.id;
      o.textContent = `${p.player_name} (ID: ${p.player_id})`;
      ps.appendChild(o);
    });
    
    ts.innerHTML = '<option value="">Choose a team...</option>';
    TEAMS.forEach(t => {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.name;
      ts.appendChild(o);
    });
    
    await checkAuctionStatus();
  }
  showPage('adminPage');
}

// Handle player sold
async function handlePlayerSold() {
  const pid = parseInt(document.getElementById('playerSelect').value);
  const tid = parseInt(document.getElementById('teamSelect').value);
  const pr = parseInt(document.getElementById('priceInput').value);
  
  if (!pid || !tid || !pr || pr <= 0) {
    alert('Please fill all fields with valid values');
    return;
  }
  
  const team = TEAMS.find(t => t.id === tid);
  if (!team) {
    alert('Team not found');
    return;
  }
  
  // Get actual player count from database
  const players = await getPlayersForTournament(currentTournamentId);
  const currentTeamPlayers = players.filter(p => p.team_id === tid && p.status === 'sold');
  const actualPlayerCount = currentTeamPlayers.length;
  
  if (actualPlayerCount >= team.max_players) {
    alert(`Team already has maximum ${team.max_players} players!`);
    return;
  }
  
  if (teamData[tid].purse_left < pr) {
    alert('Insufficient purse!');
    return;
  }
  
  const remainingPurse = teamData[tid].purse_left - pr;
  if (remainingPurse < 2000 && actualPlayerCount < team.max_players - 1) {
    alert(`Cannot sell! Team will have ₹${remainingPurse.toLocaleString()} left, which is less than minimum ₹2,000 required.`);
    return;
  }
  
  try {
    await updatePlayer(pid, {
      status: 'sold',
      team_id: tid,
      price: pr,
      tournament_id: currentTournamentId
    });
    
    teamData[tid].purse_left -= pr;
    teamData[tid].players_purchased = actualPlayerCount + 1;
    
    await upsertTeam(teamData[tid]);
    
    if (teamData[tid].players_purchased === 9) {
      alert(`9th player sold to ${team.name}!\nRemaining purse: ₹${teamData[tid].purse_left.toLocaleString()}\nPlayers remaining: ${team.max_players - 9}`);
    }
    
    alert('Player sold and updated in Supabase successfully!');
    document.getElementById('playerSelect').value = '';
    document.getElementById('teamSelect').value = '';
    document.getElementById('priceInput').value = '';
    await showAdminPage();
  } catch (error) {
    alert('Error selling player: ' + error.message);
  }
}

// Handle player unsold
async function handlePlayerUnsold() {
  const pid = parseInt(document.getElementById('playerSelect').value);
  if (!pid) {
    alert('Please select a player');
    return;
  }
  
  try {
    await updatePlayer(pid, {
      status: 'unsold',
      team_id: null,
      price: 0,
      tournament_id: currentTournamentId
    });
    
    alert('Player marked as unsold');
    document.getElementById('playerSelect').value = '';
    await showAdminPage();
  } catch (error) {
    alert('Error marking player as unsold: ' + error.message);
  }
}

// Show unsold players
async function showUnsoldPlayers() {
  const players = await getPlayersForTournament(currentTournamentId);
  const ups = players.filter(p => p.status === 'unsold');
  const ul = document.getElementById('unsoldList');
  
  if (ups.length === 0) {
    ul.innerHTML = '<div class="empty-state">No unsold players</div>';
  } else {
    ul.innerHTML = '';
    ups.forEach(p => {
      const i = document.createElement('div');
      i.className = 'unsold-item';
      i.innerHTML = `<div class="unsold-item-name">${p.player_name}</div><div class="unsold-item-id">ID: ${p.player_id}</div>`;
      i.style.cursor = 'pointer';
      i.addEventListener('click', async () => {
        try {
          await updatePlayer(p.id, {
            status: 'available',
            tournament_id: null
          });
          alert(`${p.player_name} is now available for auction`);
          await showAdminPage();
        } catch (error) {
          alert('Error updating player: ' + error.message);
        }
      });
      ul.appendChild(i);
    });
  }
  ul.classList.toggle('active');
}

// Show page
function showPage(pn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pn).classList.add('active');
}

// Load tournament select
async function loadTournamentSelect() {
  const tournaments = await getTournaments();
  const select = document.getElementById('tournamentSelect');
  select.innerHTML = '<option value="">Select Tournament</option>';
  tournaments.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.name;
    if (t.id === currentTournamentId) opt.selected = true;
    select.appendChild(opt);
  });
}

// Create tournament
async function createTournament() {
  const nameInput = document.getElementById('tournamentNameInput');
  const name = nameInput.value.trim();
  if (!name) {
    alert('Please enter tournament name');
    return;
  }
  
  try {
    const tournament = await createTournamentInDB(name);
    currentTournament = tournament.name;
    currentTournamentId = tournament.id;
    
    await initializeTeamsForTournament(currentTournamentId);
    await loadTeamsData();
    
    nameInput.value = '';
    await loadTournamentSelect();
    alert(`Tournament "${name}" created and updated in Supabase successfully! You can now start the auction.`);
    await showAdminPage();
  } catch (error) {
    if (error.code === '23505') {
      alert('Tournament name already exists');
    } else {
      alert('Error creating tournament: ' + error.message);
    }
  }
}

// Delete tournament
async function deleteTournament() {
  if (!currentTournamentId) {
    alert('No tournament selected');
    return;
  }
  
  if (!confirm(`Are you sure you want to delete "${currentTournament}" tournament? This will delete all associated data.`)) {
    return;
  }
  
  try {
    await deleteTournamentFromDB(currentTournamentId);
    alert('Tournament deleted successfully');
    currentTournament = null;
    currentTournamentId = null;
    await loadTournamentSelect();
    await renderTeamsGrid();
    showPage('homePage');
  } catch (error) {
    alert('Error deleting tournament: ' + error.message);
  }
}

// Handle tournament change
async function handleTournamentChange(e) {
  const selected = e.target.value;
  if (!selected) {
    currentTournament = null;
    currentTournamentId = null;
  } else {
    const tournaments = await getTournaments();
    const tournament = tournaments.find(t => t.id === selected);
    if (tournament) {
      currentTournament = tournament.name;
      currentTournamentId = tournament.id;
    }
  }
  await renderTeamsGrid();
  showPage('homePage');
}

// Restart with unsold players
async function restartWithUnsoldPlayers() {
  if (!currentTournamentId) {
    alert('No active tournament');
    return;
  }
  
  const players = await getPlayersForTournament(currentTournamentId);
  const unsold = players.filter(p => p.status === 'unsold');
  
  if (unsold.length === 0) {
    alert('No unsold players to restart auction');
    return;
  }
  
  try {
    for (const player of unsold) {
      await updatePlayer(player.id, {
        status: 'available',
        tournament_id: null
      });
    }
    alert(`Restarting auction with ${unsold.length} unsold players`);
    await showAdminPage();
  } catch (error) {
    alert('Error restarting auction: ' + error.message);
  }
}

// Check auction status
async function checkAuctionStatus() {
  if (!currentTournamentId) return;
  
  const allPlayers = await getPlayers();
  const available = allPlayers.filter(p => !p.tournament_id || p.status === 'available');
  const tournamentPlayers = await getPlayersForTournament(currentTournamentId);
  const unsold = tournamentPlayers.filter(p => p.status === 'unsold');
  
  const statusDiv = document.getElementById('auctionStatus');
  const restartBtn = document.getElementById('restartWithUnsoldBtn');
  
  if (available.length === 0 && unsold.length > 0) {
    statusDiv.innerHTML = `<div class="auction-status complete">All players processed! ${unsold.length} players unsold.</div>`;
    restartBtn.style.display = 'block';
  } else {
    statusDiv.innerHTML = '';
    restartBtn.style.display = 'none';
  }
}

// Download auction Excel
async function downloadAuctionExcel() {
  const players = await getPlayers();
  const soldPlayers = players.filter(p => p.status === 'sold');
  
  if (soldPlayers.length === 0) {
    alert('No sold players to download');
    return;
  }
  
  let csv = 'ID,Player Name,Team,Sold For\n';
  soldPlayers.forEach(p => {
    const team = TEAMS.find(t => t.id === p.team_id);
    const teamName = team ? team.name : 'Unknown';
    csv += `${p.player_id},"${p.player_name}","${teamName}",${p.price}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  const fileName = currentTournament ? `${currentTournament}_auction.csv` : 'auction_results.csv';
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert('Auction data downloaded successfully!');
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('adminBtn').addEventListener('click', () => document.getElementById('loginModal').classList.add('active'));
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    if (document.getElementById('username').value === 'jeet' && document.getElementById('password').value === 'jeet') {
      document.getElementById('loginModal').classList.remove('active');
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
      showAdminPage();
    } else {
      alert('Invalid credentials!');
    }
  });
  document.getElementById('cancelLogin').addEventListener('click', () => {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  document.getElementById('soldBtn').addEventListener('click', handlePlayerSold);
  document.getElementById('unsoldBtn').addEventListener('click', handlePlayerUnsold);
  document.getElementById('backToHome').addEventListener('click', () => showPage('homePage'));
  document.getElementById('backToHomeFromAdmin').addEventListener('click', () => showPage('homePage'));
  document.getElementById('createTournamentBtn').addEventListener('click', createTournament);
  document.getElementById('deleteTournamentBtn').addEventListener('click', deleteTournament);
  document.getElementById('tournamentSelect').addEventListener('change', handleTournamentChange);
  document.getElementById('restartWithUnsoldBtn').addEventListener('click', restartWithUnsoldPlayers);
  document.getElementById('showUnsoldBtn').addEventListener('click', showUnsoldPlayers);
  document.getElementById('downloadExcelBtn').addEventListener('click', downloadAuctionExcel);
  document.getElementById('showTeamManagementBtn').addEventListener('click', showTeamManagement);
}

// Show team management
async function showTeamManagement() {
  if (!currentTournamentId) {
    alert('Please select a tournament first');
    return;
  }
  
  await loadTeamsData();
  const list = document.getElementById('teamManagementList');
  list.innerHTML = '';
  
  for (const team of TEAMS) {
    const ti = teamData[team.id] || { purse_left: team.purse, players_purchased: 0 };
    const players = await getPlayersForTournament(currentTournamentId);
    const teamPlayers = players.filter(p => p.team_id === team.id && p.status === 'sold');
    
    const teamDiv = document.createElement('div');
    teamDiv.className = 'team-management-card';
    teamDiv.style.cssText = 'background: rgba(255,255,255,0.1); padding: 1.5rem; margin: 1rem 0; border-radius: 12px;';
    
    let html = `
      <h4 style="color: var(--highlight-color); margin-bottom: 1rem;">${team.name}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; opacity: 0.8;">Purse Left (₹)</label>
          <input type="number" id="purse_${team.id}" value="${ti.purse_left}" class="form-control" style="width: 100%;">
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; opacity: 0.8;">Players Purchased</label>
          <input type="number" id="players_${team.id}" value="${ti.players_purchased}" class="form-control" style="width: 100%;" readonly>
        </div>
      </div>
      <button onclick="updateTeamData(${team.id})" class="btn btn-primary" style="margin-bottom: 1rem;">Update Team</button>
    `;
    
    if (teamPlayers.length > 0) {
      html += '<h5 style="margin-top: 1rem; margin-bottom: 0.5rem;">Players:</h5>';
      html += '<div style="max-height: 200px; overflow-y: auto;">';
      teamPlayers.forEach(p => {
        html += `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: rgba(0,0,0,0.2); margin-bottom: 0.5rem; border-radius: 8px;">
            <span>${p.player_name} (${p.player_id}) - ₹${p.price.toLocaleString()}</span>
            <button onclick="removePlayerFromTeam(${p.id}, ${team.id}, ${p.price})" class="btn btn-danger" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;">Remove</button>
          </div>
        `;
      });
      html += '</div>';
    }
    
    teamDiv.innerHTML = html;
    list.appendChild(teamDiv);
  }
  
  list.classList.toggle('active');
}

// Update team data
window.updateTeamData = async function(teamId) {
  const purse = parseInt(document.getElementById(`purse_${teamId}`).value);
  
  if (isNaN(purse) || purse < 0) {
    alert('Invalid purse amount');
    return;
  }
  
  try {
    teamData[teamId].purse_left = purse;
    await upsertTeam(teamData[teamId]);
    alert('Team updated successfully');
    await renderTeamsGrid();
  } catch (error) {
    alert('Error updating team: ' + error.message);
  }
};

// Remove player from team
window.removePlayerFromTeam = async function(playerId, teamId, price) {
  if (!confirm('Are you sure you want to remove this player from the team?')) {
    return;
  }
  
  try {
    await updatePlayer(playerId, {
      status: 'available',
      team_id: null,
      price: 0,
      tournament_id: null
    });
    
    // Get actual current count
    const players = await getPlayersForTournament(currentTournamentId);
    const currentTeamPlayers = players.filter(p => p.team_id === teamId && p.status === 'sold');
    
    teamData[teamId].purse_left += price;
    teamData[teamId].players_purchased = currentTeamPlayers.length;
    await upsertTeam(teamData[teamId]);
    
    alert('Player removed and returned to auction pool');
    await renderTeamsGrid();
    await showTeamManagement();
  } catch (error) {
    alert('Error removing player: ' + error.message);
  }
};

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  await renderTeamsGrid();
  await loadTournamentSelect();
  setupEventListeners();
});
