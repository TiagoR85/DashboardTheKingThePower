# Phase 1 + 2 Design — DashboardTheKingThePower

## Overview

Implementação do Foundation (Phase 1) e Dashboard Home (Phase 2) do clone pixel-perfect do Apex Blazor Dashboard.

## Escopo

### Phase 1: Foundation
- Criar projeto Blazor WebAssembly
- Configurar Tailwind CSS v4
- Design system (OKLCh colors, typography, spacing)
- Layout components (Sidebar, Header, Content)
- Theme system (dark/light toggle)
- Accent color presets (6 cores)
- Command palette (Ctrl+K)

### Phase 2: Dashboard Home
- KPI cards com sparklines
- Area chart com gradient
- Donut chart
- Monthly goals com progress bars
- Appointments list
- Latest transactions table
- Quick actions grid

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | .NET 10 / C# |
| UI | Blazor WebAssembly (Static) |
| Styling | Tailwind CSS v4 |
| Charts | ApexCharts (Blazor-ApexCharts) |
| Icons | Phosphor Icons |
| Drag-and-Drop | SortableJS (BlazorSortable) |
| Tests | Playwright E2E |
| Build | Static WebAssembly |

## Design System

### Colors (OKLCh)

```css
:root {
  --primary: oklch(0.55 0.19 160);        /* emerald */
  --primary-foreground: oklch(1 0 0);
  --background: oklch(1 0 0);              /* white */
  --foreground: oklch(0.145 0 0);          /* near-black */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.55 0.19 160);
  --chart-1: oklch(0.55 0.19 160);
  --chart-2: oklch(0.6 0.18 200);
  --chart-3: oklch(0.65 0.2 300);
  --chart-4: oklch(0.7 0.15 50);
  --chart-5: oklch(0.6 0.22 350);
  --sidebar: oklch(0.145 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.55 0.19 160);
  --sidebar-accent: oklch(0.205 0 0);
  --sidebar-border: oklch(0.205 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.55 0.19 160);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.55 0.19 160);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-border: oklch(0.269 0 0);
}
```

### Accent Color Presets

| Name | Hue | Saturation |
|------|-----|------------|
| emerald | 160 | 0.19 |
| blue | 240 | 0.19 |
| violet | 280 | 0.19 |
| rose | 350 | 0.19 |
| orange | 50 | 0.19 |
| slate | 260 | 0.02 |

### Typography

- Font: Inter (Google Fonts)
- Font sizes: xs (0.75rem), sm (0.875rem), base (1rem), lg (1.125rem), xl (1.25rem), 2xl (1.5rem), 3xl (1.875rem)
- Font weights: normal (400), medium (500), semibold (600), bold (700)

### Border Radius

- Default: 0.5rem (--radius)
- Sm: calc(var(--radius) - 4px)
- Md: calc(var(--radius) - 2px)
- Lg: var(--radius)
- Xl: calc(var(--radius) + 4px)

## Layout

### Sidebar (260px, collapsible)

```
┌─────────────────────┐
│  Logo + Brand       │
│  Sidebar Toggle     │
├─────────────────────┤
│  Search (Ctrl+K)    │
├─────────────────────┤
│  Dashboard          │
│  Analytics          │
│  E-Commerce         │
│  Projects           │
│  Applications       │
│  Authentication     │
├─────────────────────┤
│  User Avatar        │
│  User Name          │
│  Theme Toggle       │
│  Accent Picker      │
└─────────────────────┘
```

### Header (sticky, 56px height)

```
┌──────────────────────────────────────────────┐
│  Sidebar Toggle | Search... | Ctrl+K | User  │
└──────────────────────────────────────────────┘
```

### Content Area

- Max-width: 1400px
- Padding: 24px
- Background: var(--background)

## Components

### Phase 1 Components

#### Layout Components
- `MainLayout.razor` - Layout principal com sidebar e header
- `Sidebar.razor` - Sidebar colapsável com menu e controles
- `Header.razor` - Header sticky com search e user menu

#### UI Components
- `Button.razor` - Botões com variantes (primary, secondary, outline, ghost)
- `Card.razor` - Cards com header, content, footer
- `Input.razor` - Inputs com label, placeholder, error state
- `Badge.razor` - Badges com variantes de cor
- `Modal.razor` - Modal overlay para command palette

#### Theme Components
- `ThemeToggle.razor` - Toggle dark/light mode
- `AccentPicker.razor` - Picker de 6 accent colors

### Phase 2 Components

#### Dashboard Components
- `KpiCard.razor` - Card com KPI, ícone e sparkline
- `MonthlyGoals.razor` - Progress bars com labels
- `AppointmentsList.razor` - Lista de compromissos
- `TransactionsTable.razor` - Tabela de transações
- `QuickActions.razor` - Grid de ações rápidas

#### Chart Components
- `AreaChart.razor` - Gráfico de área com gradient
- `DonutChart.razor` - Gráfico de rosca
- `BarChart.razor` - Gráfico de barras
- `LineChart.razor` - Gráfico de linhas
- `Sparkline.razor` - Mini gráfico para KPI cards

