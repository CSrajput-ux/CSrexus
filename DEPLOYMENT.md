# CSREXUS Deployment Guide

This project is a static single-page application built with React, TypeScript, Vite, and Tailwind CSS.

## Local production verification

```bash
npm ci
npm run typecheck
npm run lint
npm run build
npm run preview
```

Vite serves the local preview (normally at `http://localhost:4173`).

## Vercel

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: repository root

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

## Environment variables

The current frontend has no required runtime environment variables. Do not add private API keys to Vite variables: any `VITE_*` value is exposed to the browser bundle. Add integrations through a server-side endpoint or trusted form provider.

## Domain and SEO

Update the canonical URL, Open Graph URL/image, sitemap, and robots directives together when the production domain changes. The existing HTML currently declares `https://www.csrexus.com`; verify domain ownership and deployment routing before relying on that canonical domain.

## Before production

- Verify legal entity name, registration, and permitted use of "Holdings", "LLC", "subsidiary", and ownership claims.
- Verify every public address, phone number, email address, leader name, partnership, metric, certification, audit, and press release.
- Replace placeholder or illustrative information with approved information; remove unsupported claims.
- Configure a real form delivery endpoint, privacy notice, consent/retention policy, and anti-spam controls if form submissions are collected.
- Test keyboard navigation, screen-reader labels, mobile navigation, form behavior, and reduced-motion preferences.
- Confirm the configured custom domain and TLS certificate.
