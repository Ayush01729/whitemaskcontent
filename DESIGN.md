---
name: White Mask Content
description: Autonomous studio-grade short-form video production from a single website URL
colors:
  primary: "#3b82f6"
  primary-glow: "#60a5fa"
  neutral-bg: "#070a12"
  neutral-bg-deep: "#05070c"
  surface-panel: "#0d1527"
  surface-raised: "#141f38"
  line: "#1c2b4d"
  line-subtle: "rgba(255, 255, 255, 0.08)"
  paper: "#f4f7fc"
  paper-dim: "#c5cfe3"
  mute: "#8594b5"
  wave: "#10b981"
  amber: "#f59e0b"
  coral: "#f43f5e"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Hanken Grotesk', sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "'Hanken Grotesk', 'Inter', -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-glow}"
  card-glass:
    backgroundColor: "{colors.surface-panel}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Obsidian Kinetic Studio

## Overview
White Mask Content's visual world embodies "Obsidian Kinetic Studio (Master Grade)"—fusing high-end devtools luxury (Linear, Attio, Ramp) with the energetic, thumb-stopping vitality of TikTok, Instagram Reels, and YouTube Shorts. It avoids low-effort generic AI tropes (no oversaturated neon glows or unearned gradient text) in favor of deep optical obsidian grounds, physical smoked glassmorphism, camera sensor chrome, and kinetic interaction.

## Colors
- **Canvas (`--color-ink` / `#070a12`):** Ultra-deep tungsten obsidian. Eliminates clinical pure-black harshness while maintaining supreme contrast.
- **Surfaces (`--color-panel` / `#0d1527`, `--color-panel-raised` / `#141f38`):** Layered optical smoked glass with `backdrop-filter: blur(24px)` and subtle borders (`rgba(255, 255, 255, 0.08)`).
- **Signal Accents (`--color-signal` / `#3b82f6`):** Electric studio sapphire for primary CTAs, active states, and scanning indicators.
- **Growth & Trust Accent (`--color-wave` / `#10b981`):** Cyber emerald for verified badges, "No Card Required" chips, and retention metrics.
- **Kinetic Accent (`--color-amber` / `#f59e0b`):** Warm amber for captions, AI Creator badges, and trending tags.
- **Alert / Record (`--color-coral` / `#f43f5e`):** Live recording dots, skip buttons, and required form asterisks.

## Typography
- **Display & Section Titles:** `Bricolage Grotesque`. Tight negative tracking (`-0.03em`), bold structural presence, optical balance (`text-wrap: balance`).
- **Body & Controls:** `Hanken Grotesk` / `Inter`. Clean, neutral, high-legibility neo-grotesque sans with open apertures.
- **Data & Sensor Telemetry:** Monospace (`font-mono`) for FPS indicators, timecodes, latencies, and retention percentages.

## Layout
- **Max Content Width:** `1200px` (or `1280px` for multi-column grids).
- **Horizontal Gutters:** Responsive `px-4` to `px-8`.
- **Rhythm:** Generous section spacing (`py-20` to `py-24`) with tight element groupings (`gap-3` to `gap-4`).

## Elevation & Depth
- **Smoked Glass Panels:** `rgba(13, 21, 39, 0.65)` + `backdrop-filter: blur(24px)` + `box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`.
- **Optical Lens Glows:** Deep blurred radial accents (`filter: blur(80px); opacity: 0.28`) placed behind focal interactive elements.

## Shapes
- **Surfaces & Cards:** `rounded-2xl` (16px) and `rounded-3xl` (24px).
- **Controls & CTAs:** `rounded-full` (9999px) pills for navigation and primary buttons.
- **Mobile Video Players:** Authentic `rounded-[32px]` 9:16 mobile device shells.

## Components
- **Hero URL Command Center:** Dynamic URL input with multi-stage simulated brand extraction and instant 9:16 video concept preview.
- **Adaptive Floating Navbar:** Edge-to-edge on resting state, condensing into a floating glass pill with blur on scroll.
- **Kinetic Showcase Rails:** 4-column multi-directional marquee scrolling with subtle Ken Burns drift.
- **Hybrid Studio Toggle:** Interactive switcher comparing Faceless B-roll vs AI Creator cuts on the same hook.
- **Reach Calculator:** Real-time volume sliders predicting organic impressions, paid ad CPM value, and saved hours.
- **Claim Free Drawer:** Frictionless 3-video claim flow requiring only URL and email with zero payment method.

## Do's and Don'ts
- **DO** use real product language and outcome-driven copywriting.
- **DO** provide working interactive feedback (sliders, toggles, play/pause, live scanners).
- **DO** maintain strict WCAG AA contrast on all text elements against dark grounds.
- **DON'T** use kickers or eyebrows above headings; let the heading carry its own weight.
- **DON'T** use gradient text; achieve emphasis through weight, scale, and contrast.
- **DON'T** use fake client testimonials or invented performance numbers.
- **DON'T** use emoji in place of standard, consistent iconography.
