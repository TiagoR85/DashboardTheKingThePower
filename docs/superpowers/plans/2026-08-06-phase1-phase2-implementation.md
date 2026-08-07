# Phase 1 + 2 Implementation Plan — DashboardTheKingThePower

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect Blazor WebAssembly dashboard clone with Tailwind CSS v4, dark/light themes, accent color presets, and a complete dashboard home page.

**Architecture:** Blazor WebAssembly static app with component-based architecture. Tailwind CSS v4 for styling with OKLCh color tokens. ApexCharts for data visualization. Phosphor Icons for iconography.

**Tech Stack:** .NET 10, C#, Blazor WebAssembly, Tailwind CSS v4, ApexCharts (Blazor-ApexCharts), Phosphor Icons, Playwright E2E tests

## Global Constraints

- Framework: .NET 10 / C# / Blazor WebAssembly (Static)
- Styling: Tailwind CSS v4 with OKLCh colors
- Charts: ApexCharts (Blazor-ApexCharts)
- Icons: Phosphor Icons
- Tests: Playwright E2E
- Build: Static WebAssembly (no server required)
- Theme: Dark/Light toggle with localStorage persistence
- Accent Colors: 6 presets (emerald, blue, violet, rose, orange, slate)
- Layout: Sidebar 260px collapsible, Header 56px sticky, Content max-width 1400px

---

## Task 0: Create GitHub Repository

**Files:**
- Create: `.gitignore`
- Create: `README.md`

**Interfaces:**
- Consumes: None (first task)
- Produces: Private GitHub repository ready for development

- [ ] **Step 1: Create .gitignore**

```gitignore
## Build results
[Dd]ebug/
[Rr]elease/
x64/
x86/
[Aa][Rr][Mm]/
[Aa][Rr][Mm]64/
bld/
[Bb]in/
[Oo]bj/
[Ll]og/
[Ll]ogs/

## Visual Studio
.vs/
*.user
*.suo
*.userosscache
*.sln.docstates

## Rider
.idea/
*.sln.iml

## NuGet
**/[Pp]ackages/*
!**/[Pp]ackages/build/
*.nupkg
**/packages/repositories.config

## Node
node_modules/
npm-debug.log
yarn-error.log

## Tailwind
src/DashboardTheKingThePower/wwwroot/css/app.css

## OS
.DS_Store
Thumbs.db

## Blazor WASM publish
publish/
```

- [ ] **Step 2: Create README.md**

```markdown
# DashboardTheKingThePower

Clone pixel-perfect do Apex Blazor Dashboard.

## Tech Stack

- Blazor WebAssembly (.NET 10)
- Tailwind CSS v4
- ApexCharts
- Phosphor Icons

## Development

```bash
dotnet run --project src/DashboardTheKingThePower
```

## Build

```bash
dotnet publish src/DashboardTheKingThePower -c Release -o publish
```

## Deploy

Deployed to GitHub Pages: `https://tiagoR85.github.io/DashboardTheKingThePower/`
```

- [ ] **Step 3: Initialize git repository**

```bash
cd D:\Projetos\DashboardTheKingThePower
git init
git add .
git commit -m "feat: initial project setup"
```

- [ ] **Step 4: Create GitHub repository (private)**

```bash
gh repo create DashboardTheKingThePower --private --source=. --remote=origin --push
```

Expected: Repository created at `https://github.com/TiagoR85/DashboardTheKingThePower`

- [ ] **Step 5: Verify repository**

```bash
git remote -v
```

Expected: Origin points to GitHub repository

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: create GitHub repository"
```

---

## File Structure

```
DashboardTheKingThePower/
├── DashboardTheKingThePower.sln
├── src/
│   └── DashboardTheKingThePower/
│       ├── Program.cs
│       ├── wwwroot/
│       │   ├── css/
│       │   │   └── app.css              # Tailwind CSS v4 entry
│       │   └── index.html
│       ├── Layout/
│       │   ├── MainLayout.razor
│       │   ├── Sidebar.razor
│       │   └── Header.razor
│       ├── Components/
│       │   ├── ui/
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
│       │   └── Index.razor
│       ├── Styles/
│       │   └── theme.css                # OKLCh design tokens
│       └── _Imports.razor
└── tests/
    └── DashboardTheKingThePower.Tests/
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

---

## Task 1: Scaffold Blazor WebAssembly Project

**Files:**
- Create: `DashboardTheKingThePower.sln`
- Create: `src/DashboardTheKingThePower/Program.cs`
- Create: `src/DashboardTheKingThePower/wwwroot/index.html`
- Create: `src/DashboardTheKingThePower/_Imports.razor`
- Create: `src/DashboardTheKingThePower/Pages/Index.razor`
- Create: `src/DashboardTheKingThePower/Layout/MainLayout.razor`

**Interfaces:**
- Consumes: None (first task)
- Produces: Running Blazor WebAssembly project with default template

- [ ] **Step 1: Create Blazor WebAssembly project**

```bash
cd D:\Projetos\DashboardTheKingThePower
dotnet new blazorwasm -n DashboardTheKingThePower -o src/DashboardTheKingThePower --framework net10.0
```

- [ ] **Step 2: Verify project builds**

```bash
cd src/DashboardTheKingThePower
dotnet build
```

Expected: Build succeeded with 0 warnings

