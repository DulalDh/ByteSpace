# ByteSpace

ByteSpace is a course discovery and learning landing page built with Next.js.

## Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- npm for dependency management

## Requirements

- Node.js 20 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads as files change.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build locally (run `npm run build` first) |

## Project layout

- `app/` — routes, root layout, global styles, and page metadata
- `components/` — reusable UI components and page sections
- `data/home-data.js` — shared interface copy and home page content
- `types/` — shared TypeScript types
- `public/` — local images and other static assets

Course and testimonial photos are loaded from Unsplash. No environment variables are currently required.

## Deploy

Deploy as a standard Next.js application. For Vercel, import the repository and keep the detected Next.js settings: install with `npm install`, build with `npm run build`, and use `npm start` only when running the built app outside Vercel. No custom environment variables are needed.
