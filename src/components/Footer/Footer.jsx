import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../SocialIcons/SocialIcons";
import logo from "../../assets/one-place-logo-clean.png";
import { contact, mailto } from "../../lib/contact";
import "./Footer.css";

export default function Footer(){return <footer className="site">
  <div className="footer-watermark" aria-hidden="true"><img src={logo} alt="" /></div>
  <div className="shell footer-content">
    <div className="fcols">
      <div className="fbrand"><h5>One Place Properties Ltd</h5><p>Registered office to supply</p><p>RC number to supply</p></div>
      <div><h5>Spaces</h5><Link to="/spaces">Spaces available</Link><Link to="/appointments">The Appointments</Link><Link to="/studios">One Place Studios</Link><Link to="/partner">Partner with us</Link></div>
      <div><h5>Company</h5><Link to="/about">About</Link><Link to="/what-we-build">What we build</Link><Link to="/enquire">Enquire</Link></div>
      <div><h5>Reach us</h5><a href={mailto()} className="icon-link"><Mail size={15}/>Email</a><a href={contact.instagramHref} target="_blank" rel="noopener" className="icon-link"><InstagramIcon size={15}/>Instagram</a><a href={contact.facebookHref} target="_blank" rel="noopener" className="icon-link"><FacebookIcon size={15}/>Facebook</a></div>
    </div>
    <div className="fsign"><span className="tag">One Place in your city.</span><span className="small">© 2026 One Place Properties Ltd <Link to="/enquire">Privacy</Link><Link to="/enquire">Terms</Link><Link to="/enquire">Cookies</Link></span></div>
  </div>
</footer>}
