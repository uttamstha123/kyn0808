# KYN0808 – Luxury Women’s Fashion

This is a Vite + React project rebranded for KYN0808.

## Local development

1. Install dependencies
   - npm install
2. Start dev server
   - npm run dev

## Build

- npm run build
- Output: `dist/`

## Deploy on Render.com (Static Site)

- Push this repository to GitHub.
- On Render, create a New Static Site:
  - Build Command: `npm ci && npm run build`
  - Publish Directory: `dist`
- Alternatively, use `render.yaml` (Blueprint) in this repo to set up automatically.

## SPA routing

This app uses client-side routing. The render.yaml includes a rewrite rule so that all routes serve `index.html`.

## Node version

Render will use Node >=18 as defined in `package.json` engines.
