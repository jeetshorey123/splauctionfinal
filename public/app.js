// Sankalp Premier League - Teams & Players

const TEAMS = [
  { id: 1, name: 'Sankalp Warriors', slug: 'warriors', logo: 'warrior.jpg' },
  { id: 2, name: 'Sankalp Challengers', slug: 'challengers', logo: 'fighters.jpeg' },
  { id: 3, name: 'Sankalp Valiant', slug: 'valiants', logo: 'valiant.jpg' },
  { id: 4, name: 'Sankalp Strikers', slug: 'strikers', logo: 'strikers.jpeg' },
  { id: 5, name: 'Sankalp Mavericks', slug: 'mavericks', logo: 'mavericks.jpg' },
  { id: 6, name: 'Sankalp Legends', slug: 'legends', logo: 'legend.jpg' }
];

const ALL_PLAYERS = [
  {id:1,player_id:'P001',player_name:'Lakshank Furiya',base_price:3000,team:'warriors'},
  {id:2,player_id:'P002',player_name:'Kaushik yamber',base_price:5000,team:'challengers'},
  {id:3,player_id:'P003',player_name:'Krishang bhardwaj',base_price:3000,team:'warriors'},
  {id:4,player_id:'P004',player_name:'Aryan Singh(101)',base_price:10000,team:'strikers'},
  {id:5,player_id:'P005',player_name:'Ashish R Pandey',base_price:10000,team:'valiants'},
  {id:6,player_id:'P006',player_name:'Abhishek seth',base_price:10000,team:'warriors'},
  {id:7,player_id:'P007',player_name:'Mitesh Mistry',base_price:3000,team:'challengers'},
  {id:8,player_id:'P008',player_name:'Rupesh singh',base_price:5000,team:'mavericks'},
  {id:9,player_id:'P009',player_name:'Jatin',base_price:10000,team:'strikers'},
  {id:10,player_id:'P010',player_name:'Nilesh Vishwakarma',base_price:3000,team:'strikers'},
  {id:11,player_id:'P011',player_name:'Harish Jetli',base_price:10000,team:'legends'},
  {id:12,player_id:'P012',player_name:'Nikunj toshniwal',base_price:10000,team:'mavericks'},
  {id:13,player_id:'P013',player_name:'vimarsh',base_price:2000,team:'challengers'},
  {id:14,player_id:'P014',player_name:'Mihir Makwana',base_price:5000,team:'valiants'},
  {id:15,player_id:'P015',player_name:'Bharat mistry',base_price:2000,team:'legends'},
  {id:16,player_id:'P016',player_name:'Kishore',base_price:3000,team:'mavericks'},
  {id:17,player_id:'P017',player_name:'Aaryan mistry',base_price:3000,team:'legends'},
  {id:18,player_id:'P018',player_name:'Naveen Porwal',base_price:5000,team:'legends'},
  {id:19,player_id:'P019',player_name:'Prateek Gond',base_price:10000,team:'legends'},
  {id:20,player_id:'P020',player_name:'Hait Dama',base_price:5000,team:'challengers'},
  {id:21,player_id:'P021',player_name:'Jay patel',base_price:3000,team:'legends'},
  {id:22,player_id:'P022',player_name:'Monish Shastri',base_price:10000,team:'valiants'},
  {id:23,player_id:'P023',player_name:'Pramod Rane',base_price:2000,team:'strikers'},
  {id:24,player_id:'P024',player_name:'SUNIL BOHRA',base_price:3000,team:'legends'},
  {id:25,player_id:'P025',player_name:'Viraj singh',base_price:5000,team:'warriors'},
  {id:26,player_id:'P026',player_name:'aayan',base_price:2000,team:'mavericks'},
  {id:27,player_id:'P027',player_name:'Sidharth singh',base_price:5000,team:'challengers'},
  {id:28,player_id:'P028',player_name:'Tejas Suthar',base_price:5000,team:'challengers'},
  {id:29,player_id:'P029',player_name:'Vikas mishra',base_price:3000,team:'challengers'},
  {id:30,player_id:'P030',player_name:'Kishan V',base_price:3000,team:'strikers'},
  {id:31,player_id:'P031',player_name:'Sadashiv devadiga',base_price:3000,team:'valiants'},
  {id:32,player_id:'P032',player_name:'Rakesh Singh',base_price:5000,team:'valiants'},
  {id:33,player_id:'P033',player_name:'Shailesh Singh',base_price:5000,team:'valiants'},
  {id:34,player_id:'P034',player_name:'Aryan Singh(602)',base_price:10000,team:'challengers'},
  {id:35,player_id:'P035',player_name:'jeet shorey',base_price:10000,team:'mavericks'},
  {id:36,player_id:'P036',player_name:'Kush Dama',base_price:5000,team:'strikers'},
  {id:37,player_id:'P037',player_name:'Veer dama',base_price:5000,team:'strikers'},
  {id:38,player_id:'P038',player_name:'Ajay seth',base_price:5000,team:'strikers'},
  {id:39,player_id:'P039',player_name:'Raj singh',base_price:3000,team:'valiants'},
  {id:40,player_id:'P040',player_name:'Jeevan Gunjal',base_price:3000,team:'warriors'},
  {id:41,player_id:'P041',player_name:'Deep Dama',base_price:5000,team:'mavericks'},
  {id:42,player_id:'P042',player_name:'Kalash Porwal',base_price:3000,team:'warriors'},
  {id:43,player_id:'P043',player_name:'deepak dama',base_price:2000,team:'warriors'},
  {id:44,player_id:'P044',player_name:'manoj mishra',base_price:3000,team:'legends'},
  {id:45,player_id:'P045',player_name:'Yuvraj Singh',base_price:5000,team:'valiants'},
  {id:46,player_id:'P046',player_name:'Rishi Devadiga',base_price:3000,team:'strikers'},
  {id:47,player_id:'P047',player_name:'Kailash Jain',base_price:3000,team:'valiants'},
  {id:48,player_id:'P048',player_name:'Meet Dama',base_price:3000,team:'warriors'},
  {id:49,player_id:'P049',player_name:'Sahil rastogi',base_price:3000,team:'mavericks'},
  {id:50,player_id:'P050',player_name:'Rounik singh',base_price:3000,team:'valiants'},
  {id:51,player_id:'P051',player_name:'Anuj Doshi',base_price:10000,team:'challengers'},
  {id:52,player_id:'P052',player_name:'Nikhil Waghela',base_price:10000,team:'warriors'},
  {id:53,player_id:'P053',player_name:'mahesh gaddam',base_price:5000,team:'mavericks'},
  {id:54,player_id:'P054',player_name:'amit mistry',base_price:2000,team:'legends'},
  {id:55,player_id:'P055',player_name:'aarav singh',base_price:3000,team:'mavericks'},
  {id:56,player_id:'P056',player_name:'nitin shorey',base_price:5000,team:'mavericks'},
  {id:57,player_id:'P057',player_name:'Adi rane',base_price:0,team:'challengers'},
  {id:58,player_id:'P058',player_name:'Pratyush prakash kadam',base_price:0,team:'legends'},
  {id:59,player_id:'P059',player_name:'Vadant kabra',base_price:0,team:'mavericks'},
  {id:60,player_id:'P060',player_name:'aarush gupta',base_price:0,team:'strikers'},
  {id:61,player_id:'P061',player_name:'veer mehta',base_price:0,team:'warriors'},
  {id:62,player_id:'P062',player_name:'Arpit ashish pandey',base_price:0,team:'valiants'},
  {id:63,player_id:'P063',player_name:'dilensh suthar',base_price:0,team:'challengers'},
  {id:64,player_id:'P064',player_name:'vivek mehra',base_price:0,team:'valiants'},
  {id:65,player_id:'P065',player_name:'jimmy mehta',base_price:0,team:'strikers'},
  {id:66,player_id:'P066',player_name:'jighnesh mehta',base_price:0,team:'warriors'},
  {id:67,player_id:'P067',player_name:'nilesh sharma',base_price:0,team:'mavericks'},
  {id:68,player_id:'P068',player_name:'prakash kadam',base_price:0,team:'legends'}
];

