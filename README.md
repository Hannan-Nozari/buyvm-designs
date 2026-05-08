# BuyVM — Four Design Directions

Four self-contained landing-page directions for [buyvm.net](https://buyvm.net), each grounded in the current site's actual brand DNA — charcoal `#282b30` + brand green `#49c46d` + white, with a server illustration, plan grid, and dark testimonials section. Same content brief, four different executions.

Live: **http://144.172.96.137**

## The four designs

| # | Name | Vibe | Best for |
|---|------|------|----------|
| 01 | [Classic](01-classic.html) | Refined &amp; familiar — the current site, cleaned up | Direct refresh of the live marketing site |
| 02 | [Premium](02-premium.html) | Quiet, considered — Inter + Instrument Serif, gold accents | Enterprise / business landing page |
| 03 | [Bold](03-bold.html) | Loud, confident — massive type, hard shadows, no apologies | Black Friday / campaign / conversion-focused launches |
| 04 | [Light](04-light.html) | Friendly, fresh — warm off-white, brand green still as accent | Light-theme version, accessibility, fresh segment |

[**Gallery / comparison page →**](index.html)

## Switching between designs

Every page has a thin black bar at the very top with:

- Position indicator (`01 / 04`)
- Direct links to all four designs
- Previous / next arrows
- Keyboard shortcuts: <kbd>←</kbd> / <kbd>→</kbd> to navigate, <kbd>1</kbd>—<kbd>4</kbd> to jump
- `×` to dismiss (remembered via localStorage)

## Brand DNA (shared across all four)

Pulled from [buyvm.net's actual stylesheet](https://buyvm.net/assets/css/style.css):

| Token | Value | Used for |
|-------|-------|----------|
| `--ink` (charcoal) | `#282B30` | Primary background (designs 1—3) / primary text (design 4) |
| `--green` (brand) | `#49C46D` | CTAs, accents, success states |
| `--green-d` (dark) | `#317C4C` | Button gradients, hover states |
| `--ink-3` (muted) | `#7B8187` | Secondary text |

## Stack

Pure HTML + CSS — Google Fonts only, no build, no JS frameworks. The only JS is the ~30 lines for the switcher bar. Open any file in a browser and it works.

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
