# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 landing page** for Flatscouts, an AI tool for real estate document management. The site is in German.

### Tech Stack
- Next.js 14 with App Router
- TypeScript (strict mode disabled)
- CSS Modules for component styling
- Framer Motion for animations
- Lucide React for icons
- Deployed on Vercel

### Project Structure
- `app/page.tsx` - Single-page landing with section components
- `app/layout.tsx` - Root layout with Google Fonts (Ubuntu, Inter)
- `app/components/` - Section components, each with matching `.module.css`
- `app/globals.css` - CSS variables and base styles
- `public/` - Static assets (images, video)

### Design System
CSS variables defined in `globals.css`:
- `--color-primary: #123c36` (dark green)
- `--color-secondary: #88a38c` (sage)
- `--color-accent: #e3c9a5` (beige)
- `--color-background: #F6EDE3` (cream)
- `--radius: 16px`

Typography: Ubuntu Bold for headings, Inter Light (300) for body text.

### Path Aliases
`@/*` maps to project root (configured in `tsconfig.json`).
