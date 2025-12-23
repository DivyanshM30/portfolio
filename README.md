# Divyansh Mishra - Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **TypeScript**, and **React**. Features a sleek dark/light mode, interactive particle animations, and smooth scroll effects.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)

## ✨ Features

- **🎨 Dark/Light Mode** - System preference detection with manual toggle
- **🌐 Interactive Particle Background** - Canvas-based animation with mouse interactions
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **⚡ Optimized Performance** - Server components where possible, lazy loading
- **🎭 Smooth Animations** - Section fade-in on scroll, hover effects
- **📝 Contact Form** - Integrated with Formspree for easy message handling

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

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with CSS variables
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Main page composition
├── components/
│   ├── Navbar.tsx       # Navigation with scroll effects
│   ├── Hero.tsx         # Hero section with particle canvas
│   ├── ParticleCanvas.tsx  # Interactive particle animation
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Featured projects
│   ├── Skills.tsx       # Technical skills
│   ├── Experience.tsx   # Experience & achievements
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer with social links
│   ├── ThemeProvider.tsx   # Theme context & toggle logic
│   └── SectionObserver.tsx # Fade-in animation wrapper
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/app/globals.css`:

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
  /* ... */
}
```

### Content
Update your information in the respective component files:
- Personal info → `Hero.tsx`, `About.tsx`
- Projects → `Projects.tsx`
- Skills → `Skills.tsx`
- Experience → `Experience.tsx`
- Contact links → `Contact.tsx`, `Footer.tsx`

### Contact Form
The contact form uses [Formspree](https://formspree.io). Update the form action URL in `Contact.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [React 19](https://react.dev/) | UI components |
| [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | Theming |
| [Font Awesome](https://fontawesome.com/) | Icons |
| [Google Fonts](https://fonts.google.com/) | Inter & JetBrains Mono |
| [Formspree](https://formspree.io/) | Form handling |

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | TypeScript validation |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub**: [@DivyanshM30](https://github.com/DivyanshM30)
- **LinkedIn**: [DivyanshM30](https://linkedin.com/in/DivyanshM30)
- **LeetCode**: [DivyanshM30](https://leetcode.com/DivyanshM30)
- **Email**: divyanshm.code@gmail.com

---

<p align="center">Made with ❤️ by Divyansh Mishra</p>