- [ ] **Step 3: Run project to verify it works**

```bash
dotnet run
```

Expected: Browser opens with default Blazor page

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: scaffold Blazor WebAssembly project"
```

---

## Task 2: Configure Tailwind CSS v4

**Files:**
- Create: `src/DashboardTheKingThePower/wwwroot/css/app.css`
- Modify: `src/DashboardTheKingThePower/wwwroot/index.html`
- Create: `src/DashboardTheKingThePower/Styles/theme.css`

**Interfaces:**
- Consumes: Task 1 (Blazor project)
- Produces: Tailwind CSS working with OKLCh tokens

- [ ] **Step 1: Install Tailwind CSS v4**

```bash
cd D:\Projetos\DashboardTheKingThePower\src\DashboardTheKingThePower
npm init -y
npm install -D tailwindcss @tailwindcss/postcss postcss
```

- [ ] **Step 2: Create postcss.config.js**

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

- [ ] **Step 3: Create app.css with Tailwind directives**

```css
@import "tailwindcss";
@import "./theme.css";
```

- [ ] **Step 4: Create theme.css with OKLCh tokens**

```css
:root {
  --primary: oklch(0.55 0.19 160);
  --primary-foreground: oklch(1 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
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
  --radius: 0.5rem;
}

.dark {
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
}
```

- [ ] **Step 5: Update index.html to include CSS**

```html
<link rel="stylesheet" href="css/app.css">
```

- [ ] **Step 6: Verify Tailwind works**

```bash
dotnet build
```

Expected: Build succeeds, Tailwind processes CSS

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: configure Tailwind CSS v4 with OKLCh tokens"
```

---

## Task 3: Build Layout Components

**Files:**
- Create: `src/DashboardTheKingThePower/Layout/Sidebar.razor`
- Create: `src/DashboardTheKingThePower/Layout/Header.razor`
- Modify: `src/DashboardTheKingThePower/Layout/MainLayout.razor`

**Interfaces:**
- Consumes: Task 2 (Tailwind CSS)
- Produces: Working layout with sidebar and header

- [ ] **Step 1: Create Sidebar.razor**

```razor
<aside class="fixed left-0 top-0 h-screen w-[260px] bg-[var(--sidebar)] text-[var(--sidebar-foreground)] flex flex-col transition-all duration-300">
    <div class="p-4 border-b border-[var(--sidebar-border)]">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span class="text-white font-bold">D</span>
            </div>
            <span class="font-semibold text-lg">Dashboard</span>
        </div>
    </div>
    
    <nav class="flex-1 p-4 space-y-1">
        <a href="/" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--sidebar-accent)] text-[var(--sidebar-foreground)]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Dashboard</span>
        </a>
        <a href="/analytics" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--sidebar-accent)] text-[var(--sidebar-foreground)] opacity-80">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <span>Analytics</span>
        </a>
    </nav>
    
    <div class="p-4 border-t border-[var(--sidebar-border)]">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <span class="text-white text-sm font-medium">U</span>
            </div>
            <div class="flex-1">
                <p class="text-sm font-medium">User</p>
                <p class="text-xs opacity-60">user@example.com</p>
            </div>
        </div>
    </div>
</aside>
```

- [ ] **Step 2: Create Header.razor**

```razor
<header class="sticky top-0 z-10 h-14 bg-[var(--background)] border-b border-[var(--border)] flex items-center px-6">
    <button class="p-2 rounded-lg hover:bg-[var(--secondary)]">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    </button>
    
    <div class="flex-1 max-w-md mx-4">
        <div class="relative">
            <input type="text" placeholder="Search..." class="w-full h-9 pl-9 pr-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-50">Ctrl+K</span>
        </div>
    </div>
    
    <div class="flex items-center gap-2">
        <button class="p-2 rounded-lg hover:bg-[var(--secondary)]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
        </button>
    </div>
</header>
```

- [ ] **Step 3: Update MainLayout.razor**

```razor
@inherits LayoutComponentBase

<div class="min-h-screen bg-[var(--background)]">
    <Sidebar />
    <div class="ml-[260px]">
        <Header />
        <main class="p-6 max-w-[1400px] mx-auto">
            @Body
        </main>
    </div>
</div>
```

- [ ] **Step 4: Verify layout renders**

```bash
dotnet run
```

Expected: Sidebar and header visible, content area below

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: build layout components (sidebar, header)"
```

---

## Task 4: Implement Theme System

**Files:**
- Create: `src/DashboardTheKingThePower/Components/theme/ThemeToggle.razor`
- Create: `src/DashboardTheKingThePower/wwwroot/js/theme.js`

**Interfaces:**
- Consumes: Task 3 (Layout)
- Produces: Working dark/light toggle with localStorage persistence

- [ ] **Step 1: Create theme.js**

```javascript
function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

function initTheme() {
    const theme = getTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
    return theme;
}

function toggleTheme() {
    const current = getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
    return next;
}
```

- [ ] **Step 2: Create ThemeToggle.razor**

```razor
@inject IJSRuntime JS

<button @onclick="ToggleTheme" class="p-2 rounded-lg hover:bg-[var(--secondary)]">
    @if (isDark)
    {
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
    }
    else
    {
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
    }
</button>

@code {
    private bool isDark = false;

    protected override async Task OnInitializedAsync()
    {
        isDark = await JS.InvokeAsync<string>("getTheme") == "dark";
    }

    private async Task ToggleTheme()
    {
        var theme = await JS.InvokeAsync<string>("toggleTheme");
        isDark = theme == "dark";
    }
}
```

- [ ] **Step 3: Add theme.js to index.html**

```html
<script src="js/theme.js"></script>
<script>initTheme();</script>
```

- [ ] **Step 4: Add ThemeToggle to Sidebar**

```razor
<div class="p-4 border-t border-[var(--sidebar-border)]">
    <ThemeToggle />
</div>
```

- [ ] **Step 5: Verify theme toggle works**

```bash
dotnet run
```

Expected: Clicking toggle switches between light/dark, persists on reload

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: implement theme system with dark/light toggle"
```

---

## Task 5: Implement Accent Color Presets

**Files:**
- Create: `src/DashboardTheKingThePower/Components/theme/AccentPicker.razor`
- Modify: `src/DashboardTheKingThePower/wwwroot/js/theme.js`

**Interfaces:**
- Consumes: Task 4 (Theme System)
- Produces: Working accent color picker with 6 presets

- [ ] **Step 1: Update theme.js with accent functions**

```javascript
function getAccent() {
    return localStorage.getItem('accent') || 'emerald';
}

function setAccent(accent) {
    localStorage.setItem('accent', accent);
    const accents = {
        emerald: { primary: 'oklch(0.55 0.19 160)', ring: 'oklch(0.55 0.19 160)' },
        blue: { primary: 'oklch(0.55 0.19 240)', ring: 'oklch(0.55 0.19 240)' },
        violet: { primary: 'oklch(0.55 0.19 280)', ring: 'oklch(0.55 0.19 280)' },
        rose: { primary: 'oklch(0.55 0.19 350)', ring: 'oklch(0.55 0.19 350)' },
        orange: { primary: 'oklch(0.55 0.19 50)', ring: 'oklch(0.55 0.19 50)' },
        slate: { primary: 'oklch(0.55 0.02 260)', ring: 'oklch(0.55 0.02 260)' }
    };
    const colors = accents[accent] || accents.emerald;
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--ring', colors.ring);
}

function initAccent() {
    const accent = getAccent();
    setAccent(accent);
    return accent;
}
```

- [ ] **Step 2: Create AccentPicker.razor**

```razor
@inject IJSRuntime JS

<div class="flex gap-2">
    @foreach (var accent in accents)
    {
        <button 
            @onclick="() => SetAccent(accent.Key)"
            class="w-6 h-6 rounded-full border-2 @(currentAccent == accent.Key ? "border-white" : "border-transparent")"
            style="background-color: @accent.Value">
        </button>
    }
</div>

@code {
    private string currentAccent = "emerald";
    
    private Dictionary<string, string> accents = new()
    {
        ["emerald"] = "oklch(0.55 0.19 160)",
        ["blue"] = "oklch(0.55 0.19 240)",
        ["violet"] = "oklch(0.55 0.19 280)",
        ["rose"] = "oklch(0.55 0.19 350)",
        ["orange"] = "oklch(0.55 0.19 50)",
        ["slate"] = "oklch(0.55 0.02 260)"
    };

    protected override async Task OnInitializedAsync()
    {
        currentAccent = await JS.InvokeAsync<string>("getAccent");
    }

    private async Task SetAccent(string accent)
    {
        await JS.InvokeVoidAsync("setAccent", accent);
        currentAccent = accent;
    }
}
```

- [ ] **Step 3: Add AccentPicker to Sidebar**

```razor
<div class="p-4">
    <p class="text-xs opacity-60 mb-2">Accent Color</p>
    <AccentPicker />
</div>
```

- [ ] **Step 4: Verify accent colors work**

```bash
dotnet run
```

Expected: Clicking accent changes primary color, persists on reload

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: implement accent color presets with 6 options"
```

---

## Task 6: Implement Command Palette

**Files:**
- Create: `src/DashboardTheKingThePower/Components/ui/Modal.razor`
- Create: `src/DashboardTheKingThePower/Components/ui/CommandPalette.razor`
- Modify: `src/DashboardTheKingThePower/wwwroot/index.html`

**Interfaces:**
- Consumes: Task 3 (Layout), Task 4 (Theme), Task 5 (Accent)
- Produces: Working command palette with Ctrl+K shortcut

- [ ] **Step 1: Create Modal.razor**

```razor
@if (IsOpen)
{
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50" @onclick="OnClose"></div>
        <div class="relative bg-[var(--background)] rounded-xl shadow-xl max-w-lg w-full mx-4">
            @ChildContent
        </div>
    </div>
}

@code {
    [Parameter] public bool IsOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
```

- [ ] **Step 2: Create CommandPalette.razor**

```razor
@inject IJSRuntime JS

<Modal IsOpen="isOpen" OnClose="Close">
    <div class="p-4">
        <input 
            @ref="searchInput"
            type="text" 
            placeholder="Search pages, actions, settings..." 
            class="w-full h-10 px-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            @oninput="OnSearch">
        
        <div class="mt-4 space-y-1">
            @foreach (var item in filteredItems)
            {
                <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--secondary)] text-left">
                    @item.Icon
                    <span>@item.Label</span>
                </button>
            }
        </div>
    </div>
