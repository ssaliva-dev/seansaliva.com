# Sean Saliva Portfolio

This is the standalone React + Vite source for `seansaliva.com`.

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Build production assets with `npm run build`

## GitHub deployment

This project is configured to deploy with GitHub Pages through GitHub Actions.

1. Create a GitHub repository for this project
2. Push the `main` branch to GitHub
3. In the repository settings, set Pages to deploy from GitHub Actions
4. Point the custom domain DNS to GitHub Pages

### Custom domain

The repo includes `public/CNAME` for `www.seansaliva.com`.

For DNS, point:

- `www.seansaliva.com` to your GitHub Pages hostname with a `CNAME`
- `seansaliva.com` to GitHub Pages apex records if you want the root domain to redirect or serve the same site

### SPA routing

The deploy workflow copies `index.html` to `404.html` during deployment so React Router routes keep working on GitHub Pages.

## Notes

- The app is fully standalone.
- Routing is handled entirely in React Router.
- Static assets are bundled directly through Vite.
