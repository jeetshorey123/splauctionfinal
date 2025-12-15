// Local Storage - No Supabase Required!
const STORAGE_KEY_TEAMS = 'spl_teams';
const STORAGE_KEY_PLAYERS = 'spl_players';
const STORAGE_KEY_TOURNAMENTS = 'spl_tournaments';
const STORAGE_KEY_CURRENT_TOURNAMENT = 'spl_current_tournament';

let currentTournament = null;

const TEAMS = [
  { id: 1, name: 'Sankalp Warriors', logo: 'warrior.jpg', purse: 100000 },
  { id: 2, name: 'Sankalp Fighters', logo: 'fighters.jpeg', purse: 100000 },
  { id: 3, name: 'Sankalp Valiant', logo: 'valiant.jpg', purse: 100000 },
  { id: 4, name: 'Sankalp Strikers', logo: 'strikers.jpeg', purse: 100000 },
  { id: 5, name: 'Sankalp Mavericks', logo: 'mavericks.jpg', purse: 100000 },
  { id: 6, name: 'Sankalp Legends', logo: 'legend.jpg', purse: 100000 }
];

const ALL_PLAYERS = [
  {id:1,player_id:'P001',player_name:'Lakshank Furiya'},{id:2,player_id:'P002',player_name:'Kaushik yamber'},
  {id:3,player_id:'P003',player_name:'Krishang bhardwaj'},{id:4,player_id:'P004',player_name:'Aryan Singh(101)'},
  {id:5,player_id:'P005',player_name:'Ashish R Pandey'},{id:6,player_id:'P006',player_name:'Abhishek seth'},
  {id:7,player_id:'P007',player_name:'Mitesh Mistry'},{id:8,player_id:'P008',player_name:'Rupesh singh'},
  {id:9,player_id:'P009',player_name:'Jatin'},{id:10,player_id:'P010',player_name:'Nilesh Vishwakarma'},
  {id:11,player_id:'P011',player_name:'Harish Jetli'},{id:12,player_id:'P012',player_name:'Nikunj toshniwal'},
  {id:13,player_id:'P013',player_name:'Parth Doshi'},{id:14,player_id:'P014',player_name:'Mihir Makwana'},
  {id:15,player_id:'P015',player_name:'Bharat mistry'},{id:16,player_id:'P016',player_name:'Kishore'},
  {id:17,player_id:'P017',player_name:'Aaryan mistry'},{id:18,player_id:'P018',player_name:'Naveen Porwal'},
  {id:19,player_id:'P019',player_name:'Prateek Gond'},{id:20,player_id:'P020',player_name:'Hait Dama'},
  {id:21,player_id:'P021',player_name:'Jay patel'},{id:22,player_id:'P022',player_name:'Monish Shastri'},
  {id:23,player_id:'P023',player_name:'Pramod Rane'},{id:24,player_id:'P024',player_name:'SUNIL BOHRA'},
  {id:25,player_id:'P025',player_name:'Viraj singh'},{id:26,player_id:'P026',player_name:'aayan'},
  {id:27,player_id:'P027',player_name:'Sidharth singh'},{id:28,player_id:'P028',player_name:'Tejas Suthar'},
  {id:29,player_id:'P029',player_name:'Vikas mishra'},{id:30,player_id:'P030',player_name:'Kishan V'},
  {id:31,player_id:'P031',player_name:'Sadashiv devadiga'},{id:32,player_id:'P032',player_name:'Rakesh Singh'},
  {id:33,player_id:'P033',player_name:'Shailesh Singh'},{id:34,player_id:'P034',player_name:'Aryan Singh(602)'},
  {id:35,player_id:'P035',player_name:'jeet shorey'},{id:36,player_id:'P036',player_name:'Kush Dama'},
  {id:37,player_id:'P037',player_name:'Veer dama'},{id:38,player_id:'P038',player_name:'Ajay seth'},
  {id:39,player_id:'P039',player_name:'Raj  singh'},{id:40,player_id:'P040',player_name:'Jeevan Gunjal'},
  {id:41,player_id:'P041',player_name:'Deep Dama'},{id:42,player_id:'P042',player_name:'Kalash Porwal'},
  {id:43,player_id:'P043',player_name:'deepak dama'},{id:44,player_id:'P044',player_name:'manoj mishra'},
  {id:45,player_id:'P045',player_name:'Yuvraj Singh'},{id:46,player_id:'P046',player_name:'Rishi Devadiga'},
  {id:47,player_id:'P047',player_name:'Kailash Jain'},{id:48,player_id:'P048',player_name:'Meet Dama'},
  {id:49,player_id:'P049',player_name:'Sahil rastogi'},{id:50,player_id:'P050',player_name:'Rounik singh'},
  {id:51,player_id:'P051',player_name:'Anuj Doshi'},{id:52,player_id:'P052',player_name:'Nikhil Waghela'},
  {id:53,player_id:'P053',player_name:'mahesh gaddam'},{id:54,player_id:'P054',player_name:'amit mistry'}
];

