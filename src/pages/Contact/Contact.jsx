import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { icon } from "../../lib/icons";
import { contact, mailto } from "../../lib/contact";

const svg = (inner) => `<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const social = {
  instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"/>'),
  facebook: svg('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1Z"/>'),
};
import "./Contact.css";

const markup = `

<section class="shero">
<div class="shell">
<span class="label">Enquire</span><h1 class="display">Come and see the place.</h1>
</div>
</section>
<section class="band shell reach-band">
<div class="g3">
<a class="card reach" href="${mailto()}">
<span class="ic-head">${icon.mail}</span>
<h4>Email</h4>
<span class="tlink">${contact.email} <span class="arrow">→</span></span>
</a>
<a class="card reach" href="${contact.instagramHref}" target="_blank" rel="noopener">
<span class="ic-head">${social.instagram}</span>
<h4>Instagram</h4>
<span class="tlink">Instagram <span class="arrow">→</span></span>
</a>
<a class="card reach" href="${contact.facebookHref}" target="_blank" rel="noopener">
<span class="ic-head">${social.facebook}</span>
<h4>Facebook</h4>
<span class="tlink">Facebook <span class="arrow">→</span></span>
</a>
</div>
</section>
<section class="band sunk">
<div class="shell split">
<div>
<span class="label">Message us</span>
<h2 class="display">Pick what your message is about and it goes straight to the right person.</h2>
</div>
<div class="form-wrap">
<form class="js-form" novalidate="">
<div class="fgrid">
<div class="field full">
<label for="c-topic">What is this about</label>
<select id="c-topic">
<option>Leasing and available space</option>
<option>The Appointments</option>
<option>Event centre</option>
<option>Studios</option>
<option>Investment and partnership</option>
<option>Existing tenant, maintenance or billing</option>
<option>Press</option>
<option>Careers</option>
</select>
</div>
<div class="field"><label for="c-name">Name</label><input id="c-name" type="text" autocomplete="name"/></div>
<div class="field"><label for="c-co">Company</label><input id="c-co" type="text" autocomplete="organization"/></div>
<div class="field full"><label for="c-em">Email</label><input id="c-em" type="email" autocomplete="email"/></div>
<div class="field full"><label for="c-msg">Message</label><textarea id="c-msg"></textarea></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Send message</button></div>
<p class="fnote">We reply within two working days.</p>
</form>
<div class="form-done">
<h4>Thank you.</h4>
<p>We have your message and will come back to you within two working days.</p>
</div>
</div>
</div>
</section>

`;

export default function Contact() {
  return <main className="page contact-page"><PageMarkup html={markup} /></main>;
}