</Modal>

@code {
    private bool isOpen = false;
    private ElementReference searchInput;
    private string searchTerm = "";
    
    private List<CommandItem> items = new()
    {
        new("Dashboard", "/", "🏠"),
        new("Analytics", "/analytics", "📊"),
        new("Toggle Theme", "theme", "🌓"),
        new("Accent: Emerald", "accent:emerald", "🟢"),
        new("Accent: Blue", "accent:blue", "🔵"),
        new("Accent: Violet", "accent:violet", "🟣"),
        new("Accent: Rose", "accent:rose", "🔴"),
        new("Accent: Orange", "accent:orange", "🟠"),
        new("Accent: Slate", "accent:slate", "⚪")
    };
    
    private List<CommandItem> filteredItems => items
        .Where(i => string.IsNullOrEmpty(searchTerm) || i.Label.Contains(searchTerm, StringComparison.OrdinalIgnoreCase))
        .ToList();

    protected override async Task OnInitializedAsync()
    {
        await JS.InvokeVoidAsync("addKeydownListener", DotNetObjectReference.Create(this));
    }

    [JSInvokable]
    public async Task Open()
    {
        isOpen = true;
        StateHasChanged();
    }

    private void Close()
    {
        isOpen = false;
        searchTerm = "";
    }

    private void OnSearch(ChangeEventArgs e)
    {
        searchTerm = e.Value?.ToString() ?? "";
    }

    private record CommandItem(string Label, string Action, string Icon);
}
```

- [ ] **Step 3: Add keydown listener to index.html**

```javascript
function addKeydownListener(dotNetHelper) {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            dotNetHelper.invokeMethodAsync('Open');
        }
    });
}
```

- [ ] **Step 4: Add CommandPalette to MainLayout**

```razor
<CommandPalette />
```

- [ ] **Step 5: Verify command palette works**

```bash
dotnet run
```

Expected: Ctrl+K opens palette, search filters items, Esc closes

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: implement command palette with Ctrl+K shortcut"
```