let teamData={};

document.addEventListener('DOMContentLoaded',()=>{
  if(!localStorage.getItem(STORAGE_KEY_TOURNAMENTS)){
    localStorage.setItem(STORAGE_KEY_TOURNAMENTS,JSON.stringify([]));
  }
  currentTournament=localStorage.getItem(STORAGE_KEY_CURRENT_TOURNAMENT);
  if(!localStorage.getItem(STORAGE_KEY_TEAMS)){
    const t={};
    TEAMS.forEach(tm=>{t[tm.id]={id:tm.id,name:tm.name,logo:tm.logo,purse_left:tm.purse,players_purchased:0}});
    localStorage.setItem(STORAGE_KEY_TEAMS,JSON.stringify(t));
  }
  // Always sync player list with ALL_PLAYERS array
  const existingPlayers = localStorage.getItem(STORAGE_KEY_PLAYERS);
  if(!existingPlayers){
    localStorage.setItem(STORAGE_KEY_PLAYERS,JSON.stringify(ALL_PLAYERS.map(p=>({...p,status:'available',team_id:null,price:0,tournament:null}))));
  } else {
    // Update to match ALL_PLAYERS while preserving auction data
    const stored = JSON.parse(existingPlayers);
    const updated = ALL_PLAYERS.map(p => {
      const existing = stored.find(sp => sp.player_id === p.player_id);
      return existing ? {...p, status: existing.status, team_id: existing.team_id, price: existing.price, tournament: existing.tournament} : {...p, status: 'available', team_id: null, price: 0, tournament: null};
    });
    localStorage.setItem(STORAGE_KEY_PLAYERS, JSON.stringify(updated));
  }
  teamData=JSON.parse(localStorage.getItem(STORAGE_KEY_TEAMS));
  loadTournamentSelect();
  renderTeamsGrid();
  setupEventListeners();
});

function getAllPlayers(){return JSON.parse(localStorage.getItem(STORAGE_KEY_PLAYERS))|| [];}
function saveAllPlayers(p){localStorage.setItem(STORAGE_KEY_PLAYERS,JSON.stringify(p));}
function saveTeamsData(){localStorage.setItem(STORAGE_KEY_TEAMS,JSON.stringify(teamData));}
function getAvailablePlayers(){return getAllPlayers().filter(p=>p.status==='available'&&(!currentTournament||!p.tournament||p.tournament===currentTournament));}
function getUnsoldPlayers(){return getAllPlayers().filter(p=>p.status==='unsold'&&(!currentTournament||p.tournament===currentTournament));}
function getPlayersByTeam(tid){return getAllPlayers().filter(p=>p.status==='sold'&&p.team_id===tid&&(!currentTournament||p.tournament===currentTournament));}
function getTournaments(){return JSON.parse(localStorage.getItem(STORAGE_KEY_TOURNAMENTS))||[];}
function saveTournaments(t){localStorage.setItem(STORAGE_KEY_TOURNAMENTS,JSON.stringify(t));}

