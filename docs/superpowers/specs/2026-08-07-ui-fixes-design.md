# Dashboard Fix Design Spec

**Date:** 2026-08-07
**Status:** Ready for approval

## Problem Summary

The dashboard has 5 critical UI issues that make it unusable:
1. Sidebar is not collapsible (spec requires it)
2. 13 CSS variables missing (colors don't work)
3. Inter font not loaded
4. Mobile responsive not implemented
5. Chart colors are hardcoded, not dynamic with accent picker

## Fix Sequence (5 phases)

### Phase 1: Sidebar Collapsible

**Current:** Fixed 260px sidebar, hamburger button does nothing.

**Fix:**
- Add `isCollapsed` state to `MainLayout.razor`
- Wire hamburger button in `Header.razor` to toggle state
- Pass state down to `Sidebar.razor` via cascading parameter
- Sidebar animation: `w-[260px]` → `w-[72px]` with `transition-all duration-300`
- Collapsed state: show only icons, hide text labels
- Save state to `localStorage` via `theme.js`
- Content area `ml-[260px]` → `ml-[72px]` when collapsed
- Z-index: sidebar above content on mobile

### Phase 2: CSS Variables

**Current:** 13 variables missing from `theme.css`.

**Fix:** Add to `theme.css`:
```css
:root {
  /* Existing vars... */
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --chart-1: oklch(0.55 0.19 160);
  --chart-2: oklch(0.55 0.19 240);
  --chart-3: oklch(0.55 0.19 280);
  --chart-4: oklch(0.55 0.19 350);
  --chart-5: oklch(0.55 0.19 50);
  --sidebar-primary: oklch(0.55 0.19 160);
  --sidebar-accent: oklch(0.205 0 0);
  --sidebar-border: oklch(0.205 0 0);
}

.dark {
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --chart-1: oklch(0.55 0.19 160);
  --chart-2: oklch(0.55 0.19 240);
  --chart-3: oklch(0.55 0.19 280);
  --chart-4: oklch(0.55 0.19 350);
  --chart-5: oklch(0.55 0.19 50);
  --sidebar-primary: oklch(0.55 0.19 160);
  --sidebar-accent: oklch(0.205 0 0);
  --sidebar-border: oklch(0.205 0 0);
}
```

Update `theme.js` `setAccent()` to also update `--chart-1` through `--chart-5` and `--sidebar-primary`.

### Phase 3: Inter Font

**Fix:** Add Google Fonts import to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Add to `theme.css`:
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Phase 4: Mobile Responsive

**Fix:**
- Sidebar on mobile: overlay drawer with backdrop
- Add `isMobile` state, detect via `matchMedia`
- When mobile: sidebar starts hidden, hamburger opens as overlay
- Backdrop click closes sidebar
- Z-index: sidebar `z-50`, backdrop `z-40`
- Content: no left margin on mobile

### Phase 5: Dynamic Chart Colors

**Fix:**
- Update `theme.js` `setAccent()` to update `--chart-1` through `--chart-5`
- Pass accent color as parameter to chart components
- Charts read CSS variable `var(--chart-1)` for series colors
- Update `AreaChart.razor`, `Sparkline.razor`, `Donut.razor`

## Files to Modify

| File | Changes |
|------|---------|
| `Layout/MainLayout.razor` | Add `isCollapsed`, `isMobile` state, pass to children |
| `Layout/Sidebar.razor` | Accept collapsed/mobile props, conditional rendering |
| `Layout/Header.razor` | Wire hamburger button |
| `Styles/theme.css` | Add missing CSS variables |
| `wwwroot/js/theme.js` | Update `setAccent()` for chart colors |
| `wwwroot/index.html` | Add Inter font, update Tailwind config |
| `Components/charts/AreaChart.razor` | Use CSS variables for colors |
| `Components/charts/Sparkline.razor` | Use CSS variables for colors |
| `Components/charts/Donut.razor` | Use CSS variables for colors |
| `Layout/MainLayout.razor.css` | Update for collapsed/mobile states |

## Success Criteria

- [ ] Sidebar collapses to icon-only mode (72px) with smooth animation
- [ ] Sidebar state persists across page reloads
- [ ] All CSS variables defined and working
- [ ] Accent picker changes colors everywhere (sidebar, charts, cards)
- [ ] Inter font loads and displays correctly
- [ ] Mobile: sidebar is hidden, hamburger opens overlay drawer
- [ ] Mobile: backdrop click closes sidebar
- [ ] Charts update colors when accent changes
