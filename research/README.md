# SecureEdge Research Web App (`research.dilrukmigara.me`)

Standalone React + TypeScript + Vite web application showcasing Dilruk Migara's final-year research project:
**“SecureEdge: Transfer Learning and Incremental TinyML for Real-Time Intrusion Detection in Resource-Constrained IoT Networks”**

## Quick Start (Local Development)

```bash
cd research
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
Build outputs are generated in `research/dist`.

## Hosting on Subdomain `research.dilrukmigara.me`

### Option A: Vercel
1. Import this repository to Vercel.
2. In Project Settings -> **Root Directory**, set it to `research`.
3. In **Domains**, add `research.dilrukmigara.me`.
4. Point the DNS CNAME record for `research` to `cname.vercel-dns.com`.

### Option B: Cloudflare Pages
1. Create a Cloudflare Pages project linked to your GitHub repository.
2. Set **Root directory** to `research`.
3. Build command: `npm run build`, Output directory: `dist`.
4. Under **Custom domains**, add `research.dilrukmigara.me`.

### Option C: Netlify
1. Create a new site from Git.
2. Set **Base directory** to `research`.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Under **Domain management**, add custom domain `research.dilrukmigara.me`.
