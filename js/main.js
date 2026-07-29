document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-overlay');
  const scrollTop = document.querySelector('.scroll-top');

  const onScroll = () => {
    if (header) {
      if (window.scrollY > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    if (scrollTop) {
      if (window.scrollY > 480) scrollTop.classList.add('is-visible');
      else scrollTop.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && overlay) {
    const closeMenu = () => {
      overlay.classList.remove('open');
      toggle.classList.remove('is-open');
      document.body.classList.remove('scroll-lock');
    };
    toggle.addEventListener('click', () => {
      overlay.classList.toggle('open');
      toggle.classList.toggle('is-open');
      document.body.classList.toggle('scroll-lock');
    });
    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
