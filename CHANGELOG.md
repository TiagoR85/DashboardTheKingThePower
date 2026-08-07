# Changelog — DashboardTheKingThePower

> Append-only. Adicione entradas no topo (abaixo de "Unreleased").
> Não edite entradas antigas — apenas adicione correções ou esclarecimentos.

---

## [2026-08-07] — v0.5 All Pages Complete

### Adicionado
- **eCommerce Page** — Product grid, category filters, shopping cart modal, sort options, discount badges
- **CRM Page** — Contacts table with CRUD, sales pipeline board with deal stages, KPI cards
- **Charts Page** — Line, Area, Bar, Donut, Mixed, Radar, Pie, Radial Bar, Heatmap charts
- **SaaS Page** — MRR metrics, subscription plans, feature usage, revenue growth chart, recent signups
- **Sidebar Navigation** — Restructured with 4 sections (Overview, Apps, Commerce, Business)
- **eCommerce Nav Link** — Added to Commerce section

### Modificado
- **Sidebar** — Added Charts, eCommerce, CRM, SaaS links
- **Build fixes** — Fixed Razor syntax errors (Aggregate, char literals, FillType enum)

## [2026-08-07] — v0.4 SPA Routing Fix

### Adicionado
- **Analytics Page** — Revenue charts (bar), traffic sources (donut), user activity (line), conversion funnel
- **Calendar Page** — Monthly/weekly/daily views, event CRUD modal, color-coded events
- **Kanban Board** — Columns (To Do, In Progress, Review, Done), task CRUD, priority badges, assignee avatars
- **Orders Page** — Placeholder page
- **Products Page** — Placeholder page
- **Active Nav Highlighting** — Sidebar uses NavigationManager to highlight current page
- **Sidebar Restructure** — Sections: Overview (Dashboard, Analytics), Apps (Calendar, Kanban), Commerce (Orders, Products)

### Modificado
- **Sidebar** — Removed dead links (eCommerce, CRM, SaaS, Charts), added Calendar and Kanban
- **Commerce section** — Always visible (even when collapsed)

### Removido
- **Counter.razor** — Unused Blazor default page
- **Weather.razor** — Unused Blazor default page

---

## [2026-08-06] — v0.3 Phase 1+2 Concluído

### Adicionado
- **Repositório GitHub** — Criado e configurado
- **Blazor WebAssembly** — Projeto scaffolded com .NET 10
- **Tailwind CSS v4** — Configurado com OKLCh tokens
- **Layout** — Sidebar (260px collapsible), Header (56px sticky), Content (max-width 1400px)
- **Theme System** — Dark/Light toggle com persistência localStorage
- **Accent Colors** — 6 presets (emerald, blue, violet, rose, orange, slate)
- **Command Palette** — Ctrl+K shortcut
- **UI Components** — Button, Card, Badge, Modal
- **KPI Cards** — 4 cards com sparklines
- **Area Chart** — Com gradient e tabs (Monthly/Weekly/Daily)
- **Donut Chart** — Top Services
- **Dashboard Sections** — MonthlyGoals, AppointmentsList, TransactionsTable, QuickActions
- **Deploy** — GitHub Pages via GitHub Actions
- **E2E Tests** — Playwright NUnit (7 testes)
- **Collapsible Sidebar** — 260px ↔ 72px com animação
- **Mobile Responsive** — Bottom nav bar, overlay sidebar
- **Inter Font** — Google Fonts

## [2026-08-06] — v0.2 Planejamento Concluído

### Adicionado
- **DESIGN.md** — Design system completo conforme skill frontend-design-deslop
- **Plano de Implementação** — 15 tasks detalhadas com código completo
- **Skills de Frontend** — Referenciadas no superpowers/index.yml

### Modificado
- **STATUS.md** — Atualizado com status do planejamento
- **index.yml** — Adicionadas referências a design-taste-frontend e frontend-design-deslop

---

## [2026-08-06] — v0.1 Início do Projeto

### Adicionado
- **AGENTS.md** — Instruções para o agente com estratégia de context handoff
- **STATUS.md** — Snapshot inicial do projeto
- **DECISIONS.md** — Decisões arquiteturais iniciais
- **CHANGELOG.md** — Este arquivo
- **Spec completo** — `../AssistentePessoal/docs/superpowers/specs/2026-08-06-apex-blazor-clone-design.md`
