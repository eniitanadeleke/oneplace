import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./Home.css";

const markup = `

<section class="phero tall">
<figure class="phero-media"><img src="${img.homeHero}" alt="Busy commercial frontage, daylight, shot from across the road, people walking past" fetchpriority="high"/></figure>
<div class="shell phero-in">
<div class="phero-grid">
<div>
<span class="label">Commercial property</span>
<h1 class="display">One Place<br/>in your city.</h1>
</div>
<div>
<p class="lede">We buy and develop commercial property in the centre of cities. Offices, shopping malls, shops, event centres, studios and room to sit down. Then we fill them.</p>
<div class="btn-row stack-sm">
<a class="btn brass" href="/spaces">Find a space <span class="arrow">→</span></a>
<a class="btn on-photo" href="/partner">Partner with us</a>
</div>
</div>
</div>
</div>
</section>
<div class="shell finder-wrap">
<form class="finder" role="search" aria-label="Find a space">
<div class="finder-title">${icon.search}Find a space</div>
<div class="ff"><label for="f-city">City</label>
<select id="f-city" name="city"><option value="all">All</option><option value="lagos">Lagos</option><option value="abuja">Abuja</option><option value="ph">Port Harcourt</option></select></div>
<div class="ff"><label for="f-type">Type</label>
<select id="f-type" name="type"><option value="all">All</option><option value="office">Office</option><option value="shop">Shop</option><option value="mall">Mall unit</option><option value="hall">Hall</option></select></div>
<button class="btn" type="submit">${icon.search}Find a space</button>
</form>
</div>

<section class="band shell">
<div class="split">
<h2 class="display">A city needs somewhere everything can happen at once.</h2>
<div class="body-col">
<p>Most commercial property is built to be leased and then left alone. We build for the opposite. We buy where a city is already moving, then design so that work, trade, meetings, performance and rest can sit in the same address.</p>
<p>An office floor above a row of shops. A meeting suite beside an event hall. A studio that works at night in a building that works by day. The mix is what keeps a place alive, and a place that stays alive is a place that stays full.</p>
<a class="tlink" href="/about">How we choose a site <span class="arrow">→</span></a>
</div>
</div>
</section>

<section class="band sunk">
<div class="shell">
<div class="head-block"><span class="label">What we do</span><h2 class="display">Four jobs, start to finish.</h2></div>
<div class="g4 steps">
<div class="item"><span class="step">01</span><h4>Acquire</h4><p>We buy commercial land and buildings in city centres and along high traffic corridors.</p></div>
<div class="item"><span class="step">02</span><h4>Develop</h4><p>We design and build offices, retail, event and studio space to a standard tenants stay in.</p></div>
<div class="item"><span class="step">03</span><h4>Lease and manage</h4><p>We handle occupancy, facilities and the tenant mix so the building performs after handover.</p></div>
<div class="item"><span class="step">04</span><h4>Operate</h4><p>Some spaces we run ourselves, including The Appointments and One Place Studios.</p></div>
</div>
</div>
</section>

<section class="band shell">
<div class="head-block"><span class="label">Our spaces</span><h2 class="display">Five kinds of space, usually in the same building.</h2></div>
<div class="tiles" id="space-tiles">
<a class="tile" href="/what-we-build">
<img src="${img.tileOffices}" alt="" loading="lazy"/>
<span class="tn">01</span><h4>Offices</h4>
<p>Serviced and shell floors, from a single suite to a whole floor.</p><span class="go">See offices →</span>
</a>
<a class="tile" href="/what-we-build">
<img src="${img.tileRetail}" alt="" loading="lazy"/>
<span class="tn">02</span><h4>Malls and shops</h4>
<p>Retail lines planned around footfall rather than floor area.</p><span class="go">See retail →</span>
</a>
<a class="tile" href="/what-we-build">
<img src="${img.tileEvents}" alt="" loading="lazy"/>
<span class="tn">03</span><h4>Event centres</h4>
<p>Halls sized so you are not paying for space you will not fill.</p><span class="go">See halls →</span>
</a>
<a class="tile" href="/studios">
<img src="${img.tileStudios}" alt="" loading="lazy"/>
<span class="tn">04</span><h4>Studios</h4>
<p>Recording, live session, broadcast and rehearsal floors.</p><span class="go">See studios →</span>
</a>
<a class="tile" href="/what-we-build">
<img src="${img.tileLeisure}" alt="" loading="lazy"/>
<span class="tn">05</span><h4>Leisure and open space</h4>
<p>The parts people use without an appointment.</p><span class="go">See leisure →</span>
</a>
</div>
<div class="swipe-hint" data-dots-for="#space-tiles" aria-hidden="true"></div>
</section>

<section class="band invert">
<div class="shell duo">
<article class="feature">
<figure class="photo"><img src="${img.featureAppointments}" alt="" loading="lazy"/></figure>
<div class="fbody">
<span class="label">Operated by us</span>
<h2 class="display">The Appointments</h2>
<p>Meeting rooms inside our buildings, booked by the hour or the day. Quiet, serviced, and ready when you walk in. For the conversation that should not be held in a restaurant.</p>
<div class="btn-row"><a class="btn on-deep" href="/appointments">Book a room <span class="arrow">→</span></a></div>
</div>
</article>
<article class="feature">
<figure class="photo"><img src="${img.featureStudios}" alt="" loading="lazy"/></figure>
<div class="fbody">
<span class="label">Operated by us</span>
<h2 class="display">One Place Studios</h2>
<p>Studio floors built for recording, live sessions, broadcast and rehearsal. Treated for sound, rigged for light, and open to producers, choirs, broadcasters, brands and independent creators.</p>
<div class="btn-row"><a class="btn on-deep" href="/studios">See the studios <span class="arrow">→</span></a></div>
</div>
</article>
</div>
</section>

<section class="band shell">
<div class="media-split">
<figure class="photo"><img src="${img.partnerTower}" alt="" loading="lazy"/></figure>
<div>
<span class="label">For partners</span>
<h2 class="display">Property that earns because people use it.</h2>
<div class="body-col" style="margin-top:24px">
<p>We work with landowners, capital partners and corporate occupiers on the acquisition and development of commercial assets. The approach is not complicated. Buy where the city already moves, build for more than one use, and manage for occupancy rather than for prestige.</p>
<div class="btn-row stack-sm"><a class="btn" href="/partner">Talk to us about a deal <span class="arrow">→</span></a></div>
</div>
</div>
</div>
</section>

<section class="band invert">
<div class="shell">
<div class="proof">
<div><span class="n" data-count="3">3</span><span class="t">Cities we are active in</span></div>
<div><span class="n" data-count="18400">18,400</span><span class="t">Square metres developed or under development</span></div>
<div><span class="n" data-count="62">62</span><span class="t">Businesses housed</span></div>
</div>
<p class="proof-note"></p>
</div>
</section>

<section class="band shell" id="home-enquiry">
<div class="split">
<div>
<span class="label">Enquiries</span>
<h2 class="display">Tell us what you are looking for.</h2>
<p class="lede" style="margin-top:22px">Fill this in and someone from our team replies within two working days.</p>
</div>
<div class="form-wrap">
<form class="js-form" novalidate="">
<div class="fgrid">
<div class="field"><label for="h-name">Name</label><input id="h-name" name="name" required="" type="text" autocomplete="name"/></div>
<div class="field"><label for="h-co">Company or organisation</label><input id="h-co" name="company" type="text" autocomplete="organization"/></div>
<div class="field"><label for="h-em">Email</label><input id="h-em" name="email" required="" type="email" autocomplete="email"/></div>
<div class="field"><label for="h-city">City</label><input id="h-city" name="city" type="text"/></div>
<div class="field">
<label for="h-int">I am interested in</label>
<select id="h-int" name="interest">
<option>Leasing a space</option>
<option>Booking a meeting room</option>
<option>Booking the event centre</option>
<option>Booking a studio</option>
<option>Investment or partnership</option>
<option>Something else</option>
</select>
</div>
<div class="field full"><label for="h-msg">Tell us a little more</label><textarea id="h-msg" name="message"></textarea></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Send enquiry</button></div>
<p class="fnote">We reply within two working days.</p>
</form>
<div class="form-done">
<h4>Thank you.</h4>
<p>We have your enquiry and will come back to you within two working days.</p>
</div>
</div>
</div>
</section>

`;

export default function Home() {
  return <main className="page home-page"><PageMarkup html={markup} /></main>;
}
