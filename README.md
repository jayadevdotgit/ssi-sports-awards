# SSI Sports Awards

A responsive Next.js page based on the supplied black, gold, and orange SSI Sports Awards reference. The original event photographs and logo remain in `public/images/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4001. Both development and production start scripts use port 4001. On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Checks

```bash
npm run lint
npm run build
npm start
```

The site includes responsive navigation, a dedicated `/gallery` page with category filters, a keyboard-accessible photo viewer, and original-image downloads. The nomination flow validates details, provides a review step, saves drafts on the device when requested, and downloads a text file. No nomination submission service is connected and no form data is sent to a server.

With the app running on port 4001 and Google Chrome installed, run `npm run test:e2e` for desktop and mobile interaction checks. Screenshots are written to `artifacts/website-desktop.png` and `artifacts/website-mobile.png`.

The Bebas Neue and Manrope fonts are served locally; their licenses are in `public/fonts`. The decorative stage background was generated with the built-in image generation tool; its prompt and provenance are recorded in `artifacts/stage-background.md`. Original event photographs were not altered.

The homepage hero includes a procedural Three.js trophy with gold reflections, automatic rotation, pointer/touch and keyboard controls, and pause/resume. Reduced-motion preferences are respected, and a static image is available if WebGL fails. Implementation and fallback-artwork details are in `artifacts/trophy-hero-notes.md`. The trophy tests cover animation, pause, keyboard control, reduced motion, and WebGL fallback on desktop and mobile.
