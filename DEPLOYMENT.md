# CSREXUS Holdings Group — Production Deployment Guide

This repository contains the complete production-ready source code for **CSREXUS Holdings Group (`CSREXUS HOLDINGS`)**, built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 1. Production Build & Local Preview

To test the optimized production build on your machine before deploying:

```bash
# Step 1: Install dependencies
npm install

# Step 2: Build for production (Generates optimized /dist directory)
npm run build

# Step 3: Preview the production build locally (http://localhost:4173)
npm run preview
```

The production output will be generated inside the `dist/` directory:
- `dist/index.html` (SEO optimized with OpenGraph, Twitter cards & canonical tags)
- `dist/assets/company-logo-*.png` (Optimized brand logo)
- `dist/assets/index-*.css` & `index-*.js` (Minified & chunk-split assets)
- `dist/robots.txt` & `dist/sitemap.xml` (Search engine crawler files)

---

## 2. One-Click Cloud Deployment Guides

### Option A: Deploy on Vercel (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your `csrexus` repository.
4. Vercel will automatically detect the **Vite** framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your live site will be ready in under 45 seconds with automatic SSL and global CDN caching.

---

### Option B: Deploy on Netlify
1. Go to [Netlify.com](https://www.netlify.com/) and click **Add new site** → **Import an existing project**.
2. Connect to your repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

> **Note for Netlify / Vercel SPA Routing**: Because this is a single-page application (SPA), any direct navigation will resolve smoothly to `index.html`.

---

### Option C: Deploy on Cloudflare Pages (Free Global Edge CDN)
1. Go to your Cloudflare Dashboard → **Workers & Pages** → **Create a application** → **Pages** → **Connect to Git**.
2. Select the `csrexus` repo.
3. Choose Framework Preset: **Vite**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

### Option D: Deploy on AWS S3 + CloudFront (Enterprise Cloud)
1. Run `npm run build` locally or in your CI/CD pipeline.
2. Upload the entire contents of the `dist/` folder to an Amazon S3 Bucket enabled for Static Website Hosting.
3. Configure Amazon CloudFront distribution pointing to the S3 bucket endpoint.
4. Attach your custom SSL Certificate from AWS Certificate Manager (ACM) for `www.csrexus.com`.

---

## 3. Custom Domain & DNS Setup
Once deployed to your chosen platform, point your DNS records to your hosting provider:
- **A Record**: `@` → Provider IP (or CNAME to `.vercel.app` / `.netlify.app`)
- **CNAME Record**: `www` → `www.csrexus.com`
- **MujCode Subsidiary Link**: Verified live domain link to `https://www.mujcode.in` is embedded across all cards, modals, and directory links.

---

## 4. SEO & Verification Checklist
- [x] **SEO Title & Description**: Verified in `index.html`.
- [x] **OpenGraph & Twitter Cards**: Configured for social sharing preview.
- [x] **Search Engine Crawlers**: `robots.txt` and `sitemap.xml` active in `public/`.
- [x] **Company Logo**: `Company logo.png` bundled cleanly in header and footer.
- [x] **Zero Fictional Data**: 100% authentic corporate governance, press room, and capital allocation frameworks.
