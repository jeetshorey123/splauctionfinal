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

-- Insert initial players data (69 players from CSV)
INSERT INTO players (player_id, player_name, status, team_id, price, tournament_id) VALUES
('P001', 'Lakshank Furiya', 'available', NULL, 0, NULL),
('P002', 'Kaushik yamber', 'available', NULL, 0, NULL),
('P003', 'Krishang bhardwaj', 'available', NULL, 0, NULL),
('P004', 'Aryan Singh(101)', 'available', NULL, 0, NULL),
('P005', 'Ashish R Pandey', 'available', NULL, 0, NULL),
('P006', 'Abhishek seth', 'available', NULL, 0, NULL),
('P007', 'Mitesh Mistry', 'available', NULL, 0, NULL),
('P008', 'Rupesh singh', 'available', NULL, 0, NULL),
('P009', 'Adi rane', 'available', NULL, 0, NULL),
('P010', 'Pratyush prakash kadam', 'available', NULL, 0, NULL),
('P011', 'Jatin', 'available', NULL, 0, NULL),
('P012', 'Nilesh Vishwakarma', 'available', NULL, 0, NULL),
('P013', 'Harish Jetli', 'available', NULL, 0, NULL),
('P014', 'Nikunj toshniwal', 'available', NULL, 0, NULL),
('P015', 'Parth Doshi', 'available', NULL, 0, NULL),
('P016', 'Mihir Makwana', 'available', NULL, 0, NULL),
('P017', 'Bharat miatry', 'available', NULL, 0, NULL),
('P018', 'Kishore', 'available', NULL, 0, NULL),
('P019', 'Aaryan mistry', 'available', NULL, 0, NULL),
('P020', 'Naveen Porwal', 'available', NULL, 0, NULL),
('P021', 'Prateek Gond', 'available', NULL, 0, NULL),
('P022', 'Hait Dama', 'available', NULL, 0, NULL),
('P023', 'Jay patel', 'available', NULL, 0, NULL),
('P024', 'Monish Shastri', 'available', NULL, 0, NULL),
('P025', 'Pramod Rane', 'available', NULL, 0, NULL),
('P026', 'SUNIL BOHRA', 'available', NULL, 0, NULL),
('P027', 'Viraj singh', 'available', NULL, 0, NULL),
('P028', 'Vimarsh', 'available', NULL, 0, NULL),
('P029', 'Sidharth singh', 'available', NULL, 0, NULL),
('P030', 'Tejas Suthar', 'available', NULL, 0, NULL),
('P031', 'Vikas mishra', 'available', NULL, 0, NULL),
('P032', 'Krishna', 'available', NULL, 0, NULL),
('P033', 'Sadashiv devadiga', 'available', NULL, 0, NULL),
('P034', 'Rakesh Singh', 'available', NULL, 0, NULL),
('P035', 'Shailesh Singh', 'available', NULL, 0, NULL),
('P036', 'Aryan Singh(602)', 'available', NULL, 0, NULL),
('P037', 'jeet shorey', 'available', NULL, 0, NULL),
('P038', 'Kush Dama', 'available', NULL, 0, NULL),
('P039', 'Veer dama', 'available', NULL, 0, NULL),
('P040', 'Ajay seth', 'available', NULL, 0, NULL),
('P041', 'Dinesh j suthar', 'available', NULL, 0, NULL),
('P042', 'Raj singh', 'available', NULL, 0, NULL),
('P043', 'Vadant kabra', 'available', NULL, 0, NULL),
('P044', 'Jeevan Gunjal', 'available', NULL, 0, NULL),
('P045', 'Deepak Yadav', 'available', NULL, 0, NULL),
('P046', 'Deep Dama', 'available', NULL, 0, NULL),
('P047', 'Kalash Porwal', 'available', NULL, 0, NULL),
('P048', 'AARUSH GUPTA BADA', 'available', NULL, 0, NULL),
('P049', 'Jimit', 'available', NULL, 0, NULL),
('P050', 'deepak dama', 'available', NULL, 0, NULL),
('P051', 'manoj mishra', 'available', NULL, 0, NULL),
('P052', 'Veer', 'available', NULL, 0, NULL),
('P053', 'Yuvraj Singh', 'available', NULL, 0, NULL),
('P054', 'Rishi Devadiga', 'available', NULL, 0, NULL),
('P055', 'Kailash Jain', 'available', NULL, 0, NULL),
('P056', 'Arpit ashish pandey', 'available', NULL, 0, NULL),
('P057', 'Rudhra Dev Jetli', 'available', NULL, 0, NULL),
('P058', 'Meet Dama', 'available', NULL, 0, NULL),
('P059', 'Sahil rastogi', 'available', NULL, 0, NULL),
('P060', 'Rounik singh', 'available', NULL, 0, NULL),
('P061', 'Anuj Doshi', 'available', NULL, 0, NULL),
('P062', 'Vansh suryawanshi', 'available', NULL, 0, NULL),
('P063', 'Nikhil Waghela', 'available', NULL, 0, NULL),
('P064', 'diinesh suthar', 'available', NULL, 0, NULL),
('P065', 'vivek mehra', 'available', NULL, 0, NULL),
('P066', 'jimmy mehta', 'available', NULL, 0, NULL),
('P067', 'jighnesh mehta', 'available', NULL, 0, NULL),
('P068', 'nilesh sharma', 'available', NULL, 0, NULL),
('P069', 'prakash kadam', 'available', NULL, 0, NULL);

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
