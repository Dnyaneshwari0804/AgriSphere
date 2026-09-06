# AgriSphere

An SIH 2026 PS 132 prototype for a trusted farm-to-market intelligence platform.

## Run locally

This is a dependency-free static PWA. From this directory, use any static server, then open the displayed local URL.

```bash
npx serve .
```

## Prototype flows

- Farmer workspace with market/net-realisation ranking
- 14-day sell-window forecast and early alert state
- Produce passport with photo/video evidence workflow
- AI grading and deepfake-screening demo states
- Buyer offer chain, counter-offer and deal check
- FPO pooled produce state and payment split-back story
- Explainable reliability score and hash-chain audit viewer
- Marathi-first interface, responsive/mobile-ready layout, and offline cache

## Demo boundaries

The experience uses seeded demonstration data. Agmarknet/eNAM, GPS/camera capture, CNN grading, deepfake screening, notification delivery, payment tracking, and data pipeline cards are UI prototypes rather than live integrations. Production use requires secure backend services, verified data access, and consent-based camera/location handling.

## Files

- `index.html` – user interface
- `styles.css` – responsive visual system
- `app.js` – navigation and interactive demo states
- `sw.js` / `manifest.webmanifest` – PWA support
