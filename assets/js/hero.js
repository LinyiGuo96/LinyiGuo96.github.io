/*
  Hero animation: a ridgeline of time series.
  Each line is trend + seasonal cycle + irregular noise (the decomposition
  behind seasonal adjustment), drawn back-to-front so nearer lines occlude
  farther ones. The pointer (or a slow wandering point on touch devices)
  lifts the lines around it.
*/
(() => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  const hero = canvas.closest('[data-hero]');
  const styles = getComputedStyle(document.documentElement);
  const BG = styles.getPropertyValue('--hero-bg').trim() || '#0a0b0d';
  const ACCENT = styles.getPropertyValue('--accent').trim() || '#ff4a2b';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Smooth 1D value noise with a few octaves
  const SIZE = 256;
  const table = new Float32Array(SIZE);
  for (let i = 0; i < SIZE; i++) table[i] = Math.random() * 2 - 1;
  const noise = (x) => {
    const i = Math.floor(x);
    const f = x - i;
    const u = f * f * (3 - 2 * f);
    const a = table[i & (SIZE - 1)];
    const b = table[(i + 1) & (SIZE - 1)];
    return a + (b - a) * u;
  };
  const fbm = (x) => noise(x) * 0.6 + noise(x * 2.13 + 17.1) * 0.28 + noise(x * 4.37 + 41.7) * 0.12;

  let w = 0;
  let h = 0;
  let lines = [];
  let step = 6;
  let accentIndex = 0;
  let t = 0;
  let last = 0;
  let raf = 0;
  let inView = true;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, lastMove: -1e9 };

  function band() {
    const narrow = w < 640;
    return { top: h * (narrow ? 0.2 : 0.17), bottom: h * (narrow ? 0.58 : 0.64) };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, w < 640 ? 1.5 : 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = w < 640 ? 26 : w < 1100 ? 36 : 46;
    step = w < 640 ? 6 : 5;
    if (lines.length !== count) {
      lines = Array.from({ length: count }, () => ({
        seed: Math.random() * 200,
        cycles: 3 + Math.random() * 5,
        phase: Math.random() * Math.PI * 2,
        amp: 0.65 + Math.random() * 0.7,
      }));
      accentIndex = Math.round(count * 0.6);
    }
    if (pointer.lastMove < 0) wander(true);
    draw();
  }

  function wander(snap) {
    const { top, bottom } = band();
    pointer.tx = w * (0.5 + 0.32 * Math.sin(t * 0.17));
    pointer.ty = top + (bottom - top) * (0.55 + 0.35 * Math.sin(t * 0.23 + 1.3));
    if (snap) { pointer.x = pointer.tx; pointer.y = pointer.ty; }
  }

  function draw() {
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, w, h);

    const n = lines.length;
    const { top, bottom } = band();
    const gap = (bottom - top) / (n - 1);
    const maxAmp = Math.min(h * 0.17, 160);
    const reachX = Math.max(140, w * 0.09);
    const reachY = Math.max(120, h * 0.14);

    for (let i = 0; i < n; i++) {
      const L = lines[i];
      const depth = i / (n - 1); // 0 = far, 1 = near
      const base = top + i * gap;
      const amp = maxAmp * (0.3 + depth * 0.7) * L.amp;
      const dy = (base - pointer.y) / reachY;
      const liftRow = Math.exp(-dy * dy);

      ctx.beginPath();
      for (let x = -step; x <= w + step; x += step) {
        const u = Math.min(1, Math.max(0, x / w));
        const env = 0.12 + 0.88 * Math.pow(Math.sin(Math.PI * u), 2.2);
        const trend = 0.5 + 0.5 * fbm(u * 1.6 + L.seed + t * 0.04);
        const season = 0.5 + 0.5 * Math.sin(u * Math.PI * 2 * L.cycles + L.phase - t * 0.8);
        const irregular = Math.max(0, fbm(u * 16 + L.seed * 3.1 + t * 0.35));
        const dx = (x - pointer.x) / reachX;
        const lift = liftRow * Math.exp(-dx * dx);
        const v = (trend * 0.45 + season * 0.22 + irregular * irregular * 1.4) * env + lift * 0.6;
        const y = base - v * amp;
        if (x === -step) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      // Close well outside the canvas so the outline never shows
      ctx.lineTo(w + step, h + 40);
      ctx.lineTo(-step, h + 40);
      ctx.closePath();
      ctx.fillStyle = BG;
      ctx.fill();

      if (i === accentIndex) {
        ctx.strokeStyle = ACCENT;
        ctx.lineWidth = 1.6;
      } else {
        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.16 + depth * 0.52).toFixed(3)})`;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }
    canvas.classList.add('is-ready');
  }

  const canRun = () => inView && !document.hidden && !reduceMotion.matches;

  function frame(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
    last = now;
    t += dt;
    if (now - pointer.lastMove > 3500) wander(false);
    const ease = 1 - Math.pow(0.95, dt * 60);
    pointer.x += (pointer.tx - pointer.x) * ease;
    pointer.y += (pointer.ty - pointer.y) * ease;
    draw();
    raf = canRun() ? requestAnimationFrame(frame) : 0;
  }

  function schedule() {
    if (raf || !canRun()) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  }

  hero.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    pointer.tx = e.clientX - rect.left;
    pointer.ty = e.clientY - rect.top;
    pointer.lastMove = performance.now();
  });

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    schedule();
  }).observe(hero);
  document.addEventListener('visibilitychange', schedule);
  reduceMotion.addEventListener('change', schedule);
})();
