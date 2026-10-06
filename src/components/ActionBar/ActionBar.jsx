import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { contact } from "../../lib/contact";
import { InstagramIcon, FacebookIcon } from "../SocialIcons/SocialIcons";
import "./ActionBar.css";

/* Sticky quick actions for phones: Instagram, Facebook, enquire. */
export default function ActionBar(){
  const { pathname } = useLocation();
  if (pathname === "/enquire") return null;
  return (
    <div className="action-bar" role="region" aria-label="Quick links">
      <a className="ab-icon" href={contact.instagramHref} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon size={20}/></a>
      <a className="ab-icon" href={contact.facebookHref} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon size={20}/></a>
      <Link className="ab-btn brass" to="/enquire">Enquire <ArrowRight size={16}/></Link>
    </div>
  );
}
