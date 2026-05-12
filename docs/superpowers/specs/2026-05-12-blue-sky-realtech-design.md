# Blue-Sky Realtech Landing Page Design Specification

**Date:** 2026-05-12
**Project:** Blue-Sky Realtech Landing Page
**Author:** Antigravity (AI Design Architect)

## 1. Overview
A highly premium, cinematic landing page for Blue-Sky Realtech, a luxury real estate firm in Noida/Delhi NCR. The design focuses on "Infinite Possibility" through deep blues, royal gradients, and sophisticated motion.

## 2. Tech Stack
- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS (Custom Theme)
- **Motion:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Cormorant Garamond, DM Sans, Noto Serif Devanagari, Space Grotesk
- **Deployment/Performance:** Next.js Image Optimization, Metadata API

## 3. Design System

### 3.1 Color Palette
- `--color-blush`: #F2E6EE (Subtle backgrounds)
- `--color-petal`: #FFCCF2 (Soft accents)
- `--color-violet`: #977DFF (Primary Brand Accent)
- `--color-royal`: #0033FF (Primary CTA)
- `--color-indigo`: #0600AB (Hover states)
- `--color-abyss`: #00033D (Section/Footer backgrounds)

### 3.2 Typography
- **Display:** Cormorant Garamond (Weights: 400, 600, 700)
- **Body:** DM Sans (Weights: 300, 400, 500, 600)
- **Hindi:** Noto Serif Devanagari
- **Labels:** Space Grotesk (+0.2em tracking)

### 3.3 Visual Accents
- **Gradients:** Violet-Royal for CTAs and gradient text.
- **Watermark:** "BLUE-SKY REALTECH" as a slow-drifting atmospheric background element.
- **Glassmorphism:** Used for the Navbar and specific UI cards (Wave One Tower).

## 4. Narrative Architecture (The "Scenes")
1. **Scene 1 (The Arrest):** Full-screen Hero with the "living" watermark and premium imagery.
2. **Scene 2 (The Pull):** High-energy Stats Bar (₹500Cr+).
3. **Scene 3 (The Reveal):** About Us (Wave One Tower focus) + Featured Properties (Glass UI).
4. **Scene 4 (The Depth):** Why Us (Premium Portfolio, Local Expertise).
5. **Scene 5 (The Close):** High-urgency CTA Banner + Massive Watermark Footer.

## 5. Interaction & Motion
- **Scroll Reveal:** 40px translateY + fade-in using `easeOutCubic`.
- **Language Toggle:** `LanguageProvider` Context. EN ↔ HI switch triggers a soft "shimmer" transition.
- **CTAs:** Magnetic hover effect for primary buttons.
- **Sticky Navbar:** Transitions from transparent to blurred Abyss on scroll.

## 6. SEO & Metadata
- **Title:** Blue-Sky Realtech | Premium Real Estate in Noida, Delhi NCR
- **Description:** Discover luxury properties in Noida, Delhi, and Greater Noida with Blue-Sky Realtech. Expert guidance, 24/7 support.
- **Social:** OG Image using `/antigravity/hero-image.jpg`.

## 7. Quality Checklist
- [ ] No Lorem Ipsum.
- [ ] WhatsApp link: https://wa.me/919220384300.
- [ ] Priority loading for Hero image.
- [ ] 24/7 "Always Open" status markers.
- [ ] Full responsiveness across all breakpoints.
