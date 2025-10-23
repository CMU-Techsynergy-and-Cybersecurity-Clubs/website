# CMU Tech Clubs Website

A modern, responsive website showcasing Colorado Mesa University's tech clubs: Cybersecurity Club and TechSynergy Club.

## Features

- **Landing Page**: Overview of both clubs with quick stats and highlights
- **Cybersecurity Club Page**: Dedicated page with tabs for Events, Projects, and Activities
- **TechSynergy Club Page**: Dedicated page with tabs for Events, Projects, and Activities
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern Tech Stack**: Built with React and Vite

## Technology Stack

- React 19
- React Router DOM for navigation
- Vite for fast development and building
- GitHub Pages for hosting

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd club-website
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### First-Time Setup

1. Make sure you have committed all changes to git
2. Ensure the `base` path in `vite.config.js` matches your repository name
3. Run the deployment command:

```bash
npm run deploy
```

This will:
- Build the project
- Deploy the `dist` folder to the `gh-pages` branch
- Make the site available at `https://yourusername.github.io/website/`

### Updating the Site

After making changes:

1. Commit your changes to git
2. Run the deployment command:
```bash
npm run deploy
```

## Project Structure

```
club-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── TabContainer.jsx
│   │   ├── ClubHero.jsx
│   │   └── ImageGallery.jsx
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── CybersecurityPage.jsx
│   │   └── TechSynergyPage.jsx
│   ├── assets/             # Images and media
│   │   ├── cybersecurity/
│   │   ├── techsynergy/
│   │   ├── cyber-fair/
│   │   └── icpc/
│   ├── App.jsx             # Main app component with routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/                 # Static assets
├── index.html
├── vite.config.js
└── package.json
```

## Customization

### Adding New Content

#### Updating Club Information

Edit the respective page components:
- Cybersecurity Club: `src/pages/CybersecurityPage.jsx`
- TechSynergy Club: `src/pages/TechSynergyPage.jsx`

#### Adding New Images

1. Place images in the appropriate folder under `src/assets/`
2. Import the image in the page component:
```javascript
import newImage from '../assets/folder/image.jpg';
```
3. Add to the gallery or use in the component

#### Updating Meeting Information

Meeting details are shown in:
- Footer component: `src/components/Footer.jsx`
- Sidebar on club pages: In each club page component

### Styling

Each component has its own CSS file for easy customization:
- Global styles: `src/index.css`
- Component styles: `src/components/ComponentName.css`
- Page styles: `src/pages/PageName.css`

## Contact Information

- **Email**: jjalonzo-estra@mavs.coloradomesa.edu
- **Discord**: https://discord.gg/Uyy3Baqxnb
- **Meeting Time**: Every Wednesday at 4:00 PM
- **Location**: Confluence 110

## License

This project is open source and available for educational purposes.
