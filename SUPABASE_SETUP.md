# Supabase Setup Instructions

## Step 1: Run the SQL Schema

1. Go to your Supabase project: https://pwmefeaoqwcjycbnvmgw.supabase.co
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL script to create tables and insert player data

## Step 2: Verify Tables Created

Check that these tables exist:
- `tournaments` - Stores tournament information
- `teams` - Stores team data per tournament
- `players` - Stores all 69 players with their status

## Step 3: Test the Application

1. Start the local server: `python -m http.server 3000 --directory public`
2. Open http://localhost:3000
3. Login as admin (username: jeet, password: jeet)
4. Create a new tournament
5. Start auctioning players

## Features Implemented

### Tournament Management
- Create tournaments
- Select active tournament from dropdown
- Each tournament has isolated data

### Player Auction
- Sell players to teams
- Mark players as unsold
- Click unsold players to add back to auction
- Download auction results as CSV

### Team Management (New!)
- View all teams with their players and purse
- Edit team purse and player count
- Delete players from teams (returns to auction)

### Data Persistence
- All data stored in Supabase
- No localStorage dependency
- Real-time sync across devices

## Admin Panel Features

1. **Create Tournament**: Enter name and create new tournament
2. **Auction Players**: Select player, team, price and sell
3. **View Unsold**: See and re-auction unsold players
4. **Team Management**: View/edit teams and remove players
5. **Download Excel**: Export auction results

## Database Structure

### tournaments
- id (UUID)
- name (TEXT)
- created_at (TIMESTAMP)

### teams
- id (INTEGER)
- tournament_id (UUID FK)
- name (TEXT)
- logo (TEXT)
- purse_left (INTEGER)
- players_purchased (INTEGER)

### players
- id (SERIAL)
- player_id (TEXT)
- player_name (TEXT)
- status (available/sold/unsold)
- team_id (INTEGER)
- price (INTEGER)
- tournament_id (UUID FK)
