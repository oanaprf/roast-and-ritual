# Roast & Ritual — Claude Code Guide

## Project Overview
Roast & Ritual is a landing page for a cozy, warm coffee shop brand built with Next.js, TypeScript, Tailwind CSS, and i18next for translations.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Translations**: i18next + react-i18next
- **Linting**: ESLint
- **Formatting**: Prettier with prettier-plugin-tailwindcss

## Brand Palette
| Token        | Hex       | Usage                        |
|--------------|-----------|------------------------------|
| `espresso`   | `#2E1F1C` | Dark backgrounds, headings   |
| `roast`      | `#6F4E37` | Primary brand color          |
| `latte`      | `#C4A484` | Accents, borders             |
| `cream`      | `#F5EBDD` | Light backgrounds, text      |

## Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run format    # Run Prettier
```

## Project Structure
```
app/
  layout.tsx        # Root layout with fonts and i18n
  page.tsx          # Home page (landing)
  globals.css       # Global styles and CSS variables
components/
  sections/         # Landing page sections (Hero, Menu, About, Contact)
  ui/               # Reusable UI primitives
lib/
  i18n/             # i18next configuration and locale files
public/
  images/           # Static image assets
```

## Development Guidelines
- Follow the design principles in `design-principles-example.md`
- Use Tailwind utility classes; avoid custom CSS unless necessary
- All user-facing strings must go through i18next (`useTranslation` hook)
- Keep components small, focused, and composable
- Use `'use client'` only where interactivity is required