// Match Officials (3rd Umpires, Boundary Checkers, Match Officials, Scorers)
const OFFICIALS = {
  warriors: ['Jeevan', 'Meet', 'Nikhil Waghela'],
  challengers: ['Omkar', 'Aryan', 'Anuj'],
  valiants: ['Yuvraj', 'Mihir', 'Ashish uncle'],
  strikers: ['Jatin', 'Veer', 'Ajay uncle'],
  mavericks: ['Monty', 'Sahil', 'Rupesh uncle'],
  legends: ['Ankur', 'Naveen uncle']
};

// Track official usage for balanced distribution
const officialUsage = {};
Object.keys(OFFICIALS).forEach(team => {
  OFFICIALS[team].forEach(official => {
    officialUsage[official] = 0;
  });
});

// Function to get officials for a match (4 from teams not playing, balanced distribution)
function getMatchOfficials(team1, team2, matchNumber) {
  const allTeams = ['warriors', 'challengers', 'valiants', 'strikers', 'mavericks', 'legends'];
  const availableTeams = allTeams.filter(t => t !== team1 && t !== team2);
  
  let candidateOfficials = [];
  
  // Get all officials from available teams
  availableTeams.forEach(team => {
    OFFICIALS[team].forEach(official => {
      // Exclude Jatin from first 7 matches
      if (matchNumber <= 7 && official === 'Jatin') {
        return;
      }
      candidateOfficials.push(official);
    });
  });
  
  // Sort by usage count (least used first) for balanced distribution
  candidateOfficials.sort((a, b) => officialUsage[a] - officialUsage[b]);
  
  // Pick top 4
  const selectedOfficials = candidateOfficials.slice(0, 4);
  
  // Update usage count
  selectedOfficials.forEach(official => {
    officialUsage[official]++;
  });
  
  return selectedOfficials.join(', ');
}

