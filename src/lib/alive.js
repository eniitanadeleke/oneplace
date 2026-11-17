/* Interaction layer: things that respond to the visitor.
   - photos reveal once as they scroll into view
   - header photos drift slightly slower than the page
   - tap a photo to view it full screen (swipe / arrows / Esc)
   - arrows for the swipeable space cards
   Everything is skipped for visitors who ask for reduced motion,
   and nothing here changes the page's text. */

const reduce = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const svg = (d) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON = {
  prev: svg('<path d="m15 18-6-6 6-6"/>'),
  next: svg('<path d="m9 18 6-6-6-6"/>'),
  close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
};

/* ---------- 1. reveal photos as they arrive ---------- */
function reveals(root) {
  if (reduce()) return () => {};
  const targets = Array.from(root.querySelectorAll(".photo, .tile, .lmedia, .card .cmedia, .feature .photo"));
  const fold = window.innerHeight * 0.92;
  let pending = targets.filter((el) => {
    const r = el.getBoundingClientRect();
    if (r.height && r.top < fold) return false; // already on screen: leave as is
    el.classList.add("rv");
    return true;
  });
  let ticking = false;
  const check = () => {
    ticking = false;
    const line = window.innerHeight * 0.9;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.height === 0 && r.width === 0) return true;          // hidden by a filter for now
      if (r.top < line && r.bottom > 0) { el.classList.add("in"); return false; }
      return true;
    });
    if (!pending.length) stop();
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
  const timer = setInterval(onScroll, 350); // also catches cards revealed by filtering or swiping
  const stop = () => { clearInterval(timer); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); root.removeEventListener("scroll", onScroll, true); };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  root.addEventListener("scroll", onScroll, { capture: true, passive: true });
  check();
  return stop;
}

