# BuyVM — Four Design Directions

Four self-contained landing-page directions for [buyvm.net](https://buyvm.net), each grounded in the current site's actual brand DNA — charcoal `#282B30` + brand green `#49C46D` + white, with a server illustration, plan grid, and dark testimonials. All four ship with motion (scroll reveals, counting stats, animated rack LEDs, mouse-follow parallax) and respect `prefers-reduced-motion`.

Live: **http://144.172.96.137**

## The four designs

| # | Name | Vibe | Motion | Best for |
|---|------|------|--------|----------|
| 01 | [Classic](01-classic.html) | Refined &amp; alive — careful 2026 update | Scroll reveals · counting stats · twinkling LEDs · 3D rack tilt | Direct refresh of the marketing site |
| 02 | [Premium](02-premium.html) | Quiet, considered — Inter + Instrument Serif italic | Slow reveals · restrained tilt · counting hero signals | Enterprise tier landing |
| 03 | [Console](03-console.html) | Technical, developer-tool aesthetic — terminal hero, YAML plans, IRC reviews | Animated sparklines · blinking caret · ticker bar | Developer marketing, API / docs landing |
| 04 | [Spatial](04-spatial.html) | Modern, depth-rich — isometric rack, floating UI, parallax orbs | Mouse-follow rack tilt · floating bob · scroll parallax | Brand refresh, hero campaigns |

[**Gallery / comparison page →**](index.html)

## Switching between designs

Every page has a thin black bar at the very top:

- Position indicator (`01 / 04`)
- Direct links to all four
- Previous / next arrows
- Keyboard shortcuts: <kbd>←</kbd> / <kbd>→</kbd> to navigate, <kbd>1</kbd>—<kbd>4</kbd> to jump
- `×` to dismiss (remembered via localStorage)

## Brand DNA (shared across all four)

Pulled directly from [buyvm.net's actual stylesheet](https://buyvm.net/assets/css/style.css):

| Token | Value | Used for |
|-------|-------|----------|
| `--ink` (charcoal) | `#282B30` | Primary background |
| `--green` (brand) | `#49C46D` | CTAs, accents, success |
| `--green-d` (dark) | `#317C4C` | Button gradients, hover |
| `--ink-3` (muted) | `#7B8187` | Secondary text |

Each design uses subtly tuned variants (e.g. Premium uses a slightly punchier `#5BD17C`, Console a sharper `#5DD080`) but the family is recognisable across all four.

## Motion principles

- **Scroll reveals** — IntersectionObserver fades in sections as they enter view
- **Counting numbers** — hero stats animate from 0 → target with cubic ease-out
- **Animated rack LEDs** — staggered twinkles, NVMe blinks, pulsing online indicator
- **Tilt-on-hover** — server illustrations subtly track the mouse on fine pointers (skipped on touch)
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables all transitions, animations, smooth scroll
- **No external libs** — pure CSS keyframes + ~50 lines of vanilla JS per page

## Stack

Pure HTML + CSS + a small inline `<script>` per page. Google Fonts only, no build, no frameworks. Open any file in a browser and it works.

## Local preview

```bash
cd buyvm-designs
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Files are served by nginx on the BuyVM-1GB box at `144.172.96.137`. Updating:

```bash
rsync -avz --delete --exclude=.git \
  /Users/hannannozari/buyvm-designs/ \
  buyvm-designs:/var/www/html/
```

(Where `buyvm-designs` is an SSH alias defined in `~/.ssh/config`.)

## License

MIT &mdash; do whatever you want, attribution appreciated.