const SCHEDULE = [
  { match: 1, team1: 'mavericks', team2: 'valiants', date: '25 Jan 2026', time: '10:30 AM' },
  { match: 2, team1: 'legends', team2: 'warriors', date: '25 Jan 2026', time: '11:15 AM' },
  { match: 3, team1: 'challengers', team2: 'mavericks', date: '25 Jan 2026', time: '12:00 PM' },
  { match: 4, team1: 'valiants', team2: 'legends', date: '25 Jan 2026', time: '12:45 PM' },
  { match: 5, team1: 'warriors', team2: 'challengers', date: '25 Jan 2026', time: '1:30 PM' },
  { match: 6, team1: 'mavericks', team2: 'legends', date: '25 Jan 2026', time: '2:15 PM' },
  { match: 7, team1: 'strikers', team2: 'valiants', date: '25 Jan 2026', time: '3:00 PM' },
  { match: 8, team1: 'warriors', team2: 'mavericks', date: '25 Jan 2026', time: '3:45 PM' },
  { match: 9, team1: 'strikers', team2: 'legends', date: '25 Jan 2026', time: '4:30 PM' },
  { match: 10, team1: 'challengers', team2: 'valiants', date: '25 Jan 2026', time: '5:15 PM' },
  { match: 11, team1: 'strikers', team2: 'warriors', date: '25 Jan 2026', time: '6:00 PM' },
  { match: 12, team1: 'legends', team2: 'challengers', date: '25 Jan 2026', time: '6:45 PM' },
  { match: 13, team1: 'strikers', team2: 'mavericks', date: '25 Jan 2026', time: '7:30 PM' },
  { match: 14, team1: 'valiants', team2: 'warriors', date: '25 Jan 2026', time: '8:15 PM' },
  { match: 15, team1: 'strikers', team2: 'challengers', date: '25 Jan 2026', time: '9:00 PM' },
  { match: 'kids', team1: 'kids', team2: 'kids', date: '26 Jan 2026', time: '11:00 AM', description: '👶 Kids Match' },
  { match: 16, team1: 'challengers', team2: 'valiants', date: '26 Jan 2026', time: '1:00 PM', description: '#2 vs #3' },
  { match: 17, team1: 'strikers', team2: 'mavericks', date: '26 Jan 2026', time: '2:00 PM', description: '#4 vs #5' },
  { match: 18, team1: 'loser_16', team2: 'winner_17', date: '26 Jan 2026', time: '3:00 PM', description: 'Loser of #16 vs Winner of #17' },
  { match: 19, team1: 'winner_16', team2: 'winner_18', date: '26 Jan 2026', time: '4:00 PM', description: 'Winner of #16 vs Winner of #18' },
  { match: 20, team1: 'warriors', team2: 'winner_19', date: '26 Jan 2026', time: '5:00 PM', description: '#1 vs Winner of #19' }
];

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
  renderTeamsGrid();
  renderSchedule();
  setupEventListeners();
});

