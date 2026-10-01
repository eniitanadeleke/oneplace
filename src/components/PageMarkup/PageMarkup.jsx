import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PageMarkup.css";

const SAVED_KEY = "op-saved-spaces";
const readSaved = () => { try { return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]"); } catch { return []; } };
const writeSaved = (list) => { try { localStorage.setItem(SAVED_KEY, JSON.stringify(list)); } catch { /* storage unavailable */ } };
const reduceMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function PageMarkup({ html }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(location.search);
  searchRef.current = location.search;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanups = [];

    /* ---------- listing filters (also driven by ?city=&type= in the URL) ---------- */
    const params = new URLSearchParams(searchRef.current);
    const filterState = { city: params.get("city") || "all", type: params.get("type") || "all" };
    const applyFilters = (animate) => {
      Object.entries(filterState).forEach(([group, value]) => {
        const chips = root.querySelectorAll(`.chip[data-filter="${group}"]`);
        if (!chips.length) return;
        const match = Array.from(chips).some(c => c.dataset.value === value);
        if (!match) filterState[group] = "all";
        chips.forEach(c => {
          const on = c.dataset.value === filterState[group];
          c.classList.toggle("on", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
      let shown = 0;
      root.querySelectorAll(".listing").forEach(listing => {
        const okCity = filterState.city === "all" || listing.dataset.city === filterState.city;
        const okType = filterState.type === "all" || listing.dataset.type === filterState.type;
        const visible = okCity && okType;
        listing.style.display = visible ? "" : "none";
        if (visible) {
          shown += 1;
          if (animate) { listing.classList.remove("pop"); void listing.offsetWidth; listing.classList.add("pop"); }
        }
      });
      const empty = root.querySelector("#emptyState");
      if (empty) empty.style.display = shown === 0 ? "" : "none";
    };
    if (root.querySelector(".chip[data-filter]")) applyFilters(false);

    /* ---------- saved spaces ---------- */
    const syncSaved = () => {
      const saved = readSaved();
      root.querySelectorAll(".save[data-id]").forEach(b => b.setAttribute("aria-pressed", saved.includes(b.dataset.id) ? "true" : "false"));
    };
    syncSaved();

    /* ---------- clicks ---------- */
    const onClick = (event) => {
      // save toggle
      const save = event.target.closest(".save[data-id]");
      if (save) {
        event.preventDefault();
        const id = save.dataset.id;
        const saved = readSaved();
        const next = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id];
        writeSaved(next);
        save.setAttribute("aria-pressed", next.includes(id) ? "true" : "false");
        save.classList.remove("bump"); void save.offsetWidth; save.classList.add("bump");
        return;
      }

      // filter chips
      const chip = event.target.closest(".chip[data-filter]");
      if (chip) {
        filterState[chip.dataset.filter] = chip.dataset.value;
        applyFilters(true);
        const q = new URLSearchParams();
        if (filterState.city !== "all") q.set("city", filterState.city);
        if (filterState.type !== "all") q.set("type", filterState.type);
        const qs = q.toString();
        navigate({ search: qs ? `?${qs}` : "" }, { replace: true, preventScrollReset: true });
        chip.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion() ? "auto" : "smooth" });
        return;
      }

      // pick a room / studio from a card and jump to the booking form
      const pick = event.target.closest("[data-pick]");
      if (pick && root.contains(pick)) {
        event.preventDefault();
        const select = root.querySelector(`#${pick.dataset.pick}`);
        if (select) {
          select.value = pick.dataset.value;
          const field = select.closest(".field");
          field?.classList.remove("flash"); void field?.offsetWidth; field?.classList.add("flash");
        }
        const target = root.querySelector(pick.getAttribute("href") || "");
        target?.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
        return;
      }

      // in-page anchors (section nav)
      const anchor = event.target.closest("a[href]");
      if (!anchor || !root.contains(anchor)) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) {
        event.preventDefault();
        root.querySelector(href)?.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
        return;
      }
      if (href.startsWith("/")) {
        event.preventDefault();
        navigate(href);
      }
    };

    /* ---------- forms ---------- */
    const onSubmit = (event) => {
      const finder = event.target.closest("form.finder");
      if (finder) {
        event.preventDefault();
        const fd = new FormData(finder);
        const q = new URLSearchParams();
        if (fd.get("city") && fd.get("city") !== "all") q.set("city", fd.get("city"));
        if (fd.get("type") && fd.get("type") !== "all") q.set("type", fd.get("type"));
        const qs = q.toString();
        navigate(`/spaces${qs ? `?${qs}` : ""}`);
        return;
      }
      const form = event.target.closest("form.js-form");
      if (!form) return;
      event.preventDefault();
      const wrap = form.parentElement;
      const done = wrap?.querySelector(".form-done");
      form.style.display = "none";
      if (done) {
        done.classList.add("on");
        done.setAttribute("tabindex", "-1");
        done.focus({ preventScroll: true });
        wrap.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "center" });
      }
    };

    // no booking dates in the past
    const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    root.querySelectorAll('input[type="date"]').forEach(i => { i.min = today.toISOString().slice(0, 10); });

    /* ---------- count-up figures ---------- */
    const counters = root.querySelectorAll("[data-count]");
    if (counters.length && "IntersectionObserver" in window) {
      const fmt = new Intl.NumberFormat("en-GB");
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const el = entry.target;
          const end = Number(el.dataset.count);
          if (reduceMotion()) { el.textContent = fmt.format(end); return; }
          const start = performance.now(), dur = 1400;
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            el.textContent = fmt.format(Math.round(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.1 });
      counters.forEach(el => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- section nav highlight ---------- */
    const subLinks = Array.from(root.querySelectorAll(".subnav a[href^='#']"));
    if (subLinks.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          subLinks.forEach(a => {
            const on = a.getAttribute("href") === `#${entry.target.id}`;
            a.classList.toggle("on", on);
            if (on) a.scrollIntoView({ block: "nearest", inline: "center" });
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      subLinks.forEach(a => { const s = root.querySelector(a.getAttribute("href")); if (s) io.observe(s); });
      cleanups.push(() => io.disconnect());
    }

    /* ---------- swipe position dots for tile carousels ---------- */
    root.querySelectorAll("[data-dots-for]").forEach(dots => {
      const track = root.querySelector(dots.dataset.dotsFor);
      if (!track) return;
      const n = track.children.length;
      dots.innerHTML = Array.from({ length: n }, () => "<i></i>").join("");
      const update = () => {
        const w = track.firstElementChild?.getBoundingClientRect().width || 1;
        const idx = Math.min(n - 1, Math.round(track.scrollLeft / (w + 14)));
        dots.querySelectorAll("i").forEach((d, i) => d.classList.toggle("on", i === idx));
      };
      update();
      track.addEventListener("scroll", update, { passive: true });
      cleanups.push(() => track.removeEventListener("scroll", update));
    });

    root.addEventListener("click", onClick);
    root.addEventListener("submit", onSubmit);
    return () => {
      root.removeEventListener("click", onClick);
      root.removeEventListener("submit", onSubmit);
      cleanups.forEach(fn => fn());
    };
  }, [navigate, html]);

  return <div ref={ref} className="page-markup" dangerouslySetInnerHTML={{ __html: html }} />;
}