function renderTeamsGrid(){
  const g=document.getElementById('teamsGrid');
  g.innerHTML='';
  TEAMS.forEach(t=>{
    const ti=teamData[t.id]||{purse_left:t.purse,players_purchased:0};
    const playersPurchased=ti.players_purchased||0;
    const playersToPurchase=10-playersPurchased;
    const c=document.createElement('div');
    c.className='team-card';
    c.onclick=()=>showTeamDetails(t.id);
    c.innerHTML=`<img src="${t.logo}" alt="${t.name}" class="team-logo"><div class="team-name">${t.name}</div><div class="team-stats"><div class="stat-row"><span class="stat-label">Purse Left:</span><span class="stat-value">₹${ti.purse_left.toLocaleString()}</span></div><div class="stat-row"><span class="stat-label">Players Purchased:</span><span class="stat-value">${playersPurchased}</span></div><div class="stat-row"><span class="stat-label">Players to Purchase:</span><span class="stat-value">${playersToPurchase}</span></div></div>`;
    g.appendChild(c);
  });
}

function showTeamDetails(tid){
  const t=TEAMS.find(tm=>tm.id===tid);
  const ti=teamData[tid]||{purse_left:t.purse,players_purchased:0};
  const pl=getPlayersByTeam(tid);
  const playersPurchased=ti.players_purchased||0;
  const playersToPurchase=10-playersPurchased;
  document.getElementById('teamDetails').innerHTML=`<div class="team-details-container"><div class="team-header"><img src="${t.logo}" alt="${t.name}" class="team-logo"><h2>${t.name}</h2></div><div class="team-summary"><div class="summary-card"><div class="summary-label">Total Purse</div><div class="summary-value">₹${t.purse.toLocaleString()}</div></div><div class="summary-card"><div class="summary-label">Purse Left</div><div class="summary-value">₹${ti.purse_left.toLocaleString()}</div></div><div class="summary-card"><div class="summary-label">Players Purchased</div><div class="summary-value">${playersPurchased}</div></div><div class="summary-card"><div class="summary-label">Players to Purchase</div><div class="summary-value">${playersToPurchase}</div></div></div><div class="players-section"><h3>Players Roster</h3>${pl.length>0?`<table class="players-table"><thead><tr><th>Player ID</th><th>Player Name</th><th>Price</th></tr></thead><tbody>${pl.map(p=>`<tr><td>${p.player_id}</td><td>${p.player_name}</td><td>₹${p.price.toLocaleString()}</td></tr>`).join('')}</tbody></table>`:'<div class="empty-state"><p>No players purchased yet</p></div>'}</div></div>`;
  showPage('teamDetailsPage');
}

function showAdminPage(){
  const hasTournament=currentTournament!==null;
  document.getElementById('tournamentCreation').style.display=hasTournament?'none':'block';
  document.getElementById('auctionSection').style.display=hasTournament?'block':'none';
  if(hasTournament){
    const ps=document.getElementById('playerSelect');
    const ts=document.getElementById('teamSelect');
    ps.innerHTML='<option value="">Choose a player...</option>';
    getAvailablePlayers().forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=`${p.player_name} (ID: ${p.player_id})`;ps.appendChild(o);});
    ts.innerHTML='<option value="">Choose a team...</option>';
    TEAMS.forEach(t=>{const o=document.createElement('option');o.value=t.id;o.textContent=t.name;ts.appendChild(o);});
    checkAuctionStatus();
  }
  showPage('adminPage');
}

