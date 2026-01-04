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

const SCHEDULE = [
  { match: 1, team1: 'mavericks', team2: 'valiants', date: '25 Jan 2026', time: '11:00 AM' },
  { match: 2, team1: 'legends', team2: 'warriors', date: '25 Jan 2026', time: '11:45 AM' },
  { match: 3, team1: 'challengers', team2: 'mavericks', date: '25 Jan 2026', time: '12:30 PM' },
  { match: 4, team1: 'valiants', team2: 'legends', date: '25 Jan 2026', time: '1:15 PM' },
  { match: 5, team1: 'warriors', team2: 'challengers', date: '25 Jan 2026', time: '2:00 PM' },
  { match: 6, team1: 'mavericks', team2: 'legends', date: '25 Jan 2026', time: '2:45 PM' },
  { match: 7, team1: 'strikers', team2: 'valiants', date: '25 Jan 2026', time: '3:30 PM' },
  { match: 8, team1: 'warriors', team2: 'mavericks', date: '25 Jan 2026', time: '4:15 PM' },
  { match: 9, team1: 'strikers', team2: 'legends', date: '25 Jan 2026', time: '5:00 PM' },
  { match: 10, team1: 'challengers', team2: 'valiants', date: '25 Jan 2026', time: '5:45 PM' },
  { match: 11, team1: 'strikers', team2: 'warriors', date: '25 Jan 2026', time: '6:30 PM' },
  { match: 12, team1: 'legends', team2: 'challengers', date: '25 Jan 2026', time: '7:15 PM' },
  { match: 13, team1: 'strikers', team2: 'mavericks', date: '25 Jan 2026', time: '8:00 PM' },
  { match: 14, team1: 'valiants', team2: 'warriors', date: '25 Jan 2026', time: '8:45 PM' },
  { match: 15, team1: 'strikers', team2: 'challengers', date: '25 Jan 2026', time: '9:30 PM' }
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
          </tr>
        </thead>
        <tbody>
          ${SCHEDULE.map(match => {
            const team1Info = getTeamInfo(match.team1);
            const team2Info = getTeamInfo(match.team2);
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
  }
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('backToHome').addEventListener('click', () => showPage('homePage'));
  document.getElementById('navHome').addEventListener('click', () => showPage('homePage'));
  document.getElementById('navSchedule').addEventListener('click', () => showPage('schedulePage'));
}
