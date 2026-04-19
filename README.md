# Sean Saliva Portfolio

This is the standalone React + Vite source for `seansaliva.com`.

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Build production assets with `npm run build`

## GitHub deployment

This project is configured to deploy from GitHub Actions to the live GoDaddy-hosted site.

1. Create a GitHub repository for this project
2. Push the `main` branch to GitHub
3. Add the required GitHub secrets and variables
4. Push to `main` to deploy to GoDaddy automatically

### Required GitHub secrets

- `GODADDY_FTP_HOST`
- `GODADDY_FTP_USERNAME`
- `GODADDY_FTP_PASSWORD`

### Optional GitHub variables

- `GODADDY_REMOTE_DIR`
  Default: `/`
- `GODADDY_FTP_PORT`
  Default: `21`
- `GODADDY_FTP_PROTOCOL`
  Default: `ftp`
- `GODADDY_FTP_SECURITY`
  Default: `strict`

### Deploy contents

Each deployment uploads:

- the Vite production build
- `api/contact.php` for the contact form
- an Apache `.htaccess` file for SPA route rewrites

## Notes

- The app is fully standalone.
- Routing is handled entirely in React Router.
- Static assets are bundled directly through Vite.
