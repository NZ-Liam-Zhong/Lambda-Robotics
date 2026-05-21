// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 40
    ? 'rgba(248, 252, 251, 0.98)'
    : 'rgba(248, 252, 251, 0.88)';
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
