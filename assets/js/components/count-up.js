// Animated counter
export function initCountUp() {
  const counters = document.querySelectorAll('[data-count-to]');
  if (counters.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.countTo, 10);
      const duration = parseInt(el.dataset.countDuration, 10) || 2000;
      const suffix = el.dataset.countSuffix || '';
      const prefix = el.dataset.countPrefix || '';

      if (prefersReducedMotion) {
        el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
        observer.unobserve(el);
        return;
      }

      let start = 0;
      const step = Math.ceil(target / (duration / 16));
      const update = () => {
        start += step;
        if (start >= target) {
          el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          observer.unobserve(el);
          return;
        }
        el.textContent = `${prefix}${start.toLocaleString()}${suffix}`;
        requestAnimationFrame(update);
      };
      update();
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}
