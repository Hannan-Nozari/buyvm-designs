# BuyVM — Five Design Explorations

Five self-contained landing-page directions for [buyvm.net](https://buyvm.net), a VPS hosting brand. Same content brief — KVM slices from $2/mo, free DDoS filter, 1 Gbps unmetered, 14 years uptime — pulled in five directions.

Live: **http://144.172.96.137**

## The five designs

| # | Name | Vibe | Best for |
|---|------|------|----------|
| 01 | [Brutalist Terminal](01-brutalist-terminal.html) | Honest, technical, raw — cream + ink + sharp orange | Main marketing site (sysadmin audience) |
| 02 | [Cosmic Glass](02-cosmic-glass.html) | Premium, modern, lit — glassmorphism + neon | Going up-market |
| 03 | [Retro Arcade](03-retro-arcade.html) | Loud, playful, polarising — CRT scanlines + pixels | Campaign / sub-brand |
| 04 | [Editorial Magazine](04-editorial-magazine.html) | Considered, longform, classy — Playfair + drop caps | About / story page |
| 05 | [Swiss Grid](05-swiss-grid.html) | Rigorous, geometric, designed — 12-col modular | Design-led brand refresh |

[**Gallery / comparison page →**](index.html)

## Switching between designs

Every page has a thin black bar at the very top with:
- Position indicator (`01 / 05`)
- Direct links to all five designs
- Previous / next arrows
- Keyboard shortcuts: <kbd>←</kbd> / <kbd>→</kbd> to navigate, <kbd>1</kbd>—<kbd>5</kbd> to jump
- `×` to dismiss (remembered via localStorage)

## Stack

Pure HTML + CSS — Google Fonts, no build, no JS frameworks. The only JS is the ~30 lines for the switcher bar. Open any file in a browser and it works.

## Local preview

```bash
cd buyvm-designs
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Files are served by nginx on the BuyVM-1GB box at `144.172.96.137`. Updating:

```bash
rsync -avz --delete /path/to/buyvm-designs/ buyvm-designs:/var/www/buyvm-designs/
```

(Where `buyvm-designs` is an SSH alias defined in `~/.ssh/config`.)

## License

MIT &mdash; do whatever you want, attribution appreciated.
