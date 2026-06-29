# Moghan Kumar A — Portfolio

A modern, responsive portfolio built with **React 18 + TypeScript + Tailwind CSS + Vite**.

## 🚀 Tech Stack

- ⚛️ React 18
- 🔷 TypeScript
- 🎨 Tailwind CSS v3
- ⚡ Vite 5

## 📁 Folder Structure

```
moghan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── SectionHeader.tsx
│   ├── data/
│   │   └── portfolio.ts       ← Edit your info here
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollReveal.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🛠️ Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## ✏️ Customize

All your personal data is in one file:
```
src/data/portfolio.ts
```

Edit it to update your name, experience, projects, skills, and contact info.

## ✨ Features

- 🌙 Dark / Light theme toggle (persists in localStorage)
- 📱 Fully responsive (mobile + desktop)
- 🎬 Scroll reveal animations
- 🎨 Purple accent design system
- 🧩 Component-based architecture
- 🔷 Full TypeScript types
