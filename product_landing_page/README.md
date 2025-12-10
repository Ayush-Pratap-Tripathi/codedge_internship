# React Mastery — Landing Page (HTML, CSS, Tailwind, AOS)

This repository contains a responsive, animated landing page built during an internship at **Codedge** to practice HTML, CSS, Tailwind, JavaScript, and basic UI/UX design.  
The project is a static landing page that showcases a _React Mastery_ course with sections for Hero, Features, Pricing, Projects, and Contact.

---

## 🚀 Features

- **Hero**: Large headline, description, floating hero card, and dual CTAs.
- **Navigation**: Fixed glass-effect header, mobile menu toggle, smooth scroll to sections.
- **Features**: Animated feature cards with gradient accents and shine-on-hover.
- **Pricing**: Three pricing tiers with a highlighted featured plan and hover effects.
- **Contact**: Simple contact form with client-side validation and social icons.
- **Footer**: Dynamic year, minimal styling.

---

## 🛠️ Tech Stack

- **HTML5** — Page structure and semantics
- **TailwindCSS (CDN)** — Utility-first styling
- **Custom CSS** — Animations (floating, card-shine), glassmorphism, responsive tweaks
- **AOS (Animate On Scroll)** — Scroll-triggered animations
- **Vanilla JavaScript** — Menu toggle, smooth scroll, form handling, small UI interactions
- **SVG / PNG assets** — Icons and hero image

---

## 📂 Project Structure

```
.
├── index.html        # Main landing page
├── styles.css        # Custom CSS for animations & UI polish
├── app.js            # JS for menu, form handling, and small interactions
├── hero.png          # Example hero image (replaceable)
├── insta.svg         # Instagram icon
├── x.svg             # X / Twitter icon
├── github.svg        # GitHub icon
└── README.md         # This file
```

---

## ✨ UI Details

- **Theme**: Dark gradient background with purple→cyan accent gradients.
- **Effects**: Floating animation for hero card (`floaty`), card shine (`card-shine`), glass header (`glass-header`).
- **Buttons**: Gradient accent buttons and subtle shadows.
- **Responsiveness**: Grid-based layout that stacks on small screens; mobile-friendly menu and form.

---

## ▶️ How to Run

1. Clone or download the project.
2. Open the project folder and simply open `index.html` in a browser.

_No build step required — Tailwind is loaded via CDN and the page works as static files. Suitable for GitHub Pages, Netlify, or any static host._

---

## 🧪 JavaScript Behavior

- Smooth scroll to the pricing section when CTA buttons are clicked.
- Mobile panel toggles on menu button click.
- Contact form validates that both email and message are provided, shows a success or error message accordingly.
- Card hover adds a subtle lift animation.

---

## 📱 Accessibility & Improvements (Suggested)

- Add `aria` attributes for better screen-reader support on the mobile menu and form.
- Replace placeholder images and SVGs with optimized assets.
- Add form backend integration (e.g., Netlify Forms, Formspree) for real submissions.
- Add keyboard navigation and focus states for accessibility.

---

## 🤝 Credits

Built by **Ayush Pratap** during internship practice at **Codedge**.  
Designed as a practice project to learn front-end patterns, animation, and responsive design.

---

## 📜 License

This project is provided for educational purposes and personal use.

---
