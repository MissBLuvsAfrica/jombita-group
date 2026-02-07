# Jombita Group Website

A tender-ready, credibility-driven corporate website for **Jombita Group**, a Kenya-based general supply chain and logistics company. Built for reference during procurement, RFPs, and government/NGO tenders.

## Project Purpose

This is a static credibility site. It provides:

- Company overview, mission, vision, and values
- Scope of supplies and sector coverage
- Logistics and delivery model
- Leadership and organisational structure
- Clients and partners
- Compliance, HSE, and ethics information
- Contact details and inquiry form (no backend)

**No transactions, user accounts, or database.** All contact form submissions route via `mailto:jombita.ltd@gmail.com`.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- Static-first deployment (`output: 'export'`)
- No database, payments, or authentication

## Site Structure

| Route      | Description                                      |
|-----------|--------------------------------------------------|
| `/`       | Home – hero, value pillars, sector overview      |
| `/about`  | Company overview, mission, vision, values        |
| `/services` | Scope of supplies, sector coverage              |
| `/logistics` | Logistics & delivery model                     |
| `/team`   | Leadership (CEO: Michael Owino) & company structure |
| `/clients` | Clients and partners                           |
| `/compliance` | Compliance, stakeholders, HSE, ethics        |
| `/contact` | Contact details + inquiry form                 |

## Design

- **Logo** – Company logo in Header and Footer (`public/logo.png`)
- **Colors** – White and red (jombita) palette matching the corporate logo

## Components

- **Header** – Sticky nav with logo, mobile menu
- **Footer** – Contact info and capability statement
- **Hero** – Headline, subtext, CTAs
- **Section** – Reusable section wrapper
- **Card** – Content card
- **Accordion** – Expandable sections
- **Stats** – Value pillars / highlights
- **LogoGrid** – Client logo grid
- **OrgStructure** – Company structure layout
- **ContactForm** – Client-side validated form with honeypot, mailto submit

## How to Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Git & Deployment

### Push to GitHub

If you have a GitHub repository, add it as a remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/jombita-group.git
git push -u origin main
```

### Deploy to Vercel

Vercel deployment is configured. Run:

```bash
npx vercel --prod
```

Or connect the GitHub repo in [Vercel](https://vercel.com) for automatic deploys on push.

## How to Deploy (Vercel)

### Option A: Static Export (current config)

1. Build the static site:

   ```bash
   npm run build
   ```

2. Output is in `out/`. Deploy this folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Option B: Vercel (recommended)

1. Push the project to GitHub.
2. In [Vercel](https://vercel.com), import the repo.
3. Vercel will detect Next.js. Deploy with default settings.

You can optionally remove `output: 'export'` from `next.config.js` for server-side features (e.g. dynamic sitemap) if needed later.

## SEO & Accessibility

- Metadata per page via Next.js Metadata API
- `sitemap.ts` – Generated sitemap
- `robots.ts` – Robots configuration
- JSON-LD Organization schema
- Semantic HTML and ARIA where appropriate

## Environment

No environment variables required for the current static setup.

## Contact Info (Authoritative)

- **Office:** UpperHill, Nairobi  
- **Email:** jombita.ltd@gmail.com  
- **Phone:** 0714995966  
