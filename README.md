# CSREXUS

Corporate and product portfolio website for CSREXUS.

> **Content verification note:** Portfolio descriptions, ownership percentages, operating metrics, certifications, offices, and financial statements shown on the site are editorial content supplied by the project. Publish them as factual claims only after the organisation has supporting records and approval. The website itself is not evidence that a certification, audit, partnership, acquisition, or metric exists.

## Technology

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide icons

## Requirements

- Node.js 20.19+ (or a compatible newer LTS)
- npm 10+

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

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

CI runs dependency installation, TypeScript checking, and a production build for pull requests and pushes to the main/enhancement branches.

## Deployment

The site is a static Vite application. On Vercel or Netlify use:

| Setting | Value |
|---|---|
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

Do not commit the generated `dist/` folder. Hosting providers should build it from source during deployment.

## Contact form

The current contact form opens a pre-filled email draft in the visitor's email client. It does **not** send or store submissions on a server. Before launch, configure the approved receiving address and, if desired, integrate a server-side form provider with spam protection, validation, privacy notice, and rate limiting. Never place provider API keys or SMTP credentials in browser code.

## Security and privacy

- Keep credentials in server-side environment variables; never commit secrets.
- Collect only information necessary to respond to an enquiry.
- Add a privacy notice and retention policy before collecting personal information.
- Keep dependencies updated and review automated security alerts.

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

## License and attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md). Add a repository license only after deciding the intended usage and ownership terms.
