# Mark Anthony Nene Portfolio · Astro Edition

This is a repository-ready Astro + Tailwind CSS portfolio rebuild for `Rhyxeee.github.io`.

## Stack

- Astro
- Tailwind CSS v4 via `@tailwindcss/vite`
- GitHub Pages workflow

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This project already includes `.github/workflows/deploy.yml`.

On GitHub:
1. Open repository settings.
2. Open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push this project to `main`.

## Important asset note

This Astro rebuild expects these existing folders from your current repository to remain available inside `public/`:

- `public/images/`
- `public/docs/`

Your current repository already contains `images/`, `docs/`, and `favicon_io/`, so the fastest setup is:

1. Copy this Astro project into the repository root.
2. Move your current `images/` folder into `public/images/`.
3. Move your current `docs/` folder into `public/docs/`.
4. Keep any extra static assets you still use inside `public/`.
5. Remove the old `index.html`, `styles.css`, and `scripts.js` after migration.

## Suggested final repo structure

```text
.
├─ .github/
├─ public/
│  ├─ docs/
│  ├─ images/
│  ├─ favicon.svg
│  └─ robots.txt
├─ src/
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```
