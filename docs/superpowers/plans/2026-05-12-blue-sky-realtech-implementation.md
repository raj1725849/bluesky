# Blue-Sky Realtech Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, cinematic real estate landing page with Next.js 14, Tailwind, Framer Motion, and bilingual (EN/HI) support.

**Architecture:** A modular App Router structure using a custom LanguageContext for state management and Framer Motion for high-fidelity animations.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, Framer Motion, TypeScript, next/font.

---

### Task 1: Project Initialization & Foundation

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `tsconfig.json`
- Modify: `public/antigravity/hero-image.png` (Move existing image)

- [ ] **Step 1: Initialize Next.js project**
Run: `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
Expected: Project scaffolded in the current directory.

- [ ] **Step 2: Move and Rename Image**
Run: `mkdir -p public/antigravity && mv hero-image.png public/antigravity/hero-image.png`
Expected: Image moved to correct public path.

- [ ] **Step 3: Install Framer Motion**
Run: `npm install framer-motion lucide-react`
Expected: Dependencies installed.

---

### Task 2: Design System & Typography

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Configure Tailwind Theme**
Update `tailwind.config.ts` with the exact color palette:
```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        blush: '#F2E6EE',
        petal: '#FFCCF2',
        violet: '#977DFF',
        royal: '#0033FF',
        indigo: '#0600AB',
        abyss: '#00033D',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        'dm-sans': ['var(--font-dm-sans)'],
        space: ['var(--font-space)'],
        hindi: ['var(--font-hindi)'],
      },
    },
  },
};
```

- [ ] **Step 2: Define Global Styles**
In `src/app/globals.css`, add:
```css
@layer base {
  :root {
    --color-blush: #F2E6EE;
    /* ... other variables ... */
  }
  body {
    @apply bg-white text-abyss selection:bg-violet selection:text-white;
  }
}
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-violet to-royal;
}
```

- [ ] **Step 3: Implement Fonts in Layout**
Import Google Fonts using `next/font/google` in `src/app/layout.tsx`.

---

### Task 3: Language Context & Content Strategy

**Files:**
- Create: `src/context/LanguageContext.tsx`
- Create: `src/lib/content.ts`

- [ ] **Step 1: Create LanguageProvider**
```typescript
'use client';
import { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'HI';
const LanguageContext = createContext<{ lang: Language; setLang: (l: Language) => void } | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('EN');
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};
```

- [ ] **Step 2: Map Content Strings**
Define all EN/HI strings in `src/lib/content.ts` for Hero, About, Properties, etc.

---

### Task 4: Navbar & Navigation

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Build Sticky Navbar**
Implement the transparent-to-blurred-Abyss transition using `framer-motion` and `window.scrollY`.
Include the Language Toggle and "Schedule a Visit" CTA.

---

### Task 5: Hero Section (The Cinematic Arrest)

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Implement Living Watermark**
Use `framer-motion` to animate the "BLUE-SKY REALTECH" text with a slow horizontal drift.
- [ ] **Step 2: Layout Content**
Position the H1, Tagline, and two primary CTAs over the background image.

---

### Task 6: Stats Bar & About Us

**Files:**
- Create: `src/components/StatsBar.tsx`
- Create: `src/components/About.tsx`

- [ ] **Step 1: Build Count-up Stats**
Use `useInView` to trigger count-up animations for property values and happy families.
- [ ] **Step 2: About Us Glass UI**
Create the asymmetrical two-column layout with the "Wave One Tower" glass card.

---

### Task 7: Featured Properties & Why Us

**Files:**
- Create: `src/components/Properties.tsx`
- Create: `src/components/WhyUs.tsx`

- [ ] **Step 1: Property Cards**
Implement the 3-column grid with glass hover effects and "View Details" CTAs.
- [ ] **Step 2: Why Us Grid**
4-feature grid with gradient top-borders and staggered entrance.

---

### Task 8: Contact & Footer (The Close)

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Contact Form & Info**
Build the controlled form fields and the 24/7 status cards.
- [ ] **Step 2: Giant Watermark Footer**
Re-implement the large brand watermark in the footer with the subtle background image.

---

### Task 9: Final Polish & SEO

**Files:**
- Modify: `src/app/layout.tsx` (Metadata)

- [ ] **Step 1: SEO Optimization**
Add the Metadata API config with title, description, and OG images.
- [ ] **Step 2: Accessibility & Performance**
Ensure all images have `alt` tags and the hero image has `priority={true}`.
