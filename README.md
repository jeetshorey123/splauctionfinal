# Sankalp Premier League Season 2 🏏

A modern, mobile-responsive web application for managing cricket player auctions for Sankalp Premier League Season 2.

## Features

- **6 Teams Display**: View all teams with their logos, purse remaining, and player stats
- **Team Details**: Click on any team to see purchased players and prices
- **Admin Panel**: Secure admin interface for managing player auctions
- **Player Auction System**: Sell players to teams or mark them as unsold
- **Unsold Players Management**: Track and re-auction unsold players
- **Mobile Responsive**: Clean, modern UI that works perfectly on mobile and desktop
- **Real-time Updates**: Powered by Supabase for instant data synchronization

## Teams

1. **Sankalp Warriors** - Professional team logo
2. **Sankalp Fighters** - Professional team logo
3. **Sankalp Valiant** - Professional team logo
4. **Sankalp Strikers** - Professional team logo
5. **Sankalp Mavericks** - Professional team logo
6. **Sankalp Legends** - Professional team logo

Each team starts with ₹100,000 purse and can purchase up to 9 players.

## Setup Instructions

### 1. Supabase Setup

1. Go to [Supabase](https://supabase.com/) and create a new project
2. Once your project is created, go to **Project Settings** > **API**
3. Copy your **Project URL** and **anon/public key**

### 2. Create Database Tables

Run these SQL queries in your Supabase SQL Editor:

```sql
-- Create teams table
CREATE TABLE teams (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  logo TEXT NOT NULL,
  purse_left INTEGER DEFAULT 100000,
  players_purchased INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create players table
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  player_id TEXT NOT NULL UNIQUE,
  player_name TEXT NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'unsold')),
  team_id INTEGER REFERENCES teams(id),
  price INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (you can restrict this later)
CREATE POLICY "Enable read access for all users" ON teams FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON teams FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON teams FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON players FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON players FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON players FOR UPDATE USING (true);
```

### 3. Add Players to Database

You have 69 registered players ready to import!

Use the SQL file provided:

```sql
-- Use the import_players.sql file
-- In Supabase SQL Editor:
-- 1. Click "SQL Editor" > "New Query"
-- 2. Copy and paste contents from import_players.sql
-- 3. Click "Run"
-- This imports all 69 players from player_registrations.csv
```

Or use the Supabase dashboard to import from CSV.

### 4. Configure Application

1. Open `public/app.js`
2. Replace the Supabase configuration at the top:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

### 5. Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy your application

Or simply push to GitHub and connect your repository to Vercel.

## Admin Access

- **Username**: `jeet`
- **Password**: `jeet`

## Admin Features

1. **Player Selection**: Choose from available players dropdown
2. **Team Selection**: Select which team purchases the player
3. **Price Input**: Enter the purchase price
4. **Sold**: Mark player as sold and assign to team
5. **Unsold**: Mark player as unsold (will be added to unsold list)
6. **Show Unsold List**: View all unsold players for re-auction

## Player Management Workflow

1. Admin selects a player from dropdown (shows Player Name and ID)
2. Admin selects the team that wants to purchase
3. Admin enters the price
4. Click **Sold** to complete the transaction
   - Player is removed from available list
   - Team's purse is reduced
   - Player count increases
5. Click **Unsold** if player doesn't get sold
   - Player is added to unsold list
6. Once all players are done, open **Unsold List**
7. Re-auction unsold players using the same process
8. Players can go unsold multiple times

## Project Structure

```
spl/
├── public/
│   ├── index.html    # Main HTML file
│   ├── styles.css    # Styling and responsive design
│   └── app.js        # JavaScript logic and Supabase integration
├── vercel.json       # Vercel configuration
└── README.md         # This file
```

## Technologies Used

- **HTML5**: Structure
- **CSS3**: Modern, responsive styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for functionality
- **Supabase**: Backend database and real-time data
- **Vercel**: Deployment and hosting

## Mobile Optimization

The application is fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly buttons
- Scrollable tables for small screens
- Adaptive font sizes
- Mobile-first design approach

## License

MIT License - Feel free to use and modify for your needs.

## Support

For issues or questions, please create an issue in the repository.

---

**Sankalp Premier League Season 2** - Where Champions Are Made! 🏆


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
