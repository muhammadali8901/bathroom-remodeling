# Website Color Palette

Documented from `app/globals.css` and design system usage.

## Primary Colors

| Role | CSS Variable | Value | Usage |
|------|--------------|-------|-------|
| **Primary** | `--primary` | oklch(0.55 0.13 184) – Sky blue | Buttons, links, accents, icons |
| **Primary Foreground** | `--primary-foreground` | oklch(0.99 0.003 85) – Off-white | Text on primary buttons |
| **Secondary** | `--secondary` | oklch(0.94 0.01 85) – Light beige | Section backgrounds |
| **Accent** | `--accent` | oklch(0.55 0.08 85) – Muted gold | Hover states, ring focus |

## Background & Text

| Role | CSS Variable | Value | Usage |
|------|--------------|-------|-------|
| **Background** | `--background` | oklch(0.97 0.005 85) – Warm off-white | Page background |
| **Foreground** | `--foreground` | oklch(0.25 0.01 250) – Deep charcoal | Primary text |
| **Card** | `--card` | oklch(0.99 0.003 85) – Soft cream | Card backgrounds |
| **Muted Foreground** | `--muted-foreground` | oklch(0.45 0.01 250) | Secondary text |

## Button Colors

| Context | Classes | Notes |
|---------|---------|-------|
| Primary CTA | `bg-primary text-primary-foreground` | Sky blue background |
| Hero "View Portfolio" | `bg-black text-white hover:bg-black/90` | Black for visibility on hero overlay |
| Outline | `border-border bg-background` | Neutral outline style |

## Design System Compatibility

The Hero "View Portfolio" button was updated to **black background** and **white text** for better visibility on the dark hero overlay. Black (`bg-black`) does not conflict with the design system:

- Primary remains sky blue for main CTAs
- Black is used only for the secondary hero button where contrast was poor
- All other buttons retain existing styling
