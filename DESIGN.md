# DESIGN.md — DashboardTheKingThePower

> Single source of truth for design decisions. CSS, components, and implementation are projections of this document.

## Phase 0: Discovery

### Artifact Classification
- **Type:** Dashboard / SaaS Admin Application
- **Positioning:** Professional, functional, modern
- **Primary Action:** Data visualization, navigation, theme customization
- **Audience:** Business users, managers, administrators

### Brand Adjectives (Locked)
1. **Profissional** — Enterprise-grade appearance, trustworthy
2. **Funcional** — Every element serves a purpose, efficient workflows
3. **Moderno** — Contemporary design patterns, up-to-date aesthetics
4. **Limpo** — Clear hierarchy, generous whitespace, no clutter
5. **Eficiente** — Fast to scan, easy to navigate, productive

### Aesthetic Essence
**"Professional dashboard UI"** — Clean, data-focused, enterprise-ready

## Phase 1: Design System

### Aesthetic Commitment
Enterprise dashboard with OKLCh color system, dark/light themes, and accent color presets. Follows the Apex Blazor Dashboard reference design.

### Typography
- **Display/Headlines:** Inter (clean, professional, accessible)
- **Body:** Inter (consistent, readable at all sizes)
- **Monospace:** JetBrains Mono (for data, code, metrics)
- **Scale:** xs(0.75rem) → 3xl(1.875rem)
- **Weights:** normal(400), medium(500), semibold(600), bold(700)

**Rationale:** Inter is the industry standard for dashboards - neutral, readable, professional. Matches the Apex reference design.

### Color System (OKLCh)

#### Light Mode
```css
--primary: oklch(0.55 0.19 160);        /* emerald */
--primary-foreground: oklch(1 0 0);
--background: oklch(1 0 0);              /* white */
--foreground: oklch(0.145 0 0);          /* near-black */
--card: oklch(1 0 0);
--card-foreground: oklch(0.145 0 0);
--secondary: oklch(0.97 0 0);
--secondary-foreground: oklch(0.205 0 0);
--muted: oklch(0.97 0 0);
--muted-foreground: oklch(0.556 0 0);
--border: oklch(0.922 0 0);
--input: oklch(0.922 0 0);
--ring: oklch(0.55 0.19 160);
--sidebar: oklch(0.145 0 0);
--sidebar-foreground: oklch(0.985 0 0);
```

#### Dark Mode
```css
--background: oklch(0.145 0 0);
--foreground: oklch(0.985 0 0);
--card: oklch(0.145 0 0);
--card-foreground: oklch(0.985 0 0);
--secondary: oklch(0.269 0 0);
--secondary-foreground: oklch(0.985 0 0);
--muted: oklch(0.269 0 0);
--muted-foreground: oklch(0.708 0 0);
--border: oklch(0.269 0 0);
--input: oklch(0.269 0 0);
--sidebar: oklch(0.205 0 0);
--sidebar-foreground: oklch(0.985 0 0);
```

#### Accent Color Presets
| Name | Hue | Saturation | Use Case |
|------|-----|------------|----------|
| emerald | 160 | 0.19 | Default primary, success states |
| blue | 240 | 0.19 | Information, links |
| violet | 280 | 0.19 | Creative, premium |
| rose | 350 | 0.19 | Warnings, alerts |
| orange | 50 | 0.19 | Energy, attention |
| slate | 260 | 0.02 | Neutral, subtle |

### Token Table

#### Typography Tokens
| Token | Value | Use |
|-------|-------|-----|
| --font-sans | Inter, sans-serif | Body text |
| --font-mono | JetBrains Mono, monospace | Code, data |
| --text-xs | 0.75rem | Labels, captions |
| --text-sm | 0.875rem | Secondary text |
| --text-base | 1rem | Body |
| --text-lg | 1.125rem | Subheadings |
| --text-xl | 1.25rem | Section titles |
| --text-2xl | 1.5rem | Page titles |
| --text-3xl | 1.875rem | Hero metrics |

#### Spacing Tokens
| Token | Value | Use |
|-------|-------|-----|
| --space-1 | 0.25rem | Tight gaps |
| --space-2 | 0.5rem | Element spacing |
| --space-3 | 0.75rem | Card padding |
| --space-4 | 1rem | Section gaps |
| --space-6 | 1.5rem | Component gaps |
| --space-8 | 2rem | Section padding |
| --space-12 | 3rem | Page margins |
| --space-16 | 4rem | Major sections |

