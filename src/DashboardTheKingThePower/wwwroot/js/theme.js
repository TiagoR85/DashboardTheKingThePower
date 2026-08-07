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

function addKeydownListener(dotNetHelper) {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            dotNetHelper.invokeMethodAsync('Open');
        }
    });
}