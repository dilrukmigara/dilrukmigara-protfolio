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

## PP1 showcase

Only the `research/` application is changed. The parent portfolio and its deployment settings are independent.

- `src/content.ts`: editable identity, model configuration, statuses, feature groups, milestones, feedback and references.
- `src/proposal.json`: preserved proposal architecture, research questions and roadmap.
- `src/App.tsx`: accessible sections, disclosures and illustrative network story.
- `src/index.css`: responsive dark theme and reduced-motion alternative.

The update brief is the source for reported implementation status. Historical numerical results are deliberately withheld pending original exports and dated device logs. No live telemetry, generated evidence, API keys or private dashboard connections are included. Add genuine PP1 documents and photographs before enabling document downloads or a prototype gallery.

The custom dashboard URL could not be verified during implementation and is not labelled live. The existing dashboard address is clearly marked as externally hosted and availability-unverified.

Legacy paths (`/architecture`, `/evaluation`, `/tinyml`, `/methodology`, `/transfer-learning`, `/incremental-learning`, `/problem`, `/gap`, `/objectives`, `/novelty`) map to relevant sections after the SPA loads. Production hosting must retain its SPA fallback for direct path requests.
