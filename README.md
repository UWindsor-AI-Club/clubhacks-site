# ClubHacks Website

One-page hackathon website for **ClubHacks** built with React + Vite.

## Why This Was Made

This project was created to provide a clean, modern event site for ClubHacks with all key hackathon info in one place, including:

- Event overview and registration CTA
- Tracks and workshops
- Schedule, prizes, and judging criteria
- FAQ and student club links

## Run locally

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Vercel Analytics (important)

This project uses **Vite + React**, so use:

```jsx
import { Analytics } from '@vercel/analytics/react'
```

Do **not** use `@vercel/analytics/next` here (that import is for Next.js apps).

## Tech stack

- React
- Vite
- CSS (custom styles)

---
<img width="617" height="413" alt="image" src="https://github.com/user-attachments/assets/50281a15-da95-4d25-8bd8-6c863837d8ff" />


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
