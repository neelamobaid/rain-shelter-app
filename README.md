# Rain Shelter — Mobile-first App 

Rain Shelter is a mobile-first app (Android + iPhone compatible) that helps people find nearby safe shelters during floods, alert others of emergency situations, and connect volunteers / NGOs. This repository contains the mobile UI and design assets for a calm, accessible, rescue-focused experience with a rescuer login portal and a polished dark cyan/blue theme that matches the official logo.

---

## Table of contents

1. [Project overview](#project-overview)
2. [Key features](#key-features)
3. [Mobile & UX decisions](#mobile--ux-decisions)
4. [Theme & visual system](#theme--visual-system)
5. [Screens & components](#screens--components)
6. [Design / implementation notes (quick snippets)](#design--implementation-notes-quick-snippets)
7. [How to run / integrate (generic)](#how-to-run--integrate-generic)
8. [Accessibility & testing](#accessibility--testing)
9. [Assets & file structure suggestions](#assets--file-structure-suggestions)
10. [Contribution guidelines](#contribution-guidelines)
11. [Contact / credits](#contact--credits)

---

## Project overview

Rain Shelter aims to provide fast, low-stress access to shelter resources during heavy rain/flood situations. This repo focuses on delivering a mobile-first UI and design system (portrait-first, touch-optimized) and includes:

* Rescuer login portal (accessible from **I Can Help**)
* Single-column, mobile-optimized layouts
* Large emergency SOS action
* Dark cyan/blue theme tuned to match the logo
* Loading/splash screen with logo blending & ripple effect
* MapView, OfflineUpdates, User dashboard, Rescuer dashboard mockups & assets

---

## Key features

* **Mobile-first UX** — portrait orientation, single-column layouts, touch-friendly controls.
* **Rescuer portal** — login/registration flows for volunteers/rescuers, separate dashboard and request management.
* **Large SOS action** — 264×264 px tappable SOS button for quick emergency alerts.
* **Map & offline support** — MapView with live tracking and OfflineUpdates feed.
* **Branding & splash** — logo integrated across screens and animated loading/get-started screen.
* **Dark cyan/blue theme** — colors tuned to match logo (black + blue/cyan tones).
* **Polished UI details** — glassmorphism cards, rounded 16px radii, subtle glow on focal controls, animated ripples around logo.

---

## Mobile & UX decisions

* Max content width constrained to **400–450px** for consistent mobile appearance.
* Increased tap targets (min 44–48pt target areas) and large spacing to reduce mis-taps.
* Bottom spacing to avoid interfering with system gestures (iOS home bar / Android nav).
* Touch active states, larger fonts for readability in low-light/night use.
* Smooth transitions and micro-interactions to feel native and calming.

---

## Theme & visual system

### Primary color palette (use as CSS variables / theme tokens)

```css
:root {
  --bg-dark-1: #030618;   /* deep navy / almost black */
  --bg-dark-2: #07122a;   /* layered dark gradient */
  --card-bg:    rgba(10,25,40,0.75); /* semi-transparent card surface */
  --accent-cyan: #06b6d4; /* primary cyan (logo match) */
  --accent-blue: #0ea5e9; /* bright blue */
  --accent-sky:  #3b82f6; /* supporting blue */
  --accent-teal: #14b8a6; /* secondary accent */
  --muted-text: #c7e8f5;  /* light readable text */
  --text:       #e6f7ff;  /* main text color */
  --border-dark: #0b2536;
  --glow:       rgba(6,182,212,0.16);
}
```

### Typography & spacing

* Base font-size: 16px (scale up for titles).
* Card radius: `16px` (1rem); major components `rounded-2xl` / `rounded-3xl`.
* SOS size: `264×264 px` visible area, centered and reachable.

### Visual patterns

* Glassmorphism cards: translucent card-bg + backdrop blur.
* Glow on primary CTA: shadow with `--glow` color.
* Mix-blend for logo: use `mix-blend-mode: screen` + `filter: brightness(1.05)` to help the logo blend into the background while staying visible.

---

## Screens & components

1. **Loading / Splash (Get Started)**

   * Animated logo centered with ripples and ambient gradient.
   * Small intro lines and a **Get Started** button.
   * Logo blends into background and transitions into landing page.

2. **Landing Page**

   * Vertically stacked cards with prominent app-style icons.
   * Primary actions: **Find Shelter**, **I Need Help (SOS)**, **I Can Help (Rescuer)**.

3. **Rescuer Login / Registration**

   * Login with username/password.
   * Logo at top with blend mode.
   * After auth, Rescuer Dashboard with requests list.

4. **User Dashboard**

   * Nearby shelters, status updates, MapView entry point, OfflineUpdates.

5. **MapView**

   * Logo in header, live badge, map markers matching cyan theme.
   * Quick actions overlay for SOS and report.

6. **OfflineUpdates**

   * List of saved updates with logo in header for consistent branding.

---

## Design / implementation notes (quick snippets)

### Example: CSS for splash logo ripple & blend

```css
.splash {
  background: linear-gradient(180deg, var(--bg-dark-1), var(--bg-dark-2));
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.logo {
  width: 140px;
  height: 140px;
  mix-blend-mode: screen;
  filter: brightness(1.05) saturate(1.05);
  position: relative;
  z-index: 2;
}
.logo::before {
  content: "";
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(14,165,233,0.22), transparent 40%);
  animation: pulse 3s infinite ease-in-out;
  z-index: 1;
  filter: blur(12px);
}
@keyframes pulse {
  0%,100% { transform: scale(0.95); opacity: 0.9; }
  50% { transform: scale(1.12); opacity: 0.45; }
}
```

### SOS button (HTML hint)

```html
<button class="sos-btn" aria-label="Send SOS">
  <div class="sos-inner">SOS</div>
</button>
```

```css
.sos-btn {
  width: 264px;
  height: 264px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
  box-shadow: 0 14px 30px var(--glow);
  border: 4px solid rgba(255,255,255,0.06);
  transition: transform .12s ease, box-shadow .12s ease;
}
.sos-btn:active { transform: scale(0.98); }
```

---

## How to run / integrate (generic)

This repository is UI/design focused — adapt to your stack:

## Assets & file structure suggestions

```
/assets
  /logo
    - rainshelter-logo.svg
    - rainshelter-logo-dark.svg
  /icons
    - shelter.svg
    - map.svg
/src
  /components
    - Splash.jsx
    - Header.jsx
    - Footer.jsx
    - SosButton.jsx
    - RescuerLogin.jsx
  /screens
    - Landing.jsx
    - MapView.jsx
    - OfflineUpdates.jsx
    - UserDashboard.jsx
    - RescuerDashboard.jsx
/styles
  - theme.css (variables)
  - globals.css
README.md
```

---


## Contact / credits

* Designer: (Neelam Obaid / neelamobaid )
* Repo maintainer: (neelamobaid.0612022@gmail.com / neelamobaid)
* Inspired by Headspace (calming aesthetics) and ResQ Pakistan (function-first rescue workflows).



Which would you like next?