---

## Task 7: Build UI Components Base

**Files:**
- Create: `src/DashboardTheKingThePower/Components/ui/Button.razor`
- Create: `src/DashboardTheKingThePower/Components/ui/Card.razor`
- Create: `src/DashboardTheKingThePower/Components/ui/Badge.razor`

**Interfaces:**
- Consumes: Task 2 (Tailwind CSS)
- Produces: Reusable UI components

- [ ] **Step 1: Create Button.razor**

```razor
<button class="@($"inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors {VariantClass} {SizeClass}")" disabled="@Disabled">
    @ChildContent
</button>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Variant { get; set; } = "primary";
    [Parameter] public string Size { get; set; } = "md";
    [Parameter] public bool Disabled { get; set; }
    
    private string VariantClass => Variant switch
    {
        "primary" => "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
        "secondary" => "bg-[var(--secondary)] text-[var(--secondary-foreground)] border border-[var(--border)]",
        "ghost" => "hover:bg-[var(--secondary)]",
        _ => "bg-[var(--primary)] text-[var(--primary-foreground)]"
    };
    
    private string SizeClass => Size switch
    {
        "sm" => "h-8 px-3 text-xs",
        "md" => "h-10 px-4",
        "lg" => "h-12 px-6",
        _ => "h-10 px-4"
    };
}
```

- [ ] **Step 2: Create Card.razor**

```razor
<div class="@($"rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] {Class}")">
    @if (Header != null)
    {
        <div class="px-6 py-4 border-b border-[var(--border)]">
            @Header
        </div>
    }
    <div class="p-6">
        @ChildContent
    </div>
    @if (Footer != null)
    {
        <div class="px-6 py-4 border-t border-[var(--border)]">
            @Footer
        </div>
    }
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public RenderFragment? Header { get; set; }
    [Parameter] public RenderFragment? Footer { get; set; }
    [Parameter] public string Class { get; set; } = "";
}
```

- [ ] **Step 3: Create Badge.razor**

```razor
<span class="@($"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {VariantClass}")">
    @ChildContent
</span>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public string Variant { get; set; } = "default";
    
    private string VariantClass => Variant switch
    {
        "default" => "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
        "success" => "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        "warning" => "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        "error" => "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        _ => "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
    };
}
```

- [ ] **Step 4: Verify components render**

```bash
dotnet run
```

Expected: Components can be used in pages

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: build base UI components (Button, Card, Badge)"
```

---

## Task 8: Build KPI Cards with Sparklines

**Files:**
- Create: `src/DashboardTheKingThePower/Components/dashboard/KpiCard.razor`
- Create: `src/DashboardTheKingThePower/Components/charts/Sparkline.razor`

**Interfaces:**
- Consumes: Task 7 (UI Components), Blazor-ApexCharts
- Produces: Working KPI cards with sparkline charts

- [ ] **Step 1: Install Blazor-ApexCharts**

```bash
cd D:\Projetos\DashboardTheKingThePower\src\DashboardTheKingThePower
dotnet add package Blazor-ApexCharts
```

- [ ] **Step 2: Create Sparkline.razor**

```razor
@using ApexCharts

<ApexChart TItem="SparklineData" Options="options" Height="50">
    <ApexChartSeries TItem="SparklineData" Items="Data" Type="SeriesType.Line" />
