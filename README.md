# SapioLink

Landing page for **SapioLink** — a dating app built on written correspondence instead of swiping. Profiles open with a letter, not a photo; faces are revealed only once both people choose to.

Built with [Vite](https://vite.dev) and React.

## Getting started

```
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server with hot reload
- `npm run build` — produce a production build in `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run oxlint

## Structure

```
src/
  components/   page sections (Hero, Philosophy, HowItWorks, Prompts, Testimonial, CtaBand, ...)
  hooks/        useTypewriter (hero letter animation), useReducedMotion
  assets/fonts/ Fraunces, Source Serif 4, Courier Prime (self-hosted .woff2)
  index.css     design tokens, global styles, component styles
  App.jsx       composes the page
```

## Design

- **Concept**: the page is framed as correspondence — a letter-in-progress hero with a typing animation, a card-catalogue "how it works" section, staggered index cards for sample prompts.
- **Type**: Fraunces (display), Source Serif 4 (body), Courier Prime (typewriter labels and data) — self-hosted `.woff2` files, no external font requests.
- **Palette**: parchment and ink-green ground with sealing-wax claret and aged brass accents; full light/dark theme support via CSS custom properties.
- Responsive down to phone widths; respects `prefers-reduced-motion`.

## License

MIT — see [LICENSE](LICENSE).
