# Cloudflare Pages Deployment — SEPTNET

Static Vite build. No backend, database, or server runtime required.

## Build settings

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** `20`

## SPA routing

Do **not** use `/* /index.html 200` in `_redirects` — Cloudflare rejects it as an infinite loop (`code: 100324`) and the deploy fails.

Cloudflare Pages SPA fallback is automatic when there is **no** top-level `404.html`: unmatched routes (e.g. `/services/architecture`) are served from the app root so React Router can handle them.

`public/_redirects` is intentionally empty of rules (comments only).

## Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Local preview (ready now)

```bash
npm run build
npm run preview
```

Open `http://127.0.0.1:4173` for a production-like static preview before sharing with the client.

## Preview deploy on Cloudflare (recommended for client review)

Requires access to the client Cloudflare account (API token or dashboard login).

1. In Cloudflare Dashboard → Workers & Pages → Create → Pages
2. Connect this repository **or** use direct upload of the `dist` folder
3. Use the generated `*.pages.dev` preview URL for client review
4. Do **not** attach `septnetengineering.com` until the client approves

### Wrangler direct upload (optional)

Create a token at: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/

```bash
npm run build
# PowerShell
$env:CLOUDFLARE_API_TOKEN="your_token_here"
npx wrangler pages deploy dist --project-name=septnet-engineering
```

## Production domain

Only after written client approval:

1. Pages project → Custom domains
2. Add `septnetengineering.com` / `www`
3. Confirm DNS already managed in the client Cloudflare account

## Checklist before go-live

- [ ] Homepage approved
- [ ] Supporting pages reviewed
- [ ] Placeholder images replaced where available
- [ ] `npm run build` succeeds
- [ ] Mobile + desktop smoke test on preview URL
- [ ] Email links open `mailto:info@septnetengineering.com`


## Cloudflare Pages Free — GitHub auto-deploy (client account)
1. Push this repo to a GitHub repo the client owns (or add client as collaborator).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select repo.
3. Framework preset: Vite · Build command: `npm run build` · Output: `dist` · Env var `NODE_VERSION=20`.
4. Non-production branches/PRs get automatic `*.pages.dev` preview URLs — share these for client review.
5. Free-plan limits: 25 MiB per file, 20,000 files, 500 builds/month (site is far below these).
6. Production domain `septnetengineering.com` is attached to the existing Pages project: switch its source only after client approval; do not change DNS. Rollback via Deployments tab.