</ApexChart>

@code {
    [Parameter] public List<SparklineData> Data { get; set; } = new();
    
    private ApexChartOptions<SparklineData> options = new()
    {
        Chart = new Chart
        {
            Sparkline = new Sparkline { Enabled = true },
            Toolbar = new Toolbar { Show = false }
        },
        Stroke = new Stroke { Curve = Curve.Smooth, Width = 2 },
        Colors = new List<string> { "var(--primary)" }
    };
    
    public record SparklineData(decimal Value);
}
```

- [ ] **Step 3: Create KpiCard.razor**

```razor
<Card Class="relative overflow-hidden">
    <div class="flex items-start justify-between">
        <div>
            <p class="text-sm text-[var(--muted-foreground)]">@Title</p>
            <p class="text-2xl font-bold mt-1">@Value</p>
        </div>
        <div class="p-2 rounded-lg @($"bg-{Color}-100 dark:bg-{Color}-900")">
            @Icon
        </div>
    </div>
    <div class="mt-4">
        <Sparkline Data="@SparklineData" />
    </div>
</Card>

@code {
    [Parameter] public string Title { get; set; } = "";
    [Parameter] public string Value { get; set; } = "";
    [Parameter] public string Color { get; set; } = "green";
    [Parameter] public RenderFragment? Icon { get; set; }
    [Parameter] public List<Sparkline.SparklineData> SparklineData { get; set; } = new();
}
```

- [ ] **Step 4: Add KPI cards to Dashboard page**

```razor
@page "/"
@using DashboardTheKingThePower.Components.dashboard

<h1 class="text-2xl font-bold mb-6">Dashboard</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <KpiCard Title="Today's Tasks" Value="12" Color="green">
        <Icon>✓</Icon>
    </KpiCard>
    <KpiCard Title="Active Projects" Value="8" Color="purple">
        <Icon>📋</Icon>
    </KpiCard>
    <KpiCard Title="Revenue Growth" Value="+24%" Color="orange">
        <Icon>📈</Icon>
    </KpiCard>
    <KpiCard Title="New Customers" Value="156" Color="blue">
        <Icon>👥</Icon>
    </KpiCard>
</div>
```

- [ ] **Step 5: Verify KPI cards render**

```bash
dotnet run
```

Expected: 4 KPI cards with sparklines visible

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: build KPI cards with sparkline charts"
```

---

## Task 9: Build Area Chart

**Files:**
- Create: `src/DashboardTheKingThePower/Components/charts/AreaChart.razor`

**Interfaces:**
- Consumes: Blazor-ApexCharts
- Produces: Working area chart with gradient

- [ ] **Step 1: Create AreaChart.razor**

```razor
@using ApexCharts

<Card>
    <Header>
        <div class="flex items-center justify-between">
            <h3 class="font-semibold">Overview</h3>
            <div class="flex gap-2">
                <button class="px-3 py-1 text-sm rounded-lg @(activeTab == "monthly" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]")" @onclick='() => SetTab("monthly")'>Monthly</button>
                <button class="px-3 py-1 text-sm rounded-lg @(activeTab == "weekly" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]")" @onclick='() => SetTab("weekly")'>Weekly</button>
                <button class="px-3 py-1 text-sm rounded-lg @(activeTab == "daily" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--secondary)]")" @onclick='() => SetTab("daily")'>Daily</button>
            </div>
        </div>
    </Header>
    <ApexChart TItem="ChartData" Options="options" Height="350">
        <ApexChartSeries TItem="ChartData" Items="data" Name="This Month" Type="SeriesType.Area" />
        <ApexChartSeries TItem="ChartData" Items="lastMonthData" Name="Last Month" Type="SeriesType.Area" />
    </ApexChart>
</Card>

@code {
    private string activeTab = "monthly";
    
    private List<ChartData> data = new()
    {
        new("Jan", 30), new("Feb", 40), new("Mar", 35),
        new("Apr", 50), new("May", 49), new("Jun", 60),
        new("Jul", 70), new("Aug", 91), new("Sep", 125)
    };
    
    private List<ChartData> lastMonthData = new()
    {
        new("Jan", 20), new("Feb", 30), new("Mar", 25),
        new("Apr", 40), new("May", 39), new("Jun", 50),
        new("Jul", 60), new("Aug", 81), new("Sep", 115)
    };
    
    private ApexChartOptions<ChartData> options = new()
    {
        Chart = new Chart { Toolbar = new Toolbar { Show = false } },
        Stroke = new Stroke { Curve = Curve.Smooth, Width = 2 },
        Fill = new Fill { Type = FillType.Gradient, Gradient = new FillGradient { ShadeIntensity = 1, OpacityFrom = 0.7, OpacityTo = 0.3 } },
        Colors = new List<string> { "var(--primary)", "var(--muted-foreground)" }
    };
    
    private void SetTab(string tab) { activeTab = tab; }
    
    public record ChartData(string X, decimal Y);
}
```

- [ ] **Step 2: Add to Dashboard page**

```razor
<div class="mt-6">
    <AreaChart />
</div>
```

- [ ] **Step 3: Verify area chart renders**

```bash
dotnet run
```

