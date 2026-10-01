import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { icon } from "../../lib/icons";
import { contact } from "../../lib/contact";
import "./Contact.css";

const markup = `

<section class="shero">
<div class="shell">
<div class="hero-grid">
<div><span class="label">Enquire</span><h1 class="display">Come and see the place.</h1></div>
<div><p class="lede">Call, message, or walk in. All three work.</p></div>
</div>
</div>
</section>
<section class="band shell">
<div class="g3">
<div class="card">
<span class="ic-head">${icon.building}</span>
<h4>Head office</h4>
<ul class="spec">
<li><span class="k">${icon.pin}Address</span><span class="v">To supply</span></li>
<li><span class="k">${icon.phone}Phone</span><span class="v"><a href="${contact.phoneHref}">0801 234 5678</a></span></li>
<li><span class="k">${icon.mail}Email</span><span class="v">To supply</span></li>
<li><span class="k">${icon.clock}Weekdays</span><span class="v">8am to 5pm</span></li>
<li><span class="k">${icon.calendar}Saturday</span><span class="v">To supply</span></li>
</ul>
</div>
<div class="card">
<span class="ic-head">${icon.pin}</span>
<h4>One Place Wuse</h4>
<ul class="spec">
<li><span class="k">${icon.pin}Address</span><span class="v">To supply</span></li>
<li><span class="k">${icon.door}Leasing office</span><span class="v">Yes</span></li>
<li><span class="k">${icon.phone}Phone</span><span class="v">To supply</span></li>
</ul>
</div>
<div class="card">
<span class="ic-head">${icon.pin}</span>
<h4>One Place GRA</h4>
<ul class="spec">
<li><span class="k">${icon.pin}Address</span><span class="v">To supply</span></li>
<li><span class="k">${icon.door}Leasing office</span><span class="v">Yes</span></li>
<li><span class="k">${icon.phone}Phone</span><span class="v">To supply</span></li>
</ul>
</div>
</div>
<div class="plate map" style="margin-top:clamp(22px,4vw,40px)">
<i class="map-pin" style="left:22%;top:34%"></i><i class="map-pin" style="left:54%;top:22%"></i><i class="map-pin" style="left:76%;top:52%"></i>
<span class="cap"><b>Map</b> · Embed a map for each office once addresses are confirmed</span>
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
<div class="field"><label for="c-em">Email</label><input id="c-em" type="email" autocomplete="email"/></div>
<div class="field"><label for="c-ph">Phone</label><input id="c-ph" type="tel" autocomplete="tel"/></div>
<div class="field full"><label for="c-msg">Message</label><textarea id="c-msg"></textarea></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Send message</button></div>
<p class="fnote">We reply within two working days.</p>
</form>
<div class="form-done">
<h4>Thank you.</h4>
<p>We have your message and will come back to you within two working days. If it is urgent, call 0801 234 5678.</p>
</div>
</div>
</div>
</section>

`;

export default function Contact() {
  return <main className="page contact-page"><PageMarkup html={markup} /></main>;
}
