# Quick Start Guide - CMU Tech Clubs Website



The website has been built in the `club-website` directory with all your media, professional design, and full functionality.

## Test It Now (2 steps)

1. **Start the development server:**
   ```bash
   cd club-website
   npm run dev
   ```

2. **Open in browser:**
   - Visit: http://localhost:5173
   - Navigate through all pages
   - Test on mobile view (resize browser)

## Deploy to GitHub Pages (3 steps)

1. **Navigate to the project:**
   ```bash
   cd club-website
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** (first time only):
   - Go to: https://github.com/yourusername/website/settings/pages
   - Source: Select "gh-pages" branch
   - Folder: / (root)
   - Click Save
   - Wait 2-3 minutes, then visit: https://yourusername.github.io/website/

## What You Have

### Pages
- **Landing Page** (`/`) - Overview of both clubs
- **Cybersecurity Club** (`/cybersecurity`) - Full club page with tabs
- **TechSynergy Club** (`/techsynergy`) - Full club page with tabs

### Features
✅ Responsive design (mobile, tablet, desktop)
✅ Photo galleries from Cyber Fair 2025 and ICPC 2025
✅ Smooth animations and modern UI
✅ Contact information and Discord link
✅ Placeholder content ready for your updates

## Update Content Later

### Common Updates

**Add Faculty Advisor:**
- Edit: `src/pages/CybersecurityPage.jsx` (line ~265)
- Edit: `src/pages/TechSynergyPage.jsx` (line ~265)
- Replace: `<em>Information coming soon</em>` with actual info

**Update Projects:**
- Edit: `src/pages/CybersecurityPage.jsx` (Projects tab section)
- Edit: `src/pages/TechSynergyPage.jsx` (Projects tab section)
- Replace placeholder descriptions with real project info

**Add More Photos:**
1. Copy images to: `src/assets/cyber-fair/` or `src/assets/icpc/`
2. Import in the page component
3. Add to the gallery array
4. Redeploy: `npm run deploy`

**Change Meeting Time/Location:**
- Edit: `src/components/Footer.jsx`
- Edit sidebar sections in club pages

## File Locations

```
club-website/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx       ← Main landing page
│   │   ├── CybersecurityPage.jsx ← CyberSec club page
│   │   └── TechSynergyPage.jsx   ← TechSynergy club page
│   ├── components/
│   │   ├── Navigation.jsx        ← Top menu
│   │   └── Footer.jsx            ← Bottom contact info
│   └── assets/                   ← All images
└── README.md                     ← Full documentation
```

## Need Help?

- **Full documentation**: See `README.md` in club-website folder
- **Deployment guide**: See `DEPLOYMENT.md` in club-website folder
- **Project summary**: See `WEBSITE_SUMMARY.md` in parent folder

## Your Contact Info (Already Added)

✅ Email: jjalonzo-estra@mavs.coloradomesa.edu
✅ Discord: https://discord.gg/Uyy3Baqxnb
✅ Meeting: Wednesday 4:00 PM, Confluence 110

## Commands Cheat Sheet

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Tips

1. **Always test locally** (`npm run dev`) before deploying
2. **Make changes incrementally** - easier to track what works
3. **Keep backups** of content before major changes
4. **Use Git commits** to track your updates
5. **Check mobile view** - resize browser to test responsiveness

## What's Next?

1. ✅ Test the site locally
2. ✅ Deploy to GitHub Pages
3. ⏳ Replace placeholder content with real information
4. ⏳ Add faculty advisor details
5. ⏳ Update project descriptions
6. ⏳ Add more event photos as they happen
7. ⏳ Share with club members and recruiters!

---

**You're all set! The website is production-ready and waiting for deployment.** 🚀
