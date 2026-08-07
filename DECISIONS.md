# Decisões Arquiteturais — DashboardTheKingThePower

> Append-only. Adicione entradas no topo. Não edite entradas antigas.

---

## [2026-08-06] — Decisões Iniciais

### Tech Stack

| Decisão | Opção Escolhida | Alternativas | Motivo |
|---------|-----------------|--------------|--------|
| Framework | Blazor WebAssembly (.NET 10) | Blazor Server, MAUI | WASM é estático, deploy simples, sem servidor |
| Styling | Tailwind CSS v4 | Bootstrap, MudBlazor | Match com Apex demo original |
| Charts | ApexCharts (Blazor-ApexCharts) | MudBlazor Charts, Plotly | ApexCharts é o usado no demo original |
| Icons | Phosphor Icons | FontAwesome, Material Icons | Leve, moderno, boa variedade |
| Drag-and-Drop | SortableJS (BlazorSortable) | None | Kanban precisa de DnD |

### Design System

| Decisão | Opção Escolhida | Alternativas | Motivo |
|---------|-----------------|--------------|--------|
| Color System | OKLCh | HSL, RGB | Apex demo usa OKLCh, melhor perceptual |
| Theme | Dark/Light toggle | Dark only | Match com Apex demo |
| Accent Colors | 6 presets (emerald, blue, violet, rose, orange, slate) | Fixed color | Match com Apex demo |
| Font | Inter | System font | Match com Apex demo |
| Border Radius | Variable (0.5rem base) | Fixed | Match com Apex demo |

### Layout

| Decisão | Opção Escolhida | Alternativas | Motivo |
|---------|-----------------|--------------|--------|
| Sidebar | 260px, collapsible | Fixed, drawer | Match com Apex demo |
| Header | Sticky, 56px | Static, fixed | Match com Apex demo |
| Content | Max-width 1400px, centered | Full-width | Match com Apex demo |

### Build & Deploy

| Decisão | Opção Escolhida | Alternativas | Motivo |
|---------|-----------------|--------------|--------|
| Build | Static WebAssembly | Server-side rendering | Match com Apex demo, deploy simples |
| Hosting | Static host (GitHub Pages, Vercel, etc.) | IIS, Kestrel | Zero server cost |
| CI/CD | GitHub Actions | None | Automatizar build e deploy |