Expected: Area chart with gradient visible, tabs work

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: build area chart with gradient fill"
```

---

## Task 10: Build Donut Chart

**Files:**
- Create: `src/DashboardTheKingThePower/Components/charts/DonutChart.razor`

**Interfaces:**
- Consumes: Blazor-ApexCharts
- Produces: Working donut chart

- [ ] **Step 1: Create DonutChart.razor**

```razor
@using ApexCharts

<Card>
    <Header>
        <h3 class="font-semibold">Top Services</h3>
    </Header>
    <div class="flex items-center justify-center">
        <ApexChart TItem="DonutData" Options="options" Height="250" Width="250">
            <ApexChartSeries TItem="DonutData" Items="data" Type="SeriesType.Donut" />
        </ApexChart>
    </div>
    <div class="mt-4 space-y-2">
        @foreach (var item in data)
        {
            <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full" style="background-color: @item.Color"></div>
                    <span>@item.Label</span>
                </div>
                <span class="font-medium">@item.Value%</span>
            </div>
        }
    </div>
</Card>

@code {
    private List<DonutData> data = new()
    {
        new("Haircut", 35, "#10b981"),
        new("Coloring", 25, "#3b82f6"),
        new("Styling", 20, "#8b5cf6"),
        new("Treatment", 15, "#f59e0b"),
        new("Other", 5, "#6b7280")
    };
    
    private ApexChartOptions<DonutData> options = new()
    {
        Chart = new Chart { Sparkline = new Sparkline { Enabled = true } },
        PlotOptions = new PlotOptions
        {
            Pie = new PlotOptionsPie
            {
                Donut = new DonutOptions
                {
                    Size = "70%",
                    Labels = new DonutLabels { Show = true, Total = new DonutTotal { Show = true, Label = "Total" } }
                }
            }
        }
    };
    
    public record DonutData(string Label, decimal Value, string Color);
}
```

- [ ] **Step 2: Add to Dashboard page**

```razor
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    <div class="lg:col-span-2">
        <AreaChart />
    </div>
    <div>
        <DonutChart />
    </div>
</div>
```

- [ ] **Step 3: Verify donut chart renders**

```bash
dotnet run
```

Expected: Donut chart with legend visible

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: build donut chart for top services"
```

---

## Task 11: Build Dashboard Sections

**Files:**
- Create: `src/DashboardTheKingThePower/Components/dashboard/MonthlyGoals.razor`
- Create: `src/DashboardTheKingThePower/Components/dashboard/AppointmentsList.razor`
- Create: `src/DashboardTheKingThePower/Components/dashboard/TransactionsTable.razor`
- Create: `src/DashboardTheKingThePower/Components/dashboard/QuickActions.razor`

**Interfaces:**
- Consumes: Task 7 (UI Components)
- Produces: Complete dashboard sections

- [ ] **Step 1: Create MonthlyGoals.razor**

```razor
<Card>
    <Header>
        <h3 class="font-semibold">Monthly Goals</h3>
    </Header>
    <div class="space-y-4">
        @foreach (var goal in goals)
        {
            <div>
                <div class="flex justify-between text-sm mb-1">
                    <span>@goal.Name</span>
                    <span>@goal.Current/@goal.Target</span>
                </div>
                <div class="h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                    <div class="h-full @($"bg-{goal.Color}") rounded-full" style="width: @goal.Percentage%"></div>
                </div>
            </div>
        }
    </div>
</Card>

@code {
    private List<Goal> goals = new()
    {
        new("Revenue", 75000, 100000, "green"),
        new("New Clients", 18, 25, "blue"),
        new("Projects", 12, 15, "purple"),
        new("Tasks", 45, 50, "orange")
    };
    
    private record Goal(string Name, decimal Current, decimal Target, string Color)
    {
        public decimal Percentage => (Current / Target) * 100;
    }
}
```

- [ ] **Step 2: Create AppointmentsList.razor**

```razor
<Card>
    <Header>
        <h3 class="font-semibold">Upcoming Appointments</h3>
    </Header>
    <div class="space-y-3">
        @foreach (var appointment in appointments)
        {
            <div class="flex items-center justify-between p-3 rounded-lg bg-[var(--secondary)]">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-medium">
                        @appointment.ClientInitials
                    </div>
                    <div>
                        <p class="font-medium">@appointment.ClientName</p>
                        <p class="text-sm text-[var(--muted-foreground)]">@appointment.Service</p>
                    </div>
                </div>
                <Badge Variant="@appointment.StatusVariant">@appointment.Status</Badge>
            </div>
        }
    </div>
</Card>

@code {
    private List<Appointment> appointments = new()
    {
        new("John Smith", "JS", "Haircut", "Confirmed", "success"),
        new("Sarah Johnson", "SJ", "Coloring", "Pending", "warning"),
        new("Mike Davis", "MD", "Styling", "Completed", "default")
    };
    
    private record Appointment(string ClientName, string ClientInitials, string Service, string Status, string StatusVariant);
}
```

- [ ] **Step 3: Create TransactionsTable.razor**

