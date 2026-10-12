# SEVEN-MOTION

SEVEN-MOTION is an AI-first software engineering studio based in Kenya, building software products and tailored digital solutions.

This repository contains the editable website source. The original `seven-motion.zip` archive is intentionally retained for now as a reference until its contents have been compared with the normalized source.

## Stack

- React 18
- Vite 5
- Plain CSS with responsive layouts and reduced-motion support
- GitHub Actions for build and smoke-test checks
- Vercel for deployment previews

## Local development

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm test
npm run build
npm run preview
```

The smoke tests cover key page sections, mobile-navigation accessibility hooks, document metadata and responsive/accessibility CSS. The production build is generated into `dist/`.

## Website content

The site introduces the studio, selected portfolio concepts (Glowify AI, NailBook AI and SHADOWCHART AI), service areas, delivery approach and consultation model. Product descriptions are intentionally framed as portfolio concepts rather than claims of public availability.

The current engagement information describes a free 30-minute consultation and a KES 5,000 discovery consultation for scoped implementation work.

## Repository workflow

1. Create a focused feature branch.
2. Run `npm test` and `npm run build`.
3. Open a pull request and review the preview deployment.
4. Merge only after approval.
5. Promote production only with explicit authorization.

## Archive policy

Do not remove `seven-motion.zip` until its source provenance has been checked and its contents are confirmed to be represented in the editable tree or preserved elsewhere.