// Render teams grid on home page
function renderTeamsGrid() {
  const grid = document.getElementById('teamsGrid');
  grid.innerHTML = '';
  
  TEAMS.forEach(team => {
    const teamPlayers = ALL_PLAYERS.filter(p => p.team === team.slug);
    const totalPlayers = teamPlayers.length;
    
    const card = document.createElement('div');
    card.className = 'team-card';
    card.onclick = () => showTeamDetails(team.id);
    card.innerHTML = `
      <img src="${team.logo}" alt="${team.name}" class="team-logo">
      <h3 class="team-name">${team.name}</h3>
      <div class="team-stats">
        <div class="stat-item">
          <span class="stat-label">Total Players</span>
          <span class="stat-value">${totalPlayers}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Show team details page
function showTeamDetails(teamId) {
  const team = TEAMS.find(t => t.id === teamId);
  const teamPlayers = ALL_PLAYERS.filter(p => p.team === team.slug);
  
  const detailsDiv = document.getElementById('teamDetails');
  detailsDiv.innerHTML = `
    <div class="team-details-header">
      <div>
        <h2>${team.name}</h2>
        <div class="team-summary">
          <span class="summary-item">Total Players: <strong>${teamPlayers.length}</strong></span>
        </div>
      </div>
    </div>
    
    <div class="players-section">
      <h3>Players Roster</h3>
      <table class="players-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player Name</th>
          </tr>
        </thead>
        <tbody>
          ${teamPlayers.map((p, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${p.player_name}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  showPage('teamDetailsPage');
}

// Render schedule
function renderSchedule() {
  const scheduleContent = document.getElementById('scheduleContent');
  
  const getTeamInfo = (slug) => {
    return TEAMS.find(t => t.slug === slug);
  };
  
  scheduleContent.innerHTML = `
    <div class="schedule-container">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Match</th>
            <th colspan="3">Teams</th>
            <th>Date</th>
            <th>Time</th>
            <th>Match Officials</th>
          </tr>
        </thead>
        <tbody>
          ${SCHEDULE.map(match => {
            // Handle playoff/kids matches with descriptions (TBD officials)
            if (match.description) {
              return `
              <tr>
                <td><span class="match-number">#${match.match}</span></td>
                <td colspan="3" class="playoff-match-cell">
                  <span class="playoff-description">${match.description}</span>
                </td>
                <td><span class="match-date">${match.date}</span></td>
                <td><span class="match-time">${match.time}</span></td>
                <td><span class="match-officials">TBD</span></td>
              </tr>
              `;
            }
            
            const team1Info = getTeamInfo(match.team1);
            const team2Info = getTeamInfo(match.team2);
            
            // Skip if team info not found
            if (!team1Info || !team2Info) return '';
            
            // Get officials for this match (pass match number for logic)
            const officials = getMatchOfficials(match.team1, match.team2, match.match);
            
            return `
            <tr>
              <td><span class="match-number">#${match.match}</span></td>
              <td class="team-cell">
                <img src="${team1Info.logo}" alt="${team1Info.name}" class="team-logo-schedule">
                <span class="team-name-schedule">${team1Info.name.replace('Sankalp ', '')}</span>
              </td>
              <td class="vs-cell"><span class="vs-badge">VS</span></td>
              <td class="team-cell">
                <img src="${team2Info.logo}" alt="${team2Info.name}" class="team-logo-schedule">
                <span class="team-name-schedule">${team2Info.name.replace('Sankalp ', '')}</span>
              </td>
              <td><span class="match-date">${match.date}</span></td>
              <td><span class="match-time">${match.time}</span></td>
              <td><span class="match-officials">${officials}</span></td>
            </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Page navigation
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageName).classList.add('active');
  
  // Update navbar active state
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (pageName === 'homePage') {
    document.getElementById('navHome').classList.add('active');
  } else if (pageName === 'schedulePage') {
    document.getElementById('navSchedule').classList.add('active');
  } else if (pageName === 'scoringPage') {
    document.getElementById('navScoring').classList.add('active');
  } else if (pageName === 'rulesPage') {
    document.getElementById('navRules').classList.add('active');
  }
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('backToHome').addEventListener('click', () => showPage('homePage'));
  document.getElementById('navHome').addEventListener('click', () => showPage('homePage'));
  document.getElementById('navSchedule').addEventListener('click', () => showPage('schedulePage'));
  document.getElementById('navScoring').addEventListener('click', () => {
    showPage('scoringPage');
    initializeScoringPage();
  });
  document.getElementById('navRules').addEventListener('click', () => showPage('rulesPage'));
  document.getElementById('downloadScheduleBtn').addEventListener('click', downloadScheduleAsImage);
}

// Initialize Scoring Page
function initializeScoringPage() {
  generateScorecards();
  setupScoringListeners();
}

function generateScorecards() {
  generateScorecard('team1');
  generateScorecard('team2');
}

function generateScorecard(teamId) {
  const container = document.getElementById(teamId + 'Scorecard');
  container.innerHTML = '';
  
  let html = '<table class="over-table"><thead><tr><th>Over</th>';
  
  // Header for 12 balls - BLANK headers
  for (let ball = 1; ball <= 12; ball++) {
    html += `<th></th>`;
  }
  
  html += '<th>Over Total</th><th>2x</th></tr></thead><tbody>';
  
  // 6 Overs
  for (let over = 1; over <= 6; over++) {
    html += `<tr><td>Over ${over}</td>`;
    
    // 12 Balls input fields
    for (let ball = 1; ball <= 12; ball++) {
      const inputId = `${teamId}_over${over}_ball${ball}`;
      html += `<td><input type="number" class="ball-input" id="${inputId}" min="0" max="6" value="0" data-over="${over}" data-ball="${ball}" data-team="${teamId}"></td>`;
    }
    
    // Over total
    const overTotalId = `${teamId}_over${over}_total`;
    html += `<td><input type="number" class="over-total" id="${overTotalId}" readonly value="0"></td>`;
    
    // 2x runs (doubles) - ONLY for Over 2
    const doublesId = `${teamId}_over${over}_2x`;
    if (over === 2) {
      html += `<td><input type="number" class="doubles" id="${doublesId}" value="0"></td>`;
    } else {
      html += `<td></td>`;
    }
    
    html += '</tr>';
  }
  
  // Add Total Runs row
  html += `<tr class="total-runs-row"><td colspan="12" style="text-align: right; font-weight: bold; padding-right: 12px;">Total Runs</td>`;
  html += `<td><input type="number" class="total-runs-input" id="${teamId}_totalRuns" readonly value="0"></td>`;
  html += `<td></td></tr>`;
  
  html += '</tbody></table>';
  
  container.innerHTML = html;
  
  // Add event listeners for ball inputs
  const ballInputs = container.querySelectorAll('.ball-input');
  ballInputs.forEach(input => {
    input.addEventListener('change', () => updateScorecardTotals(teamId));
  });
}

function updateScorecardTotals(teamId) {
  let inningsTotal = 0;
  
  for (let over = 1; over <= 6; over++) {
    let overTotal = 0;
    
    for (let ball = 1; ball <= 12; ball++) {
      const input = document.getElementById(`${teamId}_over${over}_ball${ball}`);
      if (input) {
        overTotal += parseInt(input.value) || 0;
      }
    }
    
    const overTotalInput = document.getElementById(`${teamId}_over${over}_total`);
    if (overTotalInput) {
      overTotalInput.value = overTotal;
    }
    
    inningsTotal += overTotal;
  }
  
  // Update total runs in table
  const totalRunsTableInput = document.getElementById(teamId + '_totalRuns');
  if (totalRunsTableInput) {
    totalRunsTableInput.value = inningsTotal;
  }
  
  // Update runs scored
  const runsInput = document.getElementById(teamId + 'RunsScored');
  if (runsInput) {
    runsInput.value = inningsTotal;
  }
  
  // Calculate total runs (runs scored + penalty)
  const penaltyInput = document.getElementById(teamId + 'Penalty');
  const totalRunsInput = document.getElementById(teamId + 'TotalRuns');
  if (penaltyInput && totalRunsInput) {
    const penalty = parseInt(penaltyInput.value) || 0;
    totalRunsInput.value = inningsTotal + penalty;
  }
}

function setupScoringListeners() {
  // Add penalty change listeners for both teams
  document.getElementById('team1Penalty').addEventListener('change', () => {
    updateScorecardTotals('team1');
  });
  
  document.getElementById('team2Penalty').addEventListener('change', () => {
    updateScorecardTotals('team2');
  });
  
  // Add download scoring button listener
  const downloadScoringBtn = document.getElementById('downloadScoringBtn');
  if (downloadScoringBtn) {
    downloadScoringBtn.addEventListener('click', downloadScoringAsImage);
  }
}

function downloadScoringAsImage() {
  const scoringContainer = document.querySelector('.scoring-container');
  
  if (!scoringContainer) {
    alert('Scoring page not found!');
    return;
  }
  
  const clone = scoringContainer.cloneNode(true);
  clone.style.width = '2400px';
  clone.style.padding = '60px';
  clone.style.background = 'white';
  clone.style.color = 'black';
  
  // Add SPL Logo at the top
  const logoContainer = document.createElement('div');
  logoContainer.style.cssText = `
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #000;
  `;
  
  const logo = document.createElement('img');
  logo.src = './spl-logo.png';
  logo.style.cssText = `
    height: 80px;
    margin-bottom: 10px;
  `;
  logoContainer.appendChild(logo);
  
  const title = document.createElement('h1');
  title.textContent = 'SPL - MATCH SCORING SHEET';
  title.style.cssText = `
    margin: 0;
    font-size: 28px;
    color: black;
    font-weight: bold;
    letter-spacing: 1px;
  `;
  logoContainer.appendChild(title);
  
  // Insert logo at the beginning
  clone.insertBefore(logoContainer, clone.firstChild);
  
  // Clear all input values
  const allInputs = clone.querySelectorAll('input');
  allInputs.forEach(input => {
    input.value = '';
  });
  
  // Pure white and black styling for download - NO COLORS
  const tables = clone.querySelectorAll('table');
  tables.forEach(table => {
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.marginBottom = '20px';
    table.style.backgroundColor = 'white';
    table.style.borderColor = '#000';
    table.style.border = '2px solid #000';
    
    const cells = table.querySelectorAll('th, td');
    cells.forEach(cell => {
      cell.style.border = '1px solid #000';
      cell.style.padding = '12px';
      cell.style.textAlign = 'center';
      cell.style.backgroundColor = 'white';
      cell.style.color = 'black';
    });
    
    const headers = table.querySelectorAll('thead th');
    headers.forEach(header => {
      header.style.backgroundColor = 'white';
      header.style.fontWeight = 'bold';
      header.style.color = 'black';
      header.style.border = '2px solid #000';
    });
    
    const inputs = table.querySelectorAll('input');
    inputs.forEach(input => {
      input.style.border = 'none';
      input.style.padding = '8px';
      input.style.backgroundColor = 'transparent';
      input.style.color = 'black';
      input.style.outline = 'none';
    });
  });
  
  // Style all sections to pure white with black borders
  const sections = clone.querySelectorAll('.match-info, .teams-info, .player-swaps-section, .team-scorecard, .innings-total, .match-result');
  sections.forEach(section => {
    section.style.backgroundColor = 'white';
    section.style.border = '1px solid #000';
    section.style.color = 'black';
    section.style.borderRadius = '0';
  });
  
  // Remove all gradients and backgrounds
  const allElements = clone.querySelectorAll('*');
  allElements.forEach(el => {
    el.style.color = 'black';
    el.style.backgroundColor = 'white';
    el.style.backgroundImage = 'none';
    el.style.textShadow = 'none';
    el.style.boxShadow = 'none';
    el.style.borderColor = '#000';
  });
  
  // Style labels and text
  const labels = clone.querySelectorAll('label, span, h3, h2, h1');
  labels.forEach(label => {
    label.style.color = 'black';
    label.style.backgroundColor = 'transparent';
  });
  
  // Temporarily add to DOM for html2canvas
  document.body.appendChild(clone);
  
  html2canvas(clone, {
    scale: 4,
    backgroundColor: '#ffffff',
    logging: false,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 10);
    link.href = canvas.toDataURL('image/png');
    link.download = `scoring-sheet-${timestamp}.png`;
    link.click();
    document.body.removeChild(clone);
  }).catch(err => {
    console.error('Error generating image:', err);
    document.body.removeChild(clone);
    alert('Error downloading image. Please try again.');
  });
}

// Download schedule as image
async function downloadScheduleAsImage() {
  const btn = document.getElementById('downloadScheduleBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Generating High Quality Image...';
  
  try {
    // Create a container with full styling - larger for better quality
    const container = document.createElement('div');
    container.style.cssText = `
      background: linear-gradient(135deg, #0f3460, #16213e);
      padding: 60px;
      width: 1800px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      color: #fff;
      box-sizing: border-box;
    `;
    
    // Add title
    const title = document.createElement('h1');
    title.textContent = 'Tournament Schedule';
    title.style.cssText = `
      text-align: center;
      font-size: 44px;
      margin: 0 0 40px 0;
      color: #fff;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      font-weight: 700;
      letter-spacing: 1px;
    `;
    container.appendChild(title);
    
    // Add inauguration ceremony
    const inaug = document.createElement('div');
    inaug.style.cssText = `
      background: linear-gradient(135deg, #e85d75, #c23855);
      padding: 28px;
      border-radius: 16px;
      margin-bottom: 20px;
      color: white;
      text-align: center;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    `;
    inaug.innerHTML = `
      <h3 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 700;">🏏 Inauguration Ceremony</h3>
      <p style="margin: 0; font-size: 18px; font-weight: 500; letter-spacing: 0.5px;">25th January 2026 | 9:30 AM - 10:30 AM</p>
    `;
    container.appendChild(inaug);
    
    // Add kids match
    const kids = document.createElement('div');
    kids.style.cssText = `
      background: linear-gradient(135deg, #e85d75, #c23855);
      padding: 28px;
      border-radius: 16px;
      margin-bottom: 40px;
      color: white;
      text-align: center;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    `;
    kids.innerHTML = `
      <h3 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 700;">👶 Kids Match</h3>
      <p style="margin: 0; font-size: 18px; font-weight: 500; letter-spacing: 0.5px;">26th January 2026 | 11:00 AM</p>
    `;
    container.appendChild(kids);
    
    // Clone and style the schedule table
    const tableContainer = document.getElementById('scheduleContent');
    const clonedTable = tableContainer.cloneNode(true);
    
    // Style the cloned table with page colors
    const tables = clonedTable.querySelectorAll('table');
    tables.forEach(table => {
      table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        margin-top: 0;
        background: rgba(26, 26, 46, 0.7);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
      `;
      
      // Style headers
      const headers = table.querySelectorAll('thead th');
      headers.forEach(th => {
        th.style.cssText = `
          background: linear-gradient(135deg, #c23855, #a01d45);
          color: white;
          padding: 18px;
          text-align: center;
          font-weight: 700;
          border: 1px solid #e85d75;
          font-size: 15px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.5px;
        `;
      });
      
      // Style rows
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach((row, index) => {
        row.style.cssText = `
          background: ${index % 2 === 0 ? 'rgba(26, 26, 46, 0.5)' : 'rgba(26, 26, 46, 0.3)'};
          border-bottom: 1px solid rgba(232, 93, 117, 0.2);
        `;
        
        const cells = row.querySelectorAll('td');
        cells.forEach(td => {
          td.style.cssText = `
            padding: 16px;
            text-align: center;
            border: 1px solid rgba(232, 93, 117, 0.15);
            font-size: 14px;
            color: rgba(255, 255, 255, 0.95);
            font-weight: 500;
            line-height: 1.4;
          `;
        });
      });
    });
    
    container.appendChild(clonedTable);
    
    // Temporarily add to body (off-screen)
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    document.body.appendChild(container);
    
    // Generate canvas from HTML with highest quality settings
    const canvas = await html2canvas(container, {
      backgroundColor: 'rgba(15, 52, 96, 1)',
      scale: 3,
      useCORS: true,
      allowTaint: true,
      logging: false,
      windowHeight: container.scrollHeight,
      windowWidth: container.scrollWidth,
      quality: 1
    });
    
    // Remove temporary container
    document.body.removeChild(container);
    
    // Download as image with higher quality PNG
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png', 1.0);
    link.download = `SPL-Tournament-Schedule-${new Date().toISOString().split('T')[0]}.png`;
    link.click();
    
    btn.disabled = false;
    btn.textContent = '📥 Download Schedule as Image';
  } catch (error) {
    console.error('Error generating image:', error);
    alert('Error generating image. Please try again.');
    btn.disabled = false;
    btn.textContent = '📥 Download Schedule as Image';
  }
}
