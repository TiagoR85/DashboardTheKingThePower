# DashboardTheKingThePower — Agent Instructions

## Estratégia de Contexto (handoff entre modelos)

Ao iniciar uma sessão, leia **nesta ordem**:
1. `STATUS.md` — snapshot atual do projeto (estado, próximos passos, bloqueios)
2. `DECISIONS.md` — decisões arquiteturais já tomadas (não re-decidir)
3. `CHANGELOG.md` — histórico de mudanças (append-only)

Ao **finalizar uma tarefa**, atualize:
- `STATUS.md` — marque itens como feitos, adicione novos pendentes
- `DECISIONS.md` — se tomou uma decisão não óbvia, adicione entrada
- `CHANGELOG.md` — adicione entrada com data e o que mudou

> Nunca edite entradas antigas no CHANGELOG. Apenas adicione novas.

---

## Project Overview

**DashboardTheKingThePower** é um clone pixel-perfect do Apex Blazor Dashboard (https://demo.dashboardpack.com/apex-blazor/).

O objetivo é recriar do zero um dashboard admin completo com:
- **Blazor WebAssembly** (.NET 10)
- **Tailwind CSS v4** (cores OKLCh)
- **55+ páginas** (dashboard, analytics, calendar, kanban, CRUD, etc.)
- **Dark/Light theme** com toggle
- **Accent color presets** (emerald, blue, violet, rose, orange, slate)
- **Command palette** (Ctrl+K)
- **Charts** (ApexCharts)
- **Drag-and-drop** (Kanban)

## Design Spec

O spec completo está em:
```
D:\Projetos\AssistentePessoal\docs\superpowers\specs\2026-08-06-apex-blazor-clone-design.md
```

**Leia esse arquivo antes de começar a trabalhar.** Ele contém:
- Tech stack completa
- Design system (cores OKLCh, tipografia, espaçamento)
- Layout do sidebar, header e conteúdo
- Estrutura de páginas
- Fases de implementação
- Critérios de sucesso

## Implementation Phases

### Phase 1: Foundation
- [ ] Create Blazor WebAssembly project
- [ ] Configure Tailwind CSS v4
- [ ] Set up design tokens (OKLCh colors, typography, spacing)
- [ ] Build layout components (Sidebar, Header, Content)
- [ ] Implement theme system (dark/light toggle)
- [ ] Implement accent color presets
- [ ] Add search command palette (Ctrl+K)

### Phase 2: Dashboard Home
- [ ] KPI cards with sparklines
- [ ] Area chart with gradient
- [ ] Donut chart
- [ ] Monthly goals with progress bars
- [ ] Appointments list
- [ ] Latest transactions table
- [ ] Quick actions grid

### Phase 3: Essential Pages
- [ ] Analytics page
- [ ] Calendar page
- [ ] Kanban board
- [ ] CRUD pages (Clientes, Serviços, Agendamentos)

### Phase 4: Advanced Components
- [ ] Data tables (sorting, filtering, pagination)
- [ ] Forms with validation
- [ ] Modals and dialogs
- [ ] Toast notifications
- [ ] Responsive design

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | .NET 10 / C# |
| UI | Blazor WebAssembly (Static) |
| Styling | Tailwind CSS v4 |
| Charts | ApexCharts (Blazor-ApexCharts) |
| Icons | Phosphor Icons |
| Drag-and-Drop | SortableJS (BlazorSortable) |
| Build | Static WebAssembly (no server required) |

## Key Files

| File | Description |
|------|-------------|
| `STATUS.md` | Current project state |
| `DECISIONS.md` | Architectural decisions |
| `CHANGELOG.md` | Change history (append-only) |
| `../AssistentePessoal/docs/superpowers/specs/2026-08-06-apex-blazor-clone-design.md` | Full design spec |

## Rules

1. **Read context files first** (STATUS → DECISIONS → CHANGELOG)
2. **Update context files after each task**
3. **Never edit old CHANGELOG entries**
4. **Follow the design spec** for visual consistency
5. **Use Tailwind CSS v4** with OKLCh color tokens
6. **Test on mobile/tablet/desktop** for responsive design
7. **No console errors** allowed
8. **Build must pass** with 0 warnings before commit

## Reference

- Apex Demo: https://demo.dashboardpack.com/apex-blazor/
- Tailwind CSS v4: https://tailwindcss.com/
- Blazor-ApexCharts: https://github.com/apexcharts/Blazor-ApexCharts
- Phosphor Icons: https://phosphoricons.com/
