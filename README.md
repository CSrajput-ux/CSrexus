# CSREXUS

Corporate and product portfolio website for CSREXUS.

> **Content verification:** Portfolio descriptions, leadership details, ownership statements, operating metrics, certifications, office locations, and financial information shown on the website are project-provided content. Verify each claim against current records and obtain approval before presenting it as an independently verified fact. The website itself is not evidence of a certification, audit, partnership, acquisition, or metric.

## Technology

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide icons

## Requirements

- Node.js 20 or newer
- npm 10 or newer

Check your versions:

```bash
node --version
npm --version
```

## Run locally

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Production verification

```bash
npm run verify
npm run preview
```

The verify command runs the production Vite build. TypeScript files are transpiled by the Vite React toolchain; a dedicated static type-check and lint toolchain is not currently configured.

GitHub Actions runs a clean locked dependency installation and production build on pushes to the main/enhancement branches and pull requests targeting main.

## Deployment

The site is a static Vite application.

| Setting | Value |
|---|---|
| Install command | `npm ci` |
| Build command | `npm run verify` |
| Output directory | `dist` |

Do not commit the generated `dist/` folder. Hosting providers should build it from source during deployment.

## Contact form

The contact form prepares an email draft in the visitor's email application. It does **not** send or store submissions on a server.

1. Copy `.env.example` to `.env.local` for local development.
2. Set `VITE_CONTACT_EMAIL` to an inbox address that CSREXUS controls.
3. Configure the same variable in the deployment provider.
4. Test the form on the deployed domain.

The email address is public because Vite variables are included in the browser bundle. Never put SMTP credentials, API keys, or other secrets in `VITE_*` variables. For server-side delivery, connect a trusted form endpoint with validation, rate limiting, spam protection, and a privacy notice.

## Security and privacy

- Keep credentials in server-side environment variables; never commit secrets.
- Collect only information necessary to respond to an enquiry.
- Add a privacy notice and retention policy before collecting personal information.
- Review dependency and hosting security alerts regularly.

## Project structure

```text
src/
  app/
    App.tsx
    components/
  assets/
  styles/
public/
  robots.txt
  sitemap.xml
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for hosting and launch checks. See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for asset credits.
