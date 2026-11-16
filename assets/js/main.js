(() => {
  const root = document.documentElement;
  const nav = document.querySelector('[data-nav]');
  const hero = document.querySelector('[data-hero]');
  const bar = document.querySelector('[data-progress]');
  const article = document.querySelector('.post .prose');

  /* Nav state + reading progress, throttled to one update per frame */
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 8);
    if (hero) nav.classList.toggle('nav--over-hero', y < hero.offsetHeight - nav.offsetHeight);
    if (bar && article) {
      const top = article.getBoundingClientRect().top + y;
      const p = (y + window.innerHeight - top) / article.offsetHeight;
      bar.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
    }
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* Mobile menu */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const setMenu = (open) => {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Reveal on scroll, staggered among siblings */
  const items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 70}ms`;
        el.classList.add('is-in');
        el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  /* Horizontal photo strip arrows */
  document.querySelectorAll('[data-strip-target]').forEach((btn) => {
    const strip = document.getElementById(btn.dataset.stripTarget);
    btn.addEventListener('click', () => {
      const dir = btn.hasAttribute('data-strip-next') ? 1 : -1;
      strip.scrollBy({ left: dir * strip.clientWidth * 0.7, behavior: 'smooth' });
    });
  });

  /* Blog archive filter */
  const filter = document.querySelector('[data-filter]');
  if (filter) {
    const years = document.querySelectorAll('[data-year]');
    const count = document.querySelector('[data-filter-count]');
    const empty = document.querySelector('[data-filter-empty]');
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      let total = 0;
      years.forEach((year) => {
        let shown = 0;
        year.querySelectorAll('[data-title]').forEach((li) => {
          const match = !q || li.dataset.title.includes(q);
          li.hidden = !match;
          if (match) shown += 1;
        });
        year.hidden = shown === 0;
        total += shown;
      });
      count.textContent = `${total} ${total === 1 ? 'post' : 'posts'}`;
      empty.hidden = total > 0;
    });
  }

  /* Photo lightbox */
  const dialog = document.querySelector('[data-lightbox]');
  if (dialog && typeof dialog.showModal === 'function') {
    const links = [...document.querySelectorAll('[data-lightbox-item]')];
    const img = dialog.querySelector('img');
    const cap = dialog.querySelector('[data-lightbox-cap]');
    let index = 0;
    const show = (i) => {
      index = (i + links.length) % links.length;
      const link = links[index];
      img.src = link.href;
      img.alt = link.dataset.caption;
      cap.textContent = link.dataset.caption;
    };
    links.forEach((link, i) => link.addEventListener('click', (e) => {
      e.preventDefault();
      show(i);
      dialog.showModal();
    }));
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog || e.target.closest('[data-lightbox-close]')) dialog.close();
      else if (e.target.closest('[data-lightbox-prev]')) show(index - 1);
      else if (e.target.closest('[data-lightbox-next]')) show(index + 1);
    });
    dialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }
})();
