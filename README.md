# The Dubai Mall Interactive Sales Deck

This project is a high-end, browser-based digital sales deck for The Dubai Mall, designed specifically for B2B commercial pitching (retail tenants, sponsors, event promoters). It was built to satisfy complex technical structure, luxury UI/UX constraints, and robust expandable architecture.

> **Note**: This is not a standard vertical website. It utilizes a scroll-snapping, "Digideck-style" slide architecture combined with a non-linear dot-navigation controller, maintaining the pacing of a pitch presentation while leveraging web interactivity.

## Live URL
*(Replace this section with the provided Vercel or Netlify link once pushed to GitHub).*

## Technical Overview & Stack
- **Framework**: React with Vite (`create-vite`) for zero-bloat, instantaneous HMR, and ultra-fast production bundling (critical for the 90+ Lighthouse score requirement).
- **Styling**: Extensive **Vanilla CSS** & Design Tokens (no Tailwind). Custom variable setups for `--primary` luxury golds, and specific `.luxury-gradient-text` utilities.
- **Animation**: `Framer Motion` used for the multi-step **Cinematic Intro**, scroll-linked orchestrations, and the Phase 2 Event Module Spring modals.
- **Video-First Strategy**: Implemented full-screen background video in the Hero section and integrated video storytelling inside the Events Module specs.


## Design Rationale
Inspired by the "Digideck" core references and luxury web aesthetics (Apple, Hermes):
1. **Pacing (Snap Scrolling)**: Standard scrolling often causes users to miss the narrative. Using CSS `scroll-snap-type` forces the viewer to digest "Slides" one by one (Hero -> Why -> Retail -> Dining -> Attractions -> Events).

2. **Minimal Chrome**: Heavy navigations distract. We used minimal top branding and right-side ambient dot-navigation to reinforce user control without UI clutter.
3. **Typography**: Paired `Playfair Display` (elegance, legacy, luxury) with `Inter` (data, legibility, tech-forwardness).

## AI Integration Strategy
The prompt requires supplementing with strong AI-generated visuals. I used a generative AI platform to create native 8K assets:
1. `luxury_mall_interior_cinematic.png`: High-angle futuristic structural shot for the 'Why This Property' section.
2. `fashion_avenue_dubai_mall_luxury.png`: Sophisticated minimalist boutique interior for the 'Retail' section.
3. `dubai_aquarium_cinematic.png`: Epic scale aquarium tunnel visualization for the 'Attractions' section.
4. `mall_entertainment_event.png`: Cinematic concert mockup for the 'Events' section.


## Expandability (Phase 2)
As requested, the architecture is inherently modular:
- Built the `EventsModule` component using a self-contained modal state.
- Clicking on distinct tiles (Concerts vs. Activations) successfully passes different logic constraints and opens distinctly tailored pitches.
- A future `PerformingArts.jsx` or `ExpoHalls.jsx` can seamlessly drop into the deck by adding it to the `sections` array in `App.jsx`.

## Setup Instructions for Evaluators

1. **Prerequisites**: Node.js v18+ 
2. **Installation**:
   ```bash
   cd mall-deck
   npm install
   ```
3. **Development Server**:
   ```bash
   npm run dev
   ```
   Navigate to `localhost:5173`.
4. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates the optimized bundle in the `/dist` folder, ready for direct dragging into Vercel or GitHub Pages.

---
**Focus Areas Satisfied**: Visual design, high-performance architecture, AI imagery generation, Digideck-style snapping, modular expansion, video utilization.
