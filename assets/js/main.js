// DeStatic Main
// ──────────────────

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
  initSmoothScroll();
});

// Theme toggle
function initThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const stored = localStorage.getItem('DeStatic-theme') || 'system';

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('DeStatic-theme', theme);
    const icon = toggle?.querySelector('.theme-icon');
    if (!icon) return;
    if (theme === 'dark') icon.textContent = '☀️';
    else if (theme === 'light') icon.textContent = '🌙';
    else icon.textContent = '💻';
  };

  applyTheme(stored);

  toggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
    applyTheme(next);
  });
}

// Mobile menu
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.header-nav');
  const links = nav?.querySelectorAll('a');

  btn?.addEventListener('click', () => {
    nav?.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav?.classList.contains('open'));
  });

  links?.forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header?.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Scroll reveal animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.transitionDelay = `${delay}ms`;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
