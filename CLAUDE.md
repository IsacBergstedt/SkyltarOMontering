# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Serve production build
```

No tests are configured.

## Architecture

Single-page Next.js 14 (App Router) site in Swedish for a Stockholm-based sign and installation business. The entire UI lives in two files:

- `app/layout.tsx` — Root layout with page metadata and all global CSS in an inline `<style>` tag. CSS custom properties for theming (light/dark via `prefers-color-scheme`) are set on `html` here: `--color-text-primary`, `--color-background-primary`, `--color-border-tertiary`, etc.

- `app/page.tsx` — Single `'use client'` component containing all sections: Nav, Hero, Services, Projects/Testimonials, CTA banner, Footer. All styling is **inline styles** using a `colors` object defined at the top of the component. Scroll-triggered fade-in animations are driven by a `visibleElements` Set in state, populated via a `scroll` event listener checking `getBoundingClientRect`. Icons come from `lucide-react`.

## Key customization points

- **Contact info**: `070-XXXXXXX` and `info@skyltar.se` in `app/page.tsx` — replace with real values.
- **Colors**: The `colors` object near the top of `Home()` in `app/page.tsx` (primary `#0D5E6F` teal, accent `#FFC107` yellow).
- **Hero image**: The `📸` placeholder div in the Hero section should become a `<Image>` component pointing to a real photo.
- **Global CSS variables** live in `app/layout.tsx`; brand colors live in the `colors` object in `app/page.tsx`.
