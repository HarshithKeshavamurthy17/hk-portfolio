# hk-portfolio

Portfolio for **Harshith K**, showcasing work across data engineering, AI/ML, and analytics.

## Getting Started

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` – start the Vite dev server.
- `npm run lint` – run TypeScript/ESLint checks.
- `npm run build` – type-check and generate the production bundle.
- `npm run preview` – preview the production build locally (after `npm run build`).

## Editing Content

- **Hero / Highlights / Skills / Experience / About sections** – located under `src/sections/`.
- **Project cards & case study links** – edit `src/sections/Projects.tsx`.
- **Case study pages** – each lives in `src/routes/case/`. Replace TODO placeholders and update the detailed `VIGraphRAG.tsx` example as a reference.
- **One-pager PDFs** – drop files into `public/pdfs/` and update the corresponding `pdf` field in `src/sections/Projects.tsx`.

## SEO Notes

- Shared meta handling resides in `src/components/layout/SEO.tsx`.
- Home page injects Person + WebSite JSON-LD; case pages emit `BreadcrumbList` schema via `CaseLayout`.
- Update canonical URLs or social handles in `SEO.tsx` / `App.tsx` when publishing to a new domain.

## Deployment Guide (Vercel)

1. `npm run build` – ensure the production bundle is healthy.
2. `npx vercel login` – authenticate with Vercel (GitHub or email).
3. `npx vercel link` – inside the project root, link to an existing project or create a new one.
4. No environment variables are required; Vercel SPA rewrites are defined in `vercel.json`.
5. `npx vercel --prod` – trigger the production deployment.

> Tip: The rewrite in `vercel.json` routes all paths to `/index.html` so client-side routing works out of the box.