#### Radius Tokens
| Token | Value | Use |
|-------|-------|-----|
| --radius-sm | calc(var(--radius) - 4px) | Small elements |
| --radius-md | calc(var(--radius) - 2px) | Inputs, buttons |
| --radius-lg | var(--radius) | Cards, modals |
| --radius-xl | calc(var(--radius) + 4px) | Large containers |
| --radius | 0.5rem | Base radius |

#### Shadow Tokens
| Token | Value | Use |
|-------|-------|-----|
| --shadow-sm | 0 1px 2px oklch(0 0 0 / 0.05) | Subtle elevation |
| --shadow-md | 0 4px 6px oklch(0 0 0 / 0.07) | Cards |
| --shadow-lg | 0 10px 15px oklch(0 0 0 / 0.1) | Modals, dropdowns |

### Signature Move
**Accent Color Presets** — Six curated color themes that transform the entire dashboard personality with one click. Each preset is carefully tuned for both light and dark modes.

## Phase 2: Craft Layer

### Layout
- **Sidebar:** 260px fixed, collapsible to 64px
- **Header:** Sticky, 56px height
- **Content:** Max-width 1400px, centered, 24px padding
- **Grid:** 12-column responsive grid
- **Breakpoints:** sm(640), md(768), lg(1024), xl(1280), 2xl(1536)

### Components

#### Buttons
- **Primary:** Filled, accent color, for main actions
- **Secondary:** Outline, for secondary actions
- **Ghost:** Text-only, for navigation, subtle actions
- **States:** default, hover, active, focus, disabled, loading

#### Cards
- **Default:** White/dark background, subtle border, rounded corners
- **Interactive:** Hover elevation change, cursor pointer
- **States:** default, hover, active, selected

#### Forms
- **Input:** Label above, helper text below, error state
- **Select:** Custom dropdown with search
- **Checkbox/Radio:** Custom styled, accessible
- **States:** default, focus, error, disabled

#### Navigation
- **Sidebar:** Collapsible, icon + text, active state
- **Tabs:** Underline style, keyboard accessible
- **Breadcrumbs:** Truncation with ellipsis

#### Data Display
- **Tables:** Left-align text, right-align numbers, sortable headers
- **Badges:** Status indicators, color-coded
- **Avatars:** Circular, fallback initials
- **Sparklines:** Inline mini-charts

### Motion
- **Duration:** 150ms (fast), 300ms (normal), 500ms (slow)
- **Easing:** ease-out for exits, ease-in for entries, ease-in-out for transitions
- **Transform-only:** Animate transform and opacity only
- **Reduced motion:** Honor prefers-reduced-motion

### Iconography
- **Library:** Phosphor Icons
- **Stroke width:** 1.5 (consistent)
- **Size:** 16px (sm), 20px (md), 24px (lg)
- **Style:** Outlined by default, filled for active states

### Dark Mode
- **Strategy:** CSS variables with `.dark` class toggle
- **Colors:** Near-black backgrounds, off-white text
- **Elevation:** Via lightness, not shadows
- **Accents:** Slightly desaturated in dark mode
- **Persistence:** localStorage

### Accessibility
- **WCAG 2.2 AA:** Minimum contrast 4.5:1 for body text
- **Focus:** Visible focus rings on all interactive elements
- **Keyboard:** Full keyboard navigation support
- **Targets:** Minimum 24px touch targets
- **Labels:** All form inputs have associated labels
- **Reduced motion:** Animations disabled when preferred

## Phase 3: Slop Audit

### Anti-Patterns Avoided
- ✅ No purple/indigo gradients (AI default)
- ✅ No Inter as only font (acceptable for dashboards)
- ✅ No generic card templates
- ✅ No bounce/elastic animations
- ✅ No decorative glassmorphism
- ✅ No blob-rounding
- ✅ No stock imagery

### Quality Gates
- ✅ Full component state matrices
- ✅ Intentional layout with rhythm
- ✅ Communicative motion
- ✅ Coherent icon system
- ✅ Designed dark mode (not inverted)
- ✅ Accessibility pass/fail gate

## Changelog

- **2026-08-06:** Initial DESIGN.md created for DashboardTheKingThePower