function handlePlayerSold(){
  const pid=parseInt(document.getElementById('playerSelect').value);
  const tid=parseInt(document.getElementById('teamSelect').value);
  const pr=parseInt(document.getElementById('priceInput').value);
  if(!pid||!tid||!pr||pr<=0){alert('Please fill all fields with valid values');return;}
  const pls=getAllPlayers();
  const pl=pls.find(p=>p.id===pid);
  if(!pl){alert('Player not found');return;}
  const team=TEAMS.find(t=>t.id===tid);
  if(!team){alert('Team not found');return;}
  if(teamData[tid].players_purchased>=team.max_players){alert(`Team already has maximum ${team.max_players} players!`);return;}
  if(teamData[tid].purse_left<pr){alert('Insufficient purse!');return;}
  const remainingPurse=teamData[tid].purse_left-pr;
  if(remainingPurse<2000&&teamData[tid].players_purchased<team.max_players-1){alert(`Cannot sell! Team will have ₹${remainingPurse.toLocaleString()} left, which is less than minimum ₹2,000 required.`);return;}
  pl.status='sold';pl.team_id=tid;pl.price=pr;pl.tournament=currentTournament;
  teamData[tid].purse_left-=pr;teamData[tid].players_purchased+=1;
  saveAllPlayers(pls);saveTeamsData();
  if(teamData[tid].players_purchased===9){alert(`9th player sold to ${team.name}!\nRemaining purse: ₹${teamData[tid].purse_left.toLocaleString()}\nPlayers remaining: ${team.max_players-9}`);}
  alert('Player sold successfully!');
  document.getElementById('playerSelect').value='';
  document.getElementById('teamSelect').value='';
  document.getElementById('priceInput').value='';
  showAdminPage();
}

function handlePlayerUnsold(){
  const pid=parseInt(document.getElementById('playerSelect').value);
  if(!pid){alert('Please select a player');return;}
  const pls=getAllPlayers();
  const pl=pls.find(p=>p.id===pid);
  if(!pl){alert('Player not found');return;}
  pl.status='unsold';pl.team_id=null;pl.price=0;pl.tournament=currentTournament;
  saveAllPlayers(pls);
  alert('Player marked as unsold');
  document.getElementById('playerSelect').value='';
  showAdminPage();
}

function showUnsoldPlayers(){
  const ups=getUnsoldPlayers();
  const ul=document.getElementById('unsoldList');
  if(ups.length===0){ul.innerHTML='<div class="empty-state">No unsold players</div>';}
  else{
    ul.innerHTML='';
    ups.forEach(p=>{
      const i=document.createElement('div');
      i.className='unsold-item';
      i.innerHTML=`<div class="unsold-item-name">${p.player_name}</div><div class="unsold-item-id">ID: ${p.player_id}</div>`;
      i.style.cursor='pointer';
      i.addEventListener('click',()=>{
        const pls=getAllPlayers();
        const player=pls.find(pl=>pl.id===p.id);
        if(player){
          player.status='available';
          player.tournament=null;
          saveAllPlayers(pls);
          alert(`${p.player_name} is now available for auction`);
          showAdminPage();
        }
      });
      ul.appendChild(i);
    });
  }
  ul.classList.toggle('active');
}

function showPage(pn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(pn).classList.add('active');
}

function setupEventListeners(){
  document.getElementById('adminBtn').addEventListener('click',()=>document.getElementById('loginModal').classList.add('active'));
  document.getElementById('loginForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(document.getElementById('username').value==='jeet'&&document.getElementById('password').value==='jeet'){
      document.getElementById('loginModal').classList.remove('active');
      document.getElementById('username').value='';
      document.getElementById('password').value='';
      showAdminPage();
    }else{alert('Invalid credentials!');}
  });
  document.getElementById('cancelLogin').addEventListener('click',()=>{
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('username').value='';
    document.getElementById('password').value='';
  });
  document.getElementById('soldBtn').addEventListener('click',handlePlayerSold);
  document.getElementById('unsoldBtn').addEventListener('click',handlePlayerUnsold);
  document.getElementById('backToHome').addEventListener('click',()=>showPage('homePage'));
  document.getElementById('backToHomeFromAdmin').addEventListener('click',()=>showPage('homePage'));
  document.getElementById('createTournamentBtn').addEventListener('click',createTournament);
  document.getElementById('tournamentSelect').addEventListener('change',handleTournamentChange);
  document.getElementById('restartWithUnsoldBtn').addEventListener('click',restartWithUnsoldPlayers);
  document.getElementById('showUnsoldBtn').addEventListener('click',showUnsoldPlayers);
  document.getElementById('downloadExcelBtn').addEventListener('click',downloadAuctionExcel);
}

