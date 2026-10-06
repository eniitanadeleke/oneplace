import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../assets/one-place-logo-clean.png";
import "./Navbar.css";

const links = [
  ["/about", "About"],
  ["/what-we-build", "What we build"],
  ["/spaces", "Spaces"],
  ["/appointments", "The Appointments"],
  ["/studios", "Studios"],
  ["/partner", "Partner"]
];

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const { pathname } = useLocation();
  const close=()=>setOpen(false);

  useEffect(()=>{ setOpen(false); },[pathname]);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>8);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  useEffect(()=>{
    document.body.classList.toggle("menu-open",open);
    const onKey=(e)=>{ if(e.key==="Escape") setOpen(false); };
    window.addEventListener("keydown",onKey);
    return ()=>{ window.removeEventListener("keydown",onKey); document.body.classList.remove("menu-open"); };
  },[open]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav-in">
        <Link to="/" className="brand-logo" onClick={close} aria-label="One Place Properties home">
          <img src={logo} alt="One Place Properties Limited" />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={()=>setOpen(v=>!v)}
        >
          <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          <span className="nav-toggle-icon" aria-hidden="true">
            {open ? <X size={20} strokeWidth={1.9}/> : <Menu size={20} strokeWidth={1.9}/>}
          </span>
        </button>

        <nav id="main-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          <div className="nav-list">
            {links.map(([to,label],i) => (
              <NavLink key={to} to={to} onClick={close} style={{"--i":i}} className={({isActive})=>isActive?"on":""}>
                <span>{label}</span>
                <ArrowRight className="nav-go" size={18} strokeWidth={1.6} aria-hidden="true"/>
              </NavLink>
            ))}
          </div>
          <div className="nav-cta">
            <Link className="btn sm brass nav-enquire" to="/enquire" onClick={close}>
              Enquire <ArrowRight size={15}/>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
