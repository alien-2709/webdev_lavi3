
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('hidden');
    });
}



const path = location.pathname.split('/').pop() || 'f1.html';
document.querySelectorAll('.nav-link').forEach((a) => {
    const isActive = a.getAttribute('href') === path;
    a.classList.toggle('bg-gray-200', isActive);
    a.classList.toggle('text-black', isActive);
    if (isActive) a.setAttribute('aria-current', 'page');
});



const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
const setIcon = () => {
    const dark = document.documentElement.classList.contains('dark');
    themeBtn.textContent = dark ? '☀️' : '🌙';
};
setIcon();
themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    setIcon();
});



const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('hidden', window.scrollY < 400);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const lightboxClose = document.getElementById('lightboxClose');
if (lightbox) {
    document.querySelectorAll('img.lightbox').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            lightboxImg.src = thumb.src;
            lightboxCap.textContent = thumb.alt || thumb.title;
            lightbox.classList.remove('hidden');
        });
    });
    lightboxClose.addEventListener('click', () => lightbox.classList.add('hidden'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.add('hidden'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.add('hidden'); });
}



const driverSearch = document.getElementById('driverSearch');
if (driverSearch) {
    const cards = document.querySelectorAll('.driver-card');
    driverSearch.addEventListener('input', () => {
        const q = driverSearch.value.toLowerCase();
        cards.forEach((c) => {
            const name = (c.getAttribute('data-name') || '').toLowerCase();
            c.classList.toggle('hidden', !name.includes(q));
        });
    });
}


