-- Drop existing tables if they exist (clean slate)
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS tournaments CASCADE;

-- Create tournaments table
CREATE TABLE tournaments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teams table
CREATE TABLE teams (
  id INTEGER,
  tournament_id UUID REFERENCES tournaments(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  logo TEXT,
  purse_left INTEGER DEFAULT 100000,
  players_purchased INTEGER DEFAULT 0,
  PRIMARY KEY (id, tournament_id)
);

-- Create players table
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  player_id TEXT NOT NULL,
  player_name TEXT NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'unsold')),
  team_id INTEGER,
  price INTEGER DEFAULT 0,
  tournament_id UUID REFERENCES tournaments(id) ON DELETE CASCADE,
  UNIQUE(player_id, tournament_id)
);

-- Insert initial players data (62 confirmed players)
INSERT INTO players (player_id, player_name, status, team_id, price, tournament_id) VALUES
('P001', 'Lakshank Furiya', 'available', NULL, 0, NULL),
('P002', 'Kaushik yamber', 'available', NULL, 0, NULL),
('P003', 'Krishang bhardwaj', 'available', NULL, 0, NULL),
('P004', 'Aryan Singh(101)', 'available', NULL, 0, NULL),
('P005', 'Ashish R Pandey', 'available', NULL, 0, NULL),
('P006', 'Abhishek seth', 'available', NULL, 0, NULL),
('P007', 'Mitesh Mistry', 'available', NULL, 0, NULL),
('P008', 'Rupesh singh', 'available', NULL, 0, NULL),
('P009', 'Jatin', 'available', NULL, 0, NULL),
('P010', 'Nilesh Vishwakarma', 'available', NULL, 0, NULL),
('P011', 'Harish Jetli', 'available', NULL, 0, NULL),
('P012', 'Nikunj toshniwal', 'available', NULL, 0, NULL),
('P013', 'Parth Doshi', 'available', NULL, 0, NULL),
('P014', 'Mihir Makwana', 'available', NULL, 0, NULL),
('P015', 'Bharat mistry', 'available', NULL, 0, NULL),
('P016', 'Kishore', 'available', NULL, 0, NULL),
('P017', 'Aaryan mistry', 'available', NULL, 0, NULL),
('P018', 'Naveen Porwal', 'available', NULL, 0, NULL),
('P019', 'Prateek Gond', 'available', NULL, 0, NULL),
('P020', 'Hait Dama', 'available', NULL, 0, NULL),
('P021', 'Jay patel', 'available', NULL, 0, NULL),
('P022', 'Monish Shastri', 'available', NULL, 0, NULL),
('P023', 'Pramod Rane', 'available', NULL, 0, NULL),
('P024', 'SUNIL BOHRA', 'available', NULL, 0, NULL),
('P025', 'Viraj singh', 'available', NULL, 0, NULL),
('P026', 'aayan', 'available', NULL, 0, NULL),
('P027', 'Sidharth singh', 'available', NULL, 0, NULL),
('P028', 'Tejas Suthar', 'available', NULL, 0, NULL),
('P029', 'Vikas mishra', 'available', NULL, 0, NULL),
('P030', 'Kishan V', 'available', NULL, 0, NULL),
('P031', 'Sadashiv devadiga', 'available', NULL, 0, NULL),
('P032', 'Rakesh Singh', 'available', NULL, 0, NULL),
('P033', 'Shailesh Singh', 'available', NULL, 0, NULL),
('P034', 'Aryan Singh(602)', 'available', NULL, 0, NULL),
('P035', 'jeet shorey', 'available', NULL, 0, NULL),
('P036', 'Kush Dama', 'available', NULL, 0, NULL),
('P037', 'Veer dama', 'available', NULL, 0, NULL),
('P038', 'Ajay seth', 'available', NULL, 0, NULL),
('P039', 'Raj  singh', 'available', NULL, 0, NULL),
('P040', 'Jeevan Gunjal', 'available', NULL, 0, NULL),
('P041', 'Deep Dama', 'available', NULL, 0, NULL),
('P042', 'Kalash Porwal', 'available', NULL, 0, NULL),
('P043', 'deepak dama', 'available', NULL, 0, NULL),
('P044', 'manoj mishra', 'available', NULL, 0, NULL),
('P045', 'Yuvraj Singh', 'available', NULL, 0, NULL),
('P046', 'Rishi Devadiga', 'available', NULL, 0, NULL),
('P047', 'Kailash Jain', 'available', NULL, 0, NULL),
('P048', 'Meet Dama', 'available', NULL, 0, NULL),
('P049', 'Sahil rastogi', 'available', NULL, 0, NULL),
('P050', 'Rounik singh', 'available', NULL, 0, NULL),
('P051', 'Anuj Doshi', 'available', NULL, 0, NULL),
('P052', 'Nikhil Waghela', 'available', NULL, 0, NULL),
('P053', 'mahesh gaddam', 'available', NULL, 0, NULL),
('P054', 'amit mistry', 'available', NULL, 0, NULL),
('P055', 'Adi rane', 'available', NULL, 0, NULL),
('P056', 'Pratyush prakash kadam', 'available', NULL, 0, NULL),
('P057', 'Vadant kabra', 'available', NULL, 0, NULL),
('P058', 'aarush gupta', 'available', NULL, 0, NULL),
('P059', 'veer mehta', 'available', NULL, 0, NULL),
('P060', 'arpit pandey', 'available', NULL, 0, NULL),
('P061', 'Player 61', 'available', NULL, 0, NULL),
('P062', 'Player 62', 'available', NULL, 0, NULL);

-- Enable Row Level Security
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (adjust as needed for production)
CREATE POLICY "Allow public read access on tournaments" ON tournaments FOR SELECT USING (true);
CREATE POLICY "Allow public insert on tournaments" ON tournaments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on tournaments" ON tournaments FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on tournaments" ON tournaments FOR DELETE USING (true);

CREATE POLICY "Allow public read access on teams" ON teams FOR SELECT USING (true);
CREATE POLICY "Allow public insert on teams" ON teams FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on teams" ON teams FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on teams" ON teams FOR DELETE USING (true);

CREATE POLICY "Allow public read access on players" ON players FOR SELECT USING (true);
CREATE POLICY "Allow public insert on players" ON players FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on players" ON players FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on players" ON players FOR DELETE USING (true);
