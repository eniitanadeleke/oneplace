import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "../../assets/one-place-logo-clean.png";
import { contact } from "../../lib/contact";
import "./Footer.css";

export default function Footer(){return <footer className="site">
  <div className="footer-watermark" aria-hidden="true"><img src={logo} alt="" /></div>
  <div className="shell footer-content">
    <div className="fcols">
      <div className="fbrand"><h5>One Place Properties Ltd</h5><p>Registered office to supply</p><p>RC number to supply</p></div>
      <div><h5>Spaces</h5><Link to="/spaces">Spaces available</Link><Link to="/appointments">The Appointments</Link><Link to="/studios">One Place Studios</Link><Link to="/partner">Partner with us</Link></div>
      <div><h5>Company</h5><Link to="/about">About</Link><Link to="/what-we-build">What we build</Link><Link to="/enquire">Enquire</Link></div>
      <div><h5>Reach us</h5><a href={contact.phoneHref} className="icon-link"><Phone size={15}/>0801 234 5678</a><Link to="/enquire" className="icon-link"><Mail size={15}/>Email to supply</Link><a href={contact.whatsappHref} target="_blank" rel="noopener" className="icon-link"><MessageCircle size={15}/>WhatsApp</a><Link to="/enquire">Instagram · LinkedIn</Link></div>
    </div>
    <div className="fsign"><span className="tag">One Place in your city.</span><span className="small">© 2026 One Place Properties Ltd <Link to="/enquire">Privacy</Link><Link to="/enquire">Terms</Link><Link to="/enquire">Cookies</Link></span></div>
  </div>
</footer>}
