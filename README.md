# Divyansh Mishra - Portfolio

A responsive developer portfolio built with **Next.js 16**, **React 19**, and **TypeScript 5**. It uses the App Router, server-rendered content, statically generated project case studies, route-specific metadata, and a persisted dark/light theme.

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)

## ✨ Features

- **Server-rendered foundation** - The homepage and project content render as React Server Components; client components are limited to interactive behavior such as navigation state, animations, counters, and theme controls.
- **Project case studies** - One typed data module drives the homepage cards and statically generated `/projects/[slug]` detail pages, including previous/next navigation.
- **SSR-friendly theme toggle** - Dark is the deterministic server default. A pre-paint script restores an explicitly saved light or dark choice from `localStorage`, and the accessible switch persists changes across visits.
- **SEO and sharing metadata** - The root layout defines canonical, Open Graph, Twitter, robots, and Person JSON-LD metadata. Each project route generates its own title, description, canonical URL, and social metadata. Static crawler and sharing assets are included.
- **Responsive, accessible UI** - Mobile layouts, semantic controls, reduced-motion handling, section reveals, scroll progress, and keyboard-friendly links.
- **Contact and analytics** - Formspree message submission and Vercel Analytics.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/DivyanshM30/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Architecture

```text
src/
├── app/
│   ├── layout.tsx                 # Fonts, providers, analytics, metadata, and JSON-LD
│   ├── page.tsx                   # Server-rendered homepage composition
│   ├── globals.css                # Responsive layout, themes, and animations
│   └── projects/[slug]/page.tsx   # Static params, route metadata, detail page
├── components/
│   ├── Projects.tsx               # Server-rendered cards from shared data
│   ├── ProjectDetail.tsx          # Case study and adjacent-project navigation
│   ├── ThemeProvider.tsx          # Persisted theme state and toggle API
│   ├── ThemeToggle.tsx            # Accessible dark/light switch
│   └── ...                        # Homepage sections and focused interactions
└── lib/
    └── projects.ts                # Typed project content and slug helpers
```

Most content components remain server-renderable. Files marked with `"use client"` provide only the browser APIs and interaction state their feature requires.

## 🔎 SSR and SEO

- `src/app/layout.tsx` supplies site-wide metadata, a canonical default, social cards, crawler directives, and Person structured data.
- `src/app/projects/[slug]/page.tsx` uses `generateStaticParams` for every project in `src/lib/projects.ts` and `generateMetadata` for unique project titles, descriptions, canonicals, and social cards.
- `public/robots.txt`, `public/sitemap.xml`, and `public/og-image.png` provide static crawler and sharing assets.

## 🎨 Customization

### Theme Colors

Edit the light and dark CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-color: #000000;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --bg-light: #ffffff;
  --border-color: #e5e5e5;
}

[data-theme="dark"] {
  --primary-color: #ffffff;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --bg-light: #0a0a0a;
  --border-color: #2a2a2a;
}
```

The document is rendered with `data-theme="dark"`. Initialization in `src/app/layout.tsx` applies a saved explicit choice before paint; `ThemeProvider.tsx` and `ThemeToggle.tsx` handle subsequent changes.

### Content

Update information in the relevant source files:

- Personal information → `src/components/Hero.tsx`, `src/components/About.tsx`
- Projects and project details → `src/lib/projects.ts`
- Skills → `src/components/Skills.tsx`
- Experience → `src/components/Experience.tsx`
- Contact and social links → `src/components/Contact.tsx`, `src/components/Footer.tsx`
- Site-wide SEO → `src/app/layout.tsx`

The resume URL can be set with `NEXT_PUBLIC_RESUME_URL`; the hero uses its built-in Google Drive URL when the variable is absent.

### Contact Form

The contact form uses [Formspree](https://formspree.io). Update the endpoint in `src/components/Contact.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16.2.10](https://nextjs.org/) | App Router, SSR, static generation, metadata, and image/font optimization |
| [React 19.2.3](https://react.dev/) | Server and client UI components |
| [TypeScript 5](https://www.typescriptlang.org/) | Type safety |
| [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | Theme tokens and styling |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Google Fonts](https://fonts.google.com/) | Space Grotesk, Archivo, and JetBrains Mono through `next/font` |
| [Formspree](https://formspree.io/) | Contact form handling |
| [Vercel Observability](https://vercel.com/products/observability) | Vercel Analytics integration |

## 📜 Scripts and CI

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript validation without emitting files |

GitHub Actions runs `npm ci`, type checking, linting, and a production build on every push and pull request using Node.js 22.

## 🤝 Connect

- **GitHub**: [@DivyanshM30](https://github.com/DivyanshM30)
- **LinkedIn**: [DivyanshM30](https://linkedin.com/in/DivyanshM30)
- **Email**: [divyanshm.code@gmail.com](mailto:divyanshm.code@gmail.com)

---

<p align="center">Made with ❤️ by Divyansh Mishra</p>