function resetAllData(){localStorage.removeItem(STORAGE_KEY_TEAMS);localStorage.removeItem(STORAGE_KEY_PLAYERS);location.reload();}

function loadTournamentSelect(){
  const tournaments=getTournaments();
  const select=document.getElementById('tournamentSelect');
  select.innerHTML='<option value="">Select Tournament</option>';
  tournaments.forEach(t=>{
    const opt=document.createElement('option');
    opt.value=t.name;
    opt.textContent=t.name;
    if(t.name===currentTournament)opt.selected=true;
    select.appendChild(opt);
  });
}

function createTournament(){
  const nameInput=document.getElementById('tournamentNameInput');
  const name=nameInput.value.trim();
  if(!name){alert('Please enter tournament name');return;}
  const tournaments=getTournaments();
  if(tournaments.some(t=>t.name===name)){alert('Tournament name already exists');return;}
  tournaments.push({name,createdAt:new Date().toISOString()});
  saveTournaments(tournaments);
  currentTournament=name;
  localStorage.setItem(STORAGE_KEY_CURRENT_TOURNAMENT,currentTournament);
  const pls=getAllPlayers();
  pls.forEach(p=>{p.status='available';p.team_id=null;p.price=0;p.tournament=null;});
  saveAllPlayers(pls);
  Object.values(teamData).forEach(t=>{t.purse_left=100000;t.players_purchased=0;});
  saveTeamsData();
  nameInput.value='';
  loadTournamentSelect();
  alert(`Tournament "${name}" created successfully! You can now start the auction.`);
  showAdminPage();
}

function handleTournamentChange(e){
  const selected=e.target.value;
  if(!selected){currentTournament=null;}
  else{currentTournament=selected;}
  localStorage.setItem(STORAGE_KEY_CURRENT_TOURNAMENT,currentTournament||'');
  teamData=JSON.parse(localStorage.getItem(STORAGE_KEY_TEAMS));
  renderTeamsGrid();
  showPage('homePage');
}

function restartWithUnsoldPlayers(){
  if(!currentTournament){alert('No active tournament');return;}
  const pls=getAllPlayers();
  const unsold=pls.filter(p=>p.tournament===currentTournament&&p.status==='unsold');
  if(unsold.length===0){alert('No unsold players to restart auction');return;}
  unsold.forEach(p=>{p.status='available';p.tournament=null;});
  saveAllPlayers(pls);
  alert(`Restarting auction with ${unsold.length} unsold players`);
  showAdminPage();
}

function checkAuctionStatus(){
  if(!currentTournament)return;
  const pls=getAllPlayers();
  const tournamentPlayers=pls.filter(p=>p.tournament===currentTournament);
  const available=pls.filter(p=>!p.tournament||p.status==='available');
  const unsold=tournamentPlayers.filter(p=>p.status==='unsold');
  const statusDiv=document.getElementById('auctionStatus');
  const restartBtn=document.getElementById('restartWithUnsoldBtn');
  if(available.length===0&&unsold.length>0){
    statusDiv.innerHTML=`<div class="auction-status complete">All players processed! ${unsold.length} players unsold.</div>`;
    restartBtn.style.display='block';
  }else{
    statusDiv.innerHTML='';
    restartBtn.style.display='none';
  }
}

function downloadAuctionExcel(){
  const pls=getAllPlayers();
  const soldPlayers=pls.filter(p=>p.status==='sold');
  if(soldPlayers.length===0){alert('No sold players to download');return;}
  let csv='ID,Player Name,Team,Sold For\n';
  soldPlayers.forEach(p=>{
    const team=TEAMS.find(t=>t.id===p.team_id);
    const teamName=team?team.name:'Unknown';
    csv+=`${p.player_id},"${p.player_name}","${teamName}",${p.price}\n`;
  });
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const link=document.createElement('a');
  const url=URL.createObjectURL(blob);
  const fileName=currentTournament?`${currentTournament}_auction.csv`:'auction_results.csv';
  link.setAttribute('href',url);
  link.setAttribute('download',fileName);
  link.style.visibility='hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert('Auction data downloaded successfully!');
}