```razor
<Card>
    <Header>
        <h3 class="font-semibold">Latest Transactions</h3>
    </Header>
    <table class="w-full">
        <thead>
            <tr class="border-b border-[var(--border)]">
                <th class="text-left py-3 text-sm font-medium text-[var(--muted-foreground)]">Client</th>
                <th class="text-left py-3 text-sm font-medium text-[var(--muted-foreground)]">Service</th>
                <th class="text-left py-3 text-sm font-medium text-[var(--muted-foreground)]">Date</th>
                <th class="text-left py-3 text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                <th class="text-right py-3 text-sm font-medium text-[var(--muted-foreground)]">Amount</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var transaction in transactions)
            {
                <tr class="border-b border-[var(--border)]">
                    <td class="py-3">@transaction.Client</td>
                    <td class="py-3">@transaction.Service</td>
                    <td class="py-3 text-[var(--muted-foreground)]">@transaction.Date</td>
                    <td class="py-3"><Badge Variant="@transaction.StatusVariant">@transaction.Status</Badge></td>
                    <td class="py-3 text-right font-medium">$@transaction.Amount</td>
                </tr>
            }
        </tbody>
    </table>
</Card>

@code {
    private List<Transaction> transactions = new()
    {
        new("John Smith", "Haircut", "2026-08-06", "Completed", "success", 45),
        new("Sarah Johnson", "Coloring", "2026-08-05", "Completed", "success", 120),
        new("Mike Davis", "Styling", "2026-08-05", "Pending", "warning", 85),
        new("Emily Brown", "Treatment", "2026-08-04", "Completed", "success", 95)
    };
    
    private record Transaction(string Client, string Service, string Date, string Status, string StatusVariant, decimal Amount);
}
```

- [ ] **Step 4: Create QuickActions.razor**

```razor
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    @foreach (var action in actions)
    {
        <button class="flex flex-col items-center gap-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--secondary)] transition-colors">
            <span class="text-2xl">@action.Icon</span>
            <span class="text-sm font-medium">@action.Label</span>
        </button>
    }
</div>

@code {
    private List<QuickAction> actions = new()
    {
        new("📅", "New Appointment"),
        new("👤", "Add Client"),
        new("💳", "Process Payment"),
        new("📊", "View Reports")
    };
    
    private record QuickAction(string Icon, string Label);
}
```

- [ ] **Step 5: Add all sections to Dashboard page**

```razor
@page "/"

<h1 class="text-2xl font-bold mb-6">Dashboard</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <KpiCard Title="Today's Tasks" Value="12" Color="green">
        <Icon>✓</Icon>
    </KpiCard>
    <KpiCard Title="Active Projects" Value="8" Color="purple">
        <Icon>📋</Icon>
    </KpiCard>
    <KpiCard Title="Revenue Growth" Value="+24%" Color="orange">
        <Icon>📈</Icon>
    </KpiCard>
    <KpiCard Title="New Customers" Value="156" Color="blue">
        <Icon>👥</Icon>
    </KpiCard>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    <div class="lg:col-span-2">
        <AreaChart />
    </div>
    <div>
        <DonutChart />
    </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    <div>
        <MonthlyGoals />
    </div>
    <div>
        <AppointmentsList />
    </div>
    <div>
        <TransactionsTable />
    </div>
</div>

<div class="mt-6">
    <h3 class="font-semibold mb-4">Quick Actions</h3>
    <QuickActions />
</div>
```

- [ ] **Step 6: Verify dashboard renders completely**

```bash
dotnet run
```

Expected: Full dashboard with all sections visible

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: build complete dashboard sections"
```

---

## Task 12: Write E2E Tests

**Files:**
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/ThemeToggleTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/AccentColorTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/SidebarTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/CommandPaletteTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/KpiCardTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/ChartTests.cs`
- Create: `tests/DashboardTheKingThePower.Tests/Playwright/Tests/DashboardTests.cs`

**Interfaces:**
- Consumes: All previous tasks
- Produces: Complete E2E test suite

- [ ] **Step 1: Install Playwright**

```bash
cd D:\Projetos\DashboardTheKingThePower
dotnet new nunit -n DashboardTheKingThePower.Tests -o tests/DashboardTheKingThePower.Tests
cd tests/DashboardTheKingThePower.Tests
dotnet add package Microsoft.Playwright.NUnit
pwsh -Command "npx playwright install"
```

- [ ] **Step 2: Create ThemeToggleTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class ThemeToggleTests : PageTest
{
    [Test]
    public async Task ThemeToggle_SwitchesTheme()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var initialClass = await Page.EvalOnContentLoaded<string>("document.documentElement.classList.contains('dark')");
        Assert.That(initialClass, Is.False);
        
        await Page.ClickAsync("button:has(svg)");
        
        var isDark = await Page.EvalOnContentLoaded<bool>("document.documentElement.classList.contains('dark')");
        Assert.That(isDark, Is.True);
    }
    
    [Test]
    public async Task ThemeToggle_PersistsOnReload()
    {
        await Page.GotoAsync("http://localhost:5000");
        await Page.ClickAsync("button:has(svg)");
        await Page.ReloadAsync();
        
        var isDark = await Page.EvalOnContentLoaded<bool>("document.documentElement.classList.contains('dark')");
        Assert.That(isDark, Is.True);
    }
}
```

- [ ] **Step 3: Create AccentColorTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class AccentColorTests : PageTest
{
    [Test]
    public async Task AccentColor_ChangesPrimaryColor()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var initialColor = await Page.EvalOnContentLoaded<string>("getComputedStyle(document.documentElement).getPropertyValue('--primary')");
        
        await Page.ClickAsync("button:has-text('🔵')");
        
        var newColor = await Page.EvalOnContentLoaded<string>("getComputedStyle(document.documentElement).getPropertyValue('--primary')");
        
        Assert.That(newColor, Is.Not.EqualTo(initialColor));
    }
}
```