## File Structure

```
ApexBlazorClone/
├── ApexBlazorClone.sln
├── src/
│   └── ApexBlazorClone/
│       ├── Program.cs
│       ├── wwwroot/
│       │   ├── css/
│       │   │   └── app.css          # Tailwind CSS v4
│       │   └── index.html
│       ├── Layout/
│       │   ├── MainLayout.razor
│       │   ├── Sidebar.razor
│       │   └── Header.razor
│       ├── Components/
│       │   ├── ui/                  # Base UI components
│       │   │   ├── Button.razor
│       │   │   ├── Card.razor
│       │   │   ├── Input.razor
│       │   │   ├── Badge.razor
│       │   │   └── Modal.razor
│       │   ├── charts/
│       │   │   ├── AreaChart.razor
│       │   │   ├── DonutChart.razor
│       │   │   ├── BarChart.razor
│       │   │   ├── LineChart.razor
│       │   │   └── Sparkline.razor
│       │   ├── dashboard/
│       │   │   ├── KpiCard.razor
│       │   │   ├── MonthlyGoals.razor
│       │   │   ├── AppointmentsList.razor
│       │   │   ├── TransactionsTable.razor
│       │   │   └── QuickActions.razor
│       │   └── theme/
│       │       ├── ThemeToggle.razor
│       │       └── AccentPicker.razor
│       ├── Pages/
│       │   ├── Dashboard.razor
│       │   └── ...
│       ├── Styles/
│       │   └── theme.css            # OKLCh design tokens
│       └── _Imports.razor
└── tests/
    └── ApexBlazorClone.Tests/
        └── Playwright/
            └── Tests/
                ├── ThemeToggleTests.cs
                ├── AccentColorTests.cs
                ├── SidebarTests.cs
                ├── CommandPaletteTests.cs
                ├── KpiCardTests.cs
                ├── ChartTests.cs
                └── DashboardTests.cs
```

## Implementation Order

### Phase 1: Foundation

1. **Scaffold Project**
   - Criar Blazor WebAssembly project com dotnet CLI
   - Configurar Tailwind CSS v4
   - Configurar packages (Blazor-ApexCharts, Phosphor Icons, BlazorSortable)

2. **Design System**
   - Criar theme.css com OKLCh tokens
   - Configurar Inter font
   - Definir CSS variables para light/dark mode

3. **Layout Components**
   - MainLayout.razor
   - Sidebar.razor (colapsável)
   - Header.razor (sticky)

4. **Theme System**
   - ThemeToggle.razor
   - Persistência localStorage
   - Transição suave

5. **Accent Colors**
   - AccentPicker.razor
   - 6 presets
   - Persistência localStorage

6. **Command Palette**
   - Modal.razor
   - Search input
   - Resultados e navegação por teclado

### Phase 2: Dashboard Home

7. **UI Components Base**
   - Button.razor, Card.razor, Input.razor, Badge.razor

8. **KPI Cards**
   - KpiCard.razor com sparkline
   - 4 cards: Tasks, Projects, Revenue, Customers

9. **Charts**
   - AreaChart.razor com gradient
   - DonutChart.razor
   - Sparkline.razor

10. **Dashboard Sections**
    - MonthlyGoals.razor
    - AppointmentsList.razor
    - TransactionsTable.razor
    - QuickActions.razor

11. **Dashboard Page**
    - Dashboard.razor com todos os componentes
    - Layout responsivo

## Success Criteria

### Phase 1
- [ ] Projeto Blazor WebAssembly criado e buildando
- [ ] Tailwind CSS v4 funcionando
- [ ] Design system OKLCh implementado
- [ ] Sidebar colapsável funcionando
- [ ] Header sticky funcionando
- [ ] Theme toggle dark/light funcionando
- [ ] Accent color presets funcionando (6 cores)
- [ ] Command palette abre com Ctrl+K
- [ ] Nenhum erro no console
- [ ] Build passa com 0 warnings

### Phase 2
- [ ] KPI cards renderizando com sparklines
- [ ] Area chart com gradient funcionando
- [ ] Donut chart funcionando
- [ ] Monthly goals com progress bars
- [ ] Appointments list renderizando
- [ ] Transactions table renderizando
- [ ] Quick actions grid funcionando
- [ ] Dashboard responsivo
- [ ] Testes E2E passando

## Testes E2E

### Phase 1 Tests
- Theme toggle muda tema e persiste
- Accent color muda cor e persiste
- Sidebar collapsa e expande
- Command palette abre com Ctrl+K e navega

### Phase 2 Tests
- KPI cards renderizam com dados
- Charts renderizam sem erros
- Dashboard é responsivo em mobile/tablet/desktop

## References

- Apex Demo: https://demo.dashboardpack.com/apex-blazor/
- Tailwind CSS v4: https://tailwindcss.com/
- Blazor-ApexCharts: https://github.com/apexcharts/Blazor-ApexCharts
- Phosphor Icons: https://phosphoricons.com/
- Playwright: https://playwright.dev/dotnet/