/* ---------- 2. header photo drift ---------- */
function drift(root) {
  if (reduce()) return () => {};
  const imgs = Array.from(root.querySelectorAll(".phero-media img"));
  if (!imgs.length) return () => {};
  imgs.forEach((i) => i.classList.add("drift"));
  let ticking = false;
  const update = () => {
    ticking = false;
    imgs.forEach((img) => {
      const box = img.parentElement.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      const progress = (window.innerHeight - box.top) / (window.innerHeight + box.height); // 0..1
      img.style.transform = `translate3d(0, ${(progress - 0.5) * -9}%, 0) scale(1.14)`;
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
}

/* ---------- 3. full-screen photo viewer ---------- */
function viewer(root) {
  const imgs = Array.from(root.querySelectorAll(".lmedia img, .card .cmedia img, .feature .photo img, .split .photo img, .media-split .photo img"));
  if (!imgs.length) return () => {};
  const captionFor = (img) => {
    const box = img.closest(".listing, .card, .feature, .split, .media-split, section");
    return box?.querySelector("h4, h2")?.textContent.trim() || img.alt || "";
  };

  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Photo viewer");
  box.hidden = true;
  box.innerHTML = `
    <button type="button" class="lb-close" aria-label="Close">${ICON.close}</button>
    <button type="button" class="lb-nav lb-prev" aria-label="Previous photo">${ICON.prev}</button>
    <figure class="lb-fig"><img alt=""/><figcaption><span class="lb-cap"></span><span class="lb-count"></span></figcaption></figure>
    <button type="button" class="lb-nav lb-next" aria-label="Next photo">${ICON.next}</button>`;
  document.body.appendChild(box);
  const pic = box.querySelector(".lb-fig img");
  const cap = box.querySelector(".lb-cap");
  const count = box.querySelector(".lb-count");
  let index = 0, lastFocus = null;

  const show = (i, dir = 0) => {
    index = (i + imgs.length) % imgs.length;
    const src = imgs[index];
    pic.src = src.currentSrc || src.src;
    pic.alt = src.alt || "";
    cap.textContent = captionFor(src);
    count.textContent = `${index + 1} / ${imgs.length}`;
    if (!reduce() && dir) pic.animate([{ opacity: 0, transform: `translateX(${dir * 40}px)` }, { opacity: 1, transform: "none" }], { duration: 260, easing: "cubic-bezier(.2,.7,.3,1)" });
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.classList.add("lb-open");
    requestAnimationFrame(() => box.classList.add("on"));
    box.querySelector(".lb-close").focus({ preventScroll: true });
  };
  const close = () => {
    box.classList.remove("on");
    document.body.classList.remove("lb-open");
    setTimeout(() => { box.hidden = true; }, reduce() ? 0 : 200);
    lastFocus?.focus?.({ preventScroll: true });
  };

  imgs.forEach((img, i) => {
    img.classList.add("zoomable");
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.dataset.lb = i;
  });
  const onRootClick = (e) => {
    const img = e.target.closest("img.zoomable");
    if (!img || !root.contains(img)) return;
    e.preventDefault();
    open(Number(img.dataset.lb));
  };
  const onRootKey = (e) => {
    const img = e.target.closest?.("img.zoomable");
    if (img && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(Number(img.dataset.lb)); }
  };
  const onBoxClick = (e) => {
    if (e.target.closest(".lb-close") || e.target === box) return close();
    if (e.target.closest(".lb-prev")) return show(index - 1, -1);
    if (e.target.closest(".lb-next")) return show(index + 1, 1);
  };
  const onKey = (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(index - 1, -1);
    else if (e.key === "ArrowRight") show(index + 1, 1);
    else if (e.key === "Tab") { // keep focus inside the viewer
      const f = Array.from(box.querySelectorAll("button"));
      const at = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(at + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  };
  let startX = null;
  const onDown = (e) => { startX = e.clientX; };
  const onUp = (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX; startX = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  };

  root.addEventListener("click", onRootClick);
  root.addEventListener("keydown", onRootKey);
  box.addEventListener("click", onBoxClick);
  box.addEventListener("pointerdown", onDown);
  box.addEventListener("pointerup", onUp);
  window.addEventListener("keydown", onKey);
  return () => {
    root.removeEventListener("click", onRootClick);
    root.removeEventListener("keydown", onRootKey);
    window.removeEventListener("keydown", onKey);
    document.body.classList.remove("lb-open");
    box.remove();
  };
}

/* ---------- 4. arrows for swipeable cards ---------- */
function carouselArrows(root) {
  const cleanups = [];
  root.querySelectorAll("[data-dots-for]").forEach((dots) => {
    const track = root.querySelector(dots.dataset.dotsFor);
    if (!track || dots.querySelector(".car-arrows")) return;
    const wrap = document.createElement("div");
    wrap.className = "car-arrows";
    wrap.innerHTML = `<button type="button" class="car-btn" data-dir="-1" aria-label="Previous">${ICON.prev}</button><button type="button" class="car-btn" data-dir="1" aria-label="Next">${ICON.next}</button>`;
    dots.appendChild(wrap);
    const step = () => {
      const [a, b] = track.children;
      return b ? b.offsetLeft - a.offsetLeft : track.clientWidth;
    };
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      wrap.children[0].disabled = track.scrollLeft <= 2;
      wrap.children[1].disabled = track.scrollLeft >= max;
    };
    const onClick = (e) => {
      const btn = e.target.closest(".car-btn");
      if (!btn) return;
      track.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: reduce() ? "auto" : "smooth" });
    };
    wrap.addEventListener("click", onClick);
    track.addEventListener("scroll", sync, { passive: true });
    sync();
    cleanups.push(() => { track.removeEventListener("scroll", sync); wrap.remove(); });
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ---------- 5. smooth re-arrangement when listings are filtered ---------- */
export function flip(elements, change) {
  if (reduce() || !elements.length || !Element.prototype.animate) { change(); return; }
  const before = new Map();
  elements.forEach((el) => { if (el.style.display !== "none") before.set(el, el.getBoundingClientRect()); });
  change();
  elements.forEach((el) => {
    if (el.style.display === "none") return;
    const now = el.getBoundingClientRect();
    const was = before.get(el);
    if (was) {
      const dx = was.left - now.left, dy = was.top - now.top;
      if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)" });
    } else {
      el.animate([{ opacity: 0, transform: "scale(.97)" }, { opacity: 1, transform: "none" }], { duration: 360, easing: "ease-out" });
    }
  });
}

export function enhance(root) {
  const parts = [reveals(root), drift(root), viewer(root), carouselArrows(root)];
  return () => parts.forEach((fn) => fn());
}
