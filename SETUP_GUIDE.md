# Quick Setup Guide

## Step-by-Step Supabase Configuration

### 1. Create Supabase Account & Project
1. Visit https://supabase.com/
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - Project name: `sankalp-premier-league`
   - Database password: (create a strong password)
   - Region: Choose closest to you
5. Wait for project to be created (1-2 minutes)

### 2. Get API Credentials
1. In your Supabase project, click on "Settings" (gear icon)
2. Click "API" in the sidebar
3. Copy the following:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

### 3. Create Database Tables
1. Click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste this SQL:

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

-- Create policies
CREATE POLICY "Enable read access for all users" ON teams FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON teams FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON teams FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON players FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON players FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON players FOR UPDATE USING (true);
```

4. Click "Run" button

### 4. Import Sample Players
1. In Supabase, click "Table Editor" in sidebar
2. Select "players" table
3. Use the SQL method for easy import:
   - Click "SQL Editor" in sidebar
   - Click "New Query"
   - Copy and paste the entire contents from `import_players.sql`
   - Click "Run"
   - This will import all 69 players from your player_registrations.csv

**Alternative: Manual CSV Import**
- Click the three dots (...) > "Import data from CSV"
- Prepare a CSV with columns: player_id, player_name, status
- Upload and import

### 5. Update App Configuration
1. Open `public/app.js` in your code editor
2. Find these lines at the top:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

3. Replace with your actual values:
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';  // Your Project URL
const SUPABASE_ANON_KEY = 'eyJxxxxxxxxx...';  // Your anon public key
```

### 6. Test Locally
1. Open `public/index.html` in a web browser
2. You should see the 6 teams displayed
3. Click "Admin Login"
   - Username: `jeet`
   - Password: `jeet`
4. Test the player auction functionality

### 7. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

#### Option B: Using Vercel Website
1. Go to https://vercel.com/
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `public`
6. Click "Deploy"

### 8. Add More Players
You can add players in two ways:

#### Via Supabase Dashboard:
1. Go to Table Editor > players
2. Click "Insert row"
3. Fill in:
   - player_id: (e.g., P061)
   - player_name: (e.g., John Doe)
   - status: available

#### Via SQL:
```sql
INSERT INTO players (player_id, player_name, status) VALUES
  ('P061', 'John Doe', 'available'),
  ('P062', 'Jane Smith', 'available');
```

## Troubleshooting

### Players not showing in dropdown
- Check if players exist in Supabase table
- Check browser console for errors
- Verify Supabase URL and key are correct

### Can't log into admin
- Make sure username is exactly: `jeet`
- Make sure password is exactly: `jeet`
- Case sensitive!

### Team purse not updating
- Check Supabase policies are created
- Check browser console for errors
- Verify team exists in teams table

### Mobile layout issues
- Clear browser cache
- Try in incognito/private mode
- Ensure styles.css is loaded

## Admin Workflow Example

1. Login as admin (jeet/jeet)
2. Select player "Virat Sharma" from dropdown
3. Select team "Sankalp Warriors"
4. Enter price: 15000
5. Click "Sold"
6. Player is now assigned to Warriors
7. Warriors purse: 100000 - 15000 = 85000
8. Warriors players purchased: 0 + 1 = 1

## Need Help?

- Check the main README.md for detailed documentation
- Visit Supabase documentation: https://supabase.com/docs
- Visit Vercel documentation: https://vercel.com/docs

---

Good luck with your auction! 🏏🎉
