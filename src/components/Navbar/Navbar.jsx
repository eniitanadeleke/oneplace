import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/one-place-logo-clean.png";
import "./Navbar.css";

/* Five items: About (link + What we build underneath), Spaces, Book (dropdown),
   Partner with us, and the Enquire button. */
const menu = [
  { label: "About", to: "/about", id: "about", items: [["/what-we-build", "What we build"]] },
  { label: "Spaces", to: "/spaces" },
  { label: "Book", id: "book", items: [["/appointments", "The Appointments"], ["/studios", "Studios"]] },
  { label: "Partner with us", to: "/partner" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);        // phone drawer
  const [group, setGroup] = useState(null);       // open dropdown / phone group
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const close = () => { setOpen(false); setGroup(null); };

  useEffect(() => { setOpen(false); setGroup(null); }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 4);
      // tuck the bar away while scrolling down, bring it back on the way up
      const hide = y > lastY && y > 320 && !document.body.classList.contains("menu-open") && !navRef.current?.contains(document.activeElement);
      if (Math.abs(y - lastY) > 6) { document.body.classList.toggle("nav-hidden", hide); lastY = y; }
      if (y < 80) document.body.classList.remove("nav-hidden");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); document.body.classList.remove("nav-hidden"); };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => { if (e.key === "Escape") { setGroup(null); setOpen(false); } };
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setGroup(null); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const groupActive = (g) => g.to === pathname || g.items.some(([to]) => pathname === to);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "is-open" : ""}`} ref={navRef}>
      <div className="nav-in">
        <Link to="/" className="brand-logo" onClick={close} aria-label="One Place Properties home">
          <img src={logo} alt="One Place Properties Limited" />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(v => !v)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X size={18} strokeWidth={1.8} aria-hidden="true"/> : <Menu size={18} strokeWidth={1.8} aria-hidden="true"/>}
        </button>

        <nav id="main-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          <ul className="nav-list">
            {menu.map((m) => m.items ? (
              <li
                key={m.id}
                className={`nav-group ${group === m.id ? "show" : ""} ${groupActive(m) ? "on" : ""}`}
                onMouseEnter={() => window.matchMedia("(hover: hover) and (min-width: 1024px)").matches && setGroup(m.id)}
                onMouseLeave={() => window.matchMedia("(hover: hover) and (min-width: 1024px)").matches && setGroup(null)}
              >
                {m.to ? (
                  <div className="nav-split">
                    <NavLink to={m.to} end onClick={close} className="nav-top">{m.label}</NavLink>
                    <button
                      type="button"
                      className="nav-chev"
                      aria-expanded={group === m.id}
                      aria-controls={`menu-${m.id}`}
                      aria-label={`More under ${m.label}`}
                      onClick={() => setGroup(g => g === m.id ? null : m.id)}
                    >
                      <ChevronDown className="chev" size={15} strokeWidth={2} aria-hidden="true"/>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="nav-top"
                    aria-expanded={group === m.id}
                    aria-controls={`menu-${m.id}`}
                    onClick={() => setGroup(g => g === m.id ? null : m.id)}
                  >
                    {m.label}<ChevronDown className="chev" size={15} strokeWidth={2} aria-hidden="true"/>
                  </button>
                )}
                <ul className="nav-sub" id={`menu-${m.id}`}>
                  {m.items.map(([to, label]) => (
                    <li key={to}>
                      <NavLink to={to} onClick={close} className={({ isActive }) => isActive ? "on" : ""}>{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={m.to}>
                <NavLink to={m.to} onClick={close} className={({ isActive }) => `nav-top ${isActive ? "on" : ""}`}>{m.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <Link className="btn sm brass nav-enquire" to="/enquire" onClick={close}>Enquire</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