- [ ] **Step 4: Create SidebarTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class SidebarTests : PageTest
{
    [Test]
    public async Task Sidebar_IsVisible()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var sidebar = await Page.QuerySelectorAsync("aside");
        Assert.That(sidebar, Is.Not.Null);
    }
    
    [Test]
    public async Task Sidebar_HasNavigationLinks()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var links = await Page.QuerySelectorAllAsync("aside a");
        Assert.That(links.Count, Is.GreaterThan(0));
    }
}
```

- [ ] **Step 5: Create CommandPaletteTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class CommandPaletteTests : PageTest
{
    [Test]
    public async Task CommandPalette_OpensWithCtrlK()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        await Page.Keyboard.PressAsync("Control+k");
        
        var palette = await Page.QuerySelectorAsync("input[placeholder*='Search']");
        Assert.That(palette, Is.Not.Null);
    }
    
    [Test]
    public async Task CommandPalette_ClosesWithEsc()
    {
        await Page.GotoAsync("http://localhost:5000");
        await Page.Keyboard.PressAsync("Control+k");
        await Page.Keyboard.PressAsync("Escape");
        
        var palette = await Page.QuerySelectorAsync("input[placeholder*='Search']");
        Assert.That(palette, Is.Null);
    }
}
```

- [ ] **Step 6: Create KpiCardTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class KpiCardTests : PageTest
{
    [Test]
    public async Task KpiCards_AreVisible()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var cards = await Page.QuerySelectorAllAsync("text=Today's Tasks");
        Assert.That(cards.Count, Is.GreaterThan(0));
    }
}
```

- [ ] **Step 7: Create ChartTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class ChartTests : PageTest
{
    [Test]
    public async Task AreaChart_Renders()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var chart = await Page.QuerySelectorAsync("text=Overview");
        Assert.That(chart, Is.Not.Null);
    }
    
    [Test]
    public async Task DonutChart_Renders()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var chart = await Page.QuerySelectorAsync("text=Top Services");
        Assert.That(chart, Is.Not.Null);
    }
}
```

- [ ] **Step 8: Create DashboardTests.cs**

```csharp
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace DashboardTheKingThePower.Tests;

[TestFixture]
public class DashboardTests : PageTest
{
    [Test]
    public async Task Dashboard_Loads()
    {
        await Page.GotoAsync("http://localhost:5000");
        
        var title = await Page.TitleAsync();
        Assert.That(title, Does.Contain("Dashboard"));
    }
    
    [Test]
    public async Task Dashboard_IsResponsive()
    {
        await Page.SetViewportSizeAsync(375, 667);
        await Page.GotoAsync("http://localhost:5000");
        
        var content = await Page.QuerySelectorAsync("main");
        Assert.That(content, Is.Not.Null);
    }
}
```

- [ ] **Step 9: Run tests**

```bash
dotnet test
```

Expected: All tests pass

- [ ] **Step 10: Commit**

```bash
git add .
git commit -m "feat: add E2E tests with Playwright"
```

---

## Task 13: Final Verification and Cleanup

**Files:**
- Modify: Various files for cleanup

**Interfaces:**
- Consumes: All tasks
- Produces: Production-ready dashboard

- [ ] **Step 1: Run full build**

```bash
dotnet build
```

Expected: Build succeeds with 0 warnings

- [ ] **Step 2: Run all tests**

```bash
dotnet test
```

Expected: All tests pass

- [ ] **Step 3: Check for console errors**

```bash
# Open browser, check console for errors
```

Expected: No console errors

- [ ] **Step 4: Verify responsive design**

```bash
# Test on mobile, tablet, desktop viewports
```

Expected: Layout adapts correctly

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat: complete Phase 1 + 2 implementation"
```

---

## Task 14: Deploy to GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `src/DashboardTheKingThePower/wwwroot/index.html`

**Interfaces:**
- Consumes: Task 13 (Final Verification)
- Produces: Deployed dashboard on GitHub Pages

- [ ] **Step 1: Create GitHub Actions workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '10.0.x'

      - name: Publish
        run: dotnet publish src/DashboardTheKingThePower -c Release -o publish

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './publish/wwwroot'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Configure base URL for GitHub Pages**

```html
<base href="/DashboardTheKingThePower/" />
```

- [ ] **Step 3: Enable GitHub Pages in repository**

```bash
gh api repos/TiagoR85/DashboardTheKingThePower/pages -X PUT -f build_type=workflow
```

- [ ] **Step 4: Push workflow to trigger deployment**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deployment workflow"
git push
```

- [ ] **Step 5: Verify deployment**

```bash
gh api repos/TiagoR85/DashboardTheKingThePower/pages
```

Expected: Page deployed at `https://tiagoR85.github.io/DashboardTheKingThePower/`

- [ ] **Step 6: Test deployed site**

```bash
# Open browser to https://tiagoR85.github.io/DashboardTheKingThePower/
```

Expected: Dashboard loads correctly, all features work

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-08-06-phase1-phase2-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?