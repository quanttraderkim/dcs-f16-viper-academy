# DCS F-16 Viper Academy Instructions

## Project context

- This repository contains a static training app for DCS F-16C Viper beginners.
- The app must stay simple to run: plain HTML, CSS, and JavaScript with no build step.
- The learning experience is Korean-first, but important aviation and combat-system terms should keep their English names alongside Korean explanations.
- The repository also contains generated guide extraction artifacts built from a local PDF source.

## Development rules

- Preserve beginner readability over clever abstractions.
- Keep the app usable when served from a simple static HTTP server.
- Treat `generated/dcs_f16_guide/guide_bundle.js` and other extracted data files as generated outputs from `scripts/extract_dcs_f16_guide.py`.
- Prefer changes that keep the training flow consistent across modules, glossary, quiz, and guide reader.
- Avoid introducing frameworks or build tooling unless there is a strong reason.

## Content rules

- Korean copy should be natural and easy to follow for a new DCS player.
- When introducing key terms like HOTAS, INS, IFF, TWS, RWR, or AOA, show or preserve the English term.
- Accuracy matters more than stylistic polish for procedural content like startup, takeoff, and landing flows.
