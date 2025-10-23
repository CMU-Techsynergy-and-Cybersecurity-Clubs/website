# Deployment Instructions for CMU Tech Clubs Website

## Quick Deployment

To deploy the website to GitHub Pages, run:

```bash
cd club-website
npm run deploy
```

This will automatically build and deploy the site to GitHub Pages.

## Detailed Deployment Steps

### Initial Setup (One-time only)

1. **Ensure Git is initialized** in your repository

2. **Verify the base path** in `vite.config.js`:
   - The `base` is currently set to `/website/`
   - This should match your GitHub repository name
   - Your site will be available at: `https://yourusername.github.io/website/`

3. **Install dependencies** (if not already done):
   ```bash
   cd club-website
   npm install
   ```

### Deploying Updates

Every time you want to deploy changes:

1. **Navigate to the project directory**:
   ```bash
   cd club-website
   ```

2. **Test locally** (recommended):
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to verify changes

3. **Build and deploy**:
   ```bash
   npm run deploy
   ```

This command will:
- Run `npm run build` to create an optimized production build
- Deploy the `dist` folder to the `gh-pages` branch
- Push to GitHub

4. **Enable GitHub Pages** (first deployment only):
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Source: Select "gh-pages" branch
   - Folder: Select "/ (root)"
   - Save

5. **Wait a few minutes** for GitHub Pages to deploy
   - Your site will be available at: `https://yourusername.github.io/website/`

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check the `base` path in `vite.config.js` matches your repository name exactly.

### Issue: 404 errors on page refresh

**Solution**: The `404.html` file is already configured to handle SPA routing. Make sure it's in the `public` folder.

### Issue: Images not loading

**Solution**: Verify that images are imported correctly in the component files and are in the `src/assets/` directory.

### Issue: Deploy command fails

**Solution**:
1. Make sure all changes are committed to git
2. Verify you have the `gh-pages` package installed: `npm install --save-dev gh-pages`
3. Check that you have push access to the repository

## File Structure After Deployment

```
website/
├── club-website/               # Source code (main branch)
│   ├── src/
│   ├── public/
│   └── ...
└── (gh-pages branch)          # Deployed build files
    ├── index.html
    ├── assets/
    └── ...
```

## Updating Content

To update content on the live site:

1. Make changes to the source files in `club-website/src/`
2. Test locally with `npm run dev`
3. Deploy with `npm run deploy`
4. Changes will be live in a few minutes

## Important Notes

- The `gh-pages` branch is automatically managed by the deployment script
- Never manually edit files in the `gh-pages` branch
- Always make changes in the source files and redeploy
- The build process optimizes images and bundles JavaScript/CSS automatically

## GitHub Pages Configuration

Repository Settings > Pages:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Support

For issues with deployment, check:
- GitHub Actions/Pages status
- Repository permissions
- Git configuration
- Build errors in the console
