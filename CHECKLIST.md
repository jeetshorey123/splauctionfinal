# Sankalp Premier League Season 2 - Pre-Deployment Checklist ✅

## Before You Deploy

### 1. Supabase Setup
- [ ] Created Supabase account
- [ ] Created new project in Supabase
- [ ] Copied Project URL
- [ ] Copied anon/public key
- [ ] Created `teams` table (using SQL from SETUP_GUIDE.md)
- [ ] Created `players` table (using SQL from SETUP_GUIDE.md)
- [ ] Enabled Row Level Security
- [ ] Created policies for both tables
- [ ] Imported sample players (or added your own)

### 2. Code Configuration
- [ ] Updated `SUPABASE_URL` in `public/app.js`
- [ ] Updated `SUPABASE_ANON_KEY` in `public/app.js`
- [ ] Saved the file

### 3. Local Testing
- [ ] Opened `public/index.html` in browser
- [ ] Can see all 6 teams displayed
- [ ] Teams show correct initial purse (₹100,000)
- [ ] Can open admin login modal
- [ ] Can login with jeet/jeet credentials
- [ ] Admin page loads correctly
- [ ] Can see players in dropdown
- [ ] Can sell a player to a team
- [ ] Team purse updates correctly
- [ ] Player appears in team details
- [ ] Can mark player as unsold
- [ ] Unsold list shows correctly

### 4. Database Verification
Go to Supabase and verify:
- [ ] `teams` table has 6 teams
- [ ] `players` table has players with status 'available'
- [ ] After testing: Can see sold players with team_id and price
- [ ] After testing: Can see unsold players with status 'unsold'

### 5. Ready to Deploy
- [ ] All tests passed
- [ ] Code is committed to Git (optional but recommended)
- [ ] Removed any sensitive data or test data (if needed)

## Deployment Options

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Vercel Dashboard
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Set output directory to: `public`
5. Deploy

### Option 3: Other Hosting
Simply upload the `public` folder to any static hosting service:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3
- etc.

## Post-Deployment

- [ ] Website is live and accessible
- [ ] All teams display correctly
- [ ] Admin login works
- [ ] Player auction functionality works
- [ ] Mobile responsive design works on phone
- [ ] Share the URL with your team! 🎉

## Quick Commands

### Test locally (if you have Python installed):
```bash
cd public
python -m http.server 8000
# Visit http://localhost:8000
```

### Or use Node.js http-server:
```bash
npm install -g http-server
http-server public -p 8000
```

## Support

If something doesn't work:
1. Check browser console for errors (F12)
2. Verify Supabase credentials are correct
3. Check that database tables exist
4. Review SETUP_GUIDE.md step by step
5. Make sure Row Level Security policies are created

## Features to Test

✅ **Home Page:**
- 6 teams grid
- Team logos display
- Purse amounts
- Player counts

✅ **Team Details:**
- Click on team card
- See team summary
- View purchased players table
- Back button works

✅ **Admin Login:**
- Modal opens/closes
- Login validation
- Correct credentials (jeet/jeet)
- Redirect to admin page

✅ **Admin Auction:**
- Player dropdown populates
- Team dropdown shows all teams
- Can enter price
- Sold button works
- Unsold button works
- Dropdowns update after action

✅ **Mobile Responsive:**
- Works on phone
- Buttons are touch-friendly
- Text is readable
- No horizontal scrolling
- Modal fits screen

---

**Ready? Let's launch! 🚀**
