# CSREXUS Deployment Guide

This repository contains a static single-page application built with React, TypeScript, Vite, and Tailwind CSS.

## Verify locally before deploying

```bash
npm ci
npm run verify
npm run preview
```

Vite normally serves the preview at `http://localhost:4173`.

## Vercel

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run verify`
- Output directory: `dist`
- Root directory: repository root

## Netlify

- Build command: `npm run verify`
- Publish directory: `dist`
- Base directory: repository root

## Cloudflare Pages

- Build command: `npm run verify`
- Build output directory: `dist`
- Root directory: repository root

## Contact form configuration

Set `VITE_CONTACT_EMAIL` to an inbox controlled by CSREXUS in the local environment and hosting provider. This enables the frontend to prepare an email draft in the visitor's email client; it does not provide server-side delivery or submission storage.

Do not put SMTP credentials or private API keys in Vite environment variables. For server-side message delivery, use a backend or trusted form provider and add input validation, rate limiting, spam controls, and a privacy notice.

## Domain and SEO

The current HTML and sitemap refer to `https://www.csrexus.com`. Verify domain ownership, DNS, TLS, and the canonical host before launch. Keep the canonical URL, Open Graph URL/image, sitemap, and robots directives aligned with the actual production domain.

## Production launch checklist

- Verify legal entity name, registration details, and permitted use of terms such as "Holdings", "LLC", "subsidiary", and ownership percentages.
- Verify all public addresses, telephone numbers, email addresses, leader names, partnerships, metrics, certifications, audits, and press announcements.
- Remove or clearly label draft, illustrative, proposed, and unverified content.
- Publish current privacy, terms, cookie, and data-retention notices as applicable.
- Confirm contact email ownership and test the form end to end.
- Test keyboard navigation, screen-reader labels, mobile navigation, link destinations, and reduced-motion preferences.
- Confirm the production domain, canonical URLs, sitemap, and TLS certificate.
- Confirm a clean CI build on the deployment commit.
