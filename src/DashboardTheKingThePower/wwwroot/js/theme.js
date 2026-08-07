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