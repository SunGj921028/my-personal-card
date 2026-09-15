# My Personal Card

My personal digital business card, built with **React** and **Vite**. It supports light and dark themes, a typing effect for the introduction, a glassmorphism card, and interactive 3D tilt effects.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)

## Local Development

### Requirements

- [Node.js](https://nodejs.org/)
- npm

### Installation and Scripts

```bash
npm install
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server (default: `http://localhost:5173`) |
| `npm run build` | Builds the production-ready static files into `dist/` |
| `npm run preview` | Previews the production build locally (run `build` first) |
| `npm run deploy` | Builds the project and publishes `dist/` to the `gh-pages` branch |

## Project Structure

```
my-personal-card/
├── index.html              # HTML entry point (mounts #root)
├── vite.config.js          # Vite configuration
├── package.json
├── public/                 # Static assets copied to the website root as-is
│   └── image/              # Profile images and other image assets
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component (layout and theme)
│   ├── constants/
│   │   └── content.js      # Text, links, and profile image path (edit this first)
│   ├── components/         # UI section components
│   │   ├── BackgroundBlobs.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── PersonalCard.jsx
│   │   ├── AvatarSection.jsx
│   │   └── SocialLinks.jsx
│   ├── hooks/              # Custom hooks (theme, typing, and card tilt)
│   ├── utils/              # Small utilities (button glow effect)
│   └── styles/             # Stylesheets split by UI section
│       ├── index.css       # Imports the other stylesheets
│       ├── variables.css   # CSS variables and dark theme
│       ├── base.css
│       ├── background.css
│       ├── layout.css
│       ├── card.css
│       └── ui.css
└── dist/                   # Generated production output (ignored by Git)
```

### Customizing Content

- **Text and links:** Edit `src/constants/content.js` to update the name, introduction, GitHub, LinkedIn, and other links. The tagline below the profile image is defined in the `TAGLINE` object (`headline`, `role`, and the `skills` array); skills are displayed as tags.
- **Profile image:** Place an image in `public/image/`, then set the corresponding path in `content.js` through `AVATAR_SRC` (for example, `/image/1.jpg`).

## Deployment

This is a **static frontend website**. After the project is built, the files in `dist/` can be published to any static hosting provider.

### Build

```bash
npm run build
```

The generated files are placed in `dist/` at the project root.

### GitHub Pages

This repository includes a deployment script that publishes the build output to the `gh-pages` branch:

```bash
npm run deploy
```

The script runs `npm run build` first, then publishes `dist/` using `gh-pages`. The Vite `base` path is already configured as `/my-personal-card/` for the repository URL:
`https://sungj921028.github.io/my-personal-card/`.

Pushing commits to `main` alone does not run this deployment script. After changing the source code, run `npm run deploy` to update the live GitHub Pages site. If you later add a GitHub Actions workflow or configure Pages to build directly from `main`, the deployment behavior may change.

### Other Hosting Options

| Platform | Summary |
|----------|---------|
| **Netlify / Vercel** | Connect the Git repository, use `npm run build` as the build command, and set `dist` as the publish/output directory. |
| **Cloudflare Pages** | Use `npm run build` as the build command and `dist` as the output directory. |
| **Self-hosted server / NAS** | Upload the contents of `dist/` to the website root or a subdirectory. If it is hosted in a subdirectory, configure the Vite `base` path accordingly. |

### Deploying to a Subpath

If the site URL is `https://domain/subpath/` instead of `https://domain/`, add the following to `vite.config.js`:

```js
export default defineConfig({
  base: '/subpath/',
  plugins: [react()],
});
```

Then run `npm run build` again.
