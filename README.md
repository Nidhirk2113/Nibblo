# Nibblo 2.0

A personal portfolio rebuilt with React, Vite and Tailwind CSS. The visual direction pairs a playful creative-tech identity with an editorial layout, subtle motion and a persistent light/dark theme.

## Tech stack

- React 19 + Vite
- Tailwind CSS 4 (Vite plugin)
- Motion for React
- Lucide React
- CSS custom properties for theme tokens and responsive styling

## Getting started

**Requirements:** Node.js 20.19+ or 22.12+.

```bash
git clone https://github.com/Nidhirk2113/Nibblo.git
cd Nibblo
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
Nibblo/
├── public/              # Static assets (including profile image, if present)
├── src/
│   ├── App.jsx          # Portfolio sections and interactions
│   ├── data.js          # Projects, skills, experience and research content
│   ├── index.css        # Design tokens, themes, layout and responsive styles
│   └── main.jsx         # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Customisation

- Update project cards, experience, skills and research in `src/data.js`.
- Adjust colours and theme tokens in `src/index.css`.
- Update profile links and contact information in `src/App.jsx`.
- The theme preference is saved locally in the browser.

## Deployment

The project is ready for Vercel:

1. Import this GitHub repository into Vercel.
2. Use the Vite framework preset.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

No backend or environment variables are required for the current portfolio experience.

## Notes

Review all project URLs, internship details, publication status and contact links before publishing. The site intentionally avoids a backend; portfolio content is maintained as local structured data.
