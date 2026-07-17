# SapioLink

Landing page for **SapioLink** — a dating app built on written correspondence instead of swiping. Profiles open with a letter, not a photo; faces are revealed only once both people choose to.

## View it

Open `SapioLink.html` directly in a browser. It's a single self-contained file — fonts, styles, and scripts are all inlined — so there's no build step or server required.

## Structure

- `SapioLink.html` — the full landing page (hero, philosophy, how-it-works, sample prompts, waitlist signup)

## Design

- **Concept**: the page is framed as correspondence — a letter-in-progress hero with a typing animation, a card-catalogue "how it works" section, staggered index cards for sample prompts.
- **Type**: Fraunces (display), Source Serif 4 (body), Courier Prime (typewriter labels and data) — embedded as `@font-face` data URIs so the page has no external font dependency.
- **Palette**: parchment and ink-green ground with sealing-wax claret and aged brass accents; full light/dark theme support via CSS custom properties.
- Responsive down to phone widths; respects `prefers-reduced-motion`.

## License

MIT — see [LICENSE](LICENSE).
