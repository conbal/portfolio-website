# My Site

A personal portfolio website built with Next.js, React, and TypeScript. The site presents a concise professional profile with sections for introduction, projects, skills, background, and contact information.

## Overview

This project is designed as a lightweight, modern portfolio landing page with a dark visual theme and responsive layout. It highlights:

- About section with profile overview
- Project showcase cards
- Skills grid
- Background / experience timeline
- Contact section with social or contact links

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- react-icons

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Nav.tsx
  ProjectCard.tsx
  SkillCard.tsx
  TimelineItem.tsx
  sections/
    About.tsx
    Background.tsx
    Contact.tsx
    Projects.tsx
    Skills.tsx
lib/
  background.ts
  projects.ts
  skills.ts
public/
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to view the site.

## Available Scripts

```bash
pnpm dev     # run app in development mode
pnpm build   # create production build
pnpm start   # start production server
pnpm lint    # run ESLint checks
```

## Customization

Content is organized into reusable data files under `lib/` and UI components under `components/`:

- `lib/projects.ts` for project entries
- `lib/skills.ts` for skill list data
- `lib/background.ts` for experience timeline content
- `components/sections/*` for page sections

Update these files to adapt the portfolio content to your own profile or work.

## Deployment

This app is ready to deploy to platforms such as Vercel, Netlify, or any Node.js hosting environment that supports Next.js applications.

For Vercel, the standard Next.js deployment flow is the simplest option.
