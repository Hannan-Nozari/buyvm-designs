# BuyVM — Website (Classic design build)

A complete multi-page marketing site for [BuyVM](https://buyvm.net) (a KVM VPS host, division of Cloudzy), built on the **Classic** design direction the team selected. Grounded in the real brand DNA — charcoal `#282B30` + brand green `#49C46D` — with accurate products, specs and pricing pulled from the live site.

Live: **http://144.172.96.137**

## Pages

| Page | File | What it covers |
|------|------|----------------|
| Home | `index.html` | Hero, pricing snapshot, product overview, why-BuyVM, network, reviews |
| KVM Slices | `kvm-slices.html` | Standard + high-volume plan tables, included features, FAQ |
| Block Storage | `block-storage.html` | Slabs pricing, RDMA fabric, hot migration, comparison |
| DDoS Protection | `ddos-protection.html` | 3.5 Tbps+ filtering, L3/L4/L7 coverage, $3/mo, case study |
| Anycast | `anycast.html` | Global CDN story, 3 PoPs, use cases, requirements |
| Features | `features.html` | Stallion panel, snapshots, OS templates, software licenses |
| Network | `network.html` | Datacenters, peering, latency matrix, network tools |
| About | `about.html` | Story since 2010, values, milestones |
| Contact | `contact.html` | Support channels + demo contact form |
| Terms | `terms.html` | Terms of Service |
| Privacy | `privacy.html` | Privacy Policy |
| Acceptable Use | `acceptable-use.html` | AUP |

The four original design explorations (Classic / Premium / Console / Spatial) are preserved under [`explorations/`](explorations/index.html).

## Architecture

- **Shared stylesheet:** `assets/css/site.css` — one design system, every page. Components: nav with dropdown + mobile menu, hero, page-hero, pricing cards, comparison tables, feature grids, split rows, terminal blocks, stat bands, locations, testimonials, FAQ accordions, prose (legal), contact form, footer.
- **Shared JS:** `assets/js/site.js` — mobile-nav toggle + motion (scroll reveals, count-up numbers, rack tilt). Respects `prefers-reduced-motion`.
- **No build step, no frameworks.** Plain HTML + CSS + ~120 lines of vanilla JS. Google Fonts (Inter + JetBrains Mono).
- **Consistent chrome:** every page shares a byte-identical `<header>` and `<footer>`.

## Real facts baked in

Products/specs match the live buyvm.net at build time: Slice 512 ($2/mo) → 4096 ($15/mo) + high-volume to 28 GB/$105; Block Storage from $1.25/256 GB up to 10 TB; DDoS 3.5 Tbps+ / 700 M pps at $3/mo per IP; Anycast across Las Vegas, New York (Piscataway NJ) & Luxembourg (Roost); storage also in Miami. Stallion control panel, 100+ OS templates, free DirectAdmin on 1 GB+.

Outbound links point at the real systems: `my.frantech.ca` (billing/cart), `manage.buyvm.net` (Stallion), `wiki.buyvm.net` (docs).

## Local preview

```bash
cd buyvm-designs
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Served by nginx on the BuyVM-1GB box at `144.172.96.137`:

```bash
rsync -avz --delete --exclude=.git \
  /Users/hannannozari/buyvm-designs/ \
  buyvm-designs:/var/www/html/
```

(`buyvm-designs` is an SSH alias in `~/.ssh/config`.)

## Notes / not yet wired

- The contact form is a styled demo (`action="#"`, does not submit) — point it at your ticket system or a form backend before production.
- Legal pages (`terms`, `privacy`, `acceptable-use`) are original generic templates — have counsel review before going live.
- Plans/prices are a point-in-time snapshot; reconcile against billing before launch.

## License

MIT — attribution appreciated.
