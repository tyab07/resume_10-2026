# Muhammad Tayyab — Portfolio

Single-page developer portfolio built with **React + Vite + Tailwind CSS v4**.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Edit your content
Everything (bio, skills, experience, projects, links) is in **`src/data.js`**.

- Replace `hrmsPost` in `src/data.js` with the direct URL of your LinkedIn post about the AI HRMS project.
- Replace `public/Muhammad_Tayyab_Resume_2026.pdf` when you update your resume.
- Theme colors are CSS variables at the top of `src/index.css` (dark default, light via the navbar toggle).

## Deploy (free)
- **Vercel:** import the repo, framework preset *Vite*, deploy.
- **Netlify:** build command `npm run build`, publish directory `dist`.
