# Bilal Choudhary — Product, Data & Applied AI

Personal portfolio for Bilal Choudhary, focused on product thinking, data analytics and AI-assisted product development.

## Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project structure

- `src/app` — application shell, homepage and static case-study routes
- `src/components` — portfolio sections and UI components
- `src/data/projects.ts` — typed case-study content and profile data
- `src/app/work/[slug]` — generated case-study pages for the portfolio projects
- `public/project-previews` — home page UI screenshots used for project media
- `public/Resume.pdf` — synchronized release resume

## Case studies

- `/work/handovr`
- `/work/productlens`
- `/work/ai-business-analytics-studio`
- `/work/finassist`
- `/work/bizguide-ai`
- `/work/karobarkit`
- `/work/crm-pro`
- `/work/invoice-intelligence`

Set `NEXT_PUBLIC_SITE_URL` in production so metadata and Open Graph URLs resolve to the deployed origin.
