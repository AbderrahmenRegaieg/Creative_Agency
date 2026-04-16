# Level Up Agency

A single-page marketing site for **Level Up Agency**, an AI creative studio.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Google Fonts via `next/font` — Instrument Serif (display) + Manrope (body)

## Aesthetic
iOS 26 "Liquid Glass" — refractive glass cards, soft animated mesh gradient background, azure + porcelain palette, Instrument Serif italic accents, noise grain overlay.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx       # fonts + metadata
  page.tsx         # composes all sections
  globals.css      # glass primitive, mesh bg, utilities
components/
  MeshBackground.tsx   # animated gradient blobs
  CursorGlow.tsx       # soft follower cursor (desktop)
  Nav.tsx              # floating dynamic-island nav
  Hero.tsx             # animated headline + floating thumbs
  Services.tsx         # 2x2 grid wrapper
  ServiceCard.tsx      # single glass service card
  GlassIcon.tsx        # 4 custom SVG service icons
  ProcessRail.tsx      # 4-step process
  BentoWork.tsx        # case-study bento grid
  Manifesto.tsx        # pull quote
  FinalCTA.tsx         # oversized closing panel
  Footer.tsx
  Logo.tsx             # wordmark + mark
```

## Customizing

- **Copy**: edit the arrays at the top of `Services.tsx`, `ProcessRail.tsx`, `BentoWork.tsx`.
- **Colors**: CSS variables in `globals.css` (`--ink`, `--azure`, `--sky`) and Tailwind theme in `tailwind.config.ts`.
- **Fonts**: swap in `app/layout.tsx` — keep the `variable` names stable.
- **Contact email**: currently `studio@levelup.agency` — search/replace in `FinalCTA.tsx` and `Footer.tsx`.

## Accessibility
- AA contrast on porcelain + ink.
- Focus rings on all interactive elements.
- `prefers-reduced-motion` disables the mesh drift, cursor glow, and shimmer sweeps.
- Decorative SVGs marked `aria-hidden`.
