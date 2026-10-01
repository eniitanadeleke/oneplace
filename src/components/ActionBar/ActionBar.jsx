import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { contact } from "../../lib/contact";
import "./ActionBar.css";

/* Sticky quick actions for phones: call, WhatsApp, enquire. */
export default function ActionBar(){
  const { pathname } = useLocation();
  return (
    <div className="action-bar" role="region" aria-label="Quick contact">
      <a className="ab-icon" href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}><Phone size={19} strokeWidth={1.8}/></a>
      <a className="ab-btn ghost" href={contact.whatsappHref} target="_blank" rel="noopener"><MessageCircle size={17} strokeWidth={1.8}/>WhatsApp</a>
      {pathname !== "/enquire" && <Link className="ab-btn brass" to="/enquire">Enquire <ArrowRight size={16}/></Link>}
    </div>
  );
}
