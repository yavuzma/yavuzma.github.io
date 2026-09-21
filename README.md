# yavuzma.github.io

Portfolio of **Muhammet Ali Yavuz**, naval architect and ocean engineer (B.Sc. Shipbuilding and Ocean Engineering, Istanbul Technical University). It covers CFD work, ship design and engineering software, with one page per project and a CV generated from the same data.

**Live site:** https://yavuzma.github.io · **CV (PDF):** https://yavuzma.github.io/Muhammet-Ali-Yavuz-CV.pdf

## How it is built

- [Next.js](https://nextjs.org) (App Router) exported as a static site (`output: "export"`) and deployed to GitHub Pages by [`.github/workflows/nextjs-deploy.yml`](.github/workflows/nextjs-deploy.yml) on every push to `main`.
- Plain CSS with design tokens for light and dark themes (`app/globals.css`); no animation or UI libraries.
- The CV PDF is rendered at build time with [`@react-pdf/renderer`](https://react-pdf.org) (`scripts/build-cv.tsx`), so the site links to a real file.

## Where things live

```
portfolio-next/
├── app/
│   ├── data/cv.ts          # every CV fact: profile, education, experience, skills, certifications
│   ├── data/projects.ts    # project write-ups, figures, results and limitations
│   ├── page.tsx            # home page
│   ├── work/[slug]/        # one case study page per project
│   ├── cv/                 # HTML version of the CV
│   └── components/         # page sections, CVDocument (the PDF layout), run viewer
├── scripts/build-cv.tsx    # renders the PDF into public/ before each build
└── public/images/          # project figures and certificates
```

The home page, the `/cv` page and the PDF all read from `app/data/cv.ts`, so a fact is edited once.

## Working on it

```bash
cd portfolio-next
npm install
npm run dev      # regenerates the CV PDF, then starts the dev server on http://localhost:3000
npm run build    # regenerates the CV PDF, then writes the static site to out/
npm run cv       # regenerates only the CV PDF
```

Node.js 20 or newer is required.
