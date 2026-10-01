import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./WhatWeBuild.css";

const markup = `

<section class="shero">
<div class="shell">
<div class="hero-grid">
<div><span class="label">What we build</span><h1 class="display">Five kinds of space, usually in the same development.</h1></div>
<div><p class="lede">Here is what each one is, and what you get if you take it.</p></div>
</div>
</div>
</section>
<nav class="subnav" aria-label="Kinds of space">
<div class="shell">
<a href="#offices"><span>01</span>Offices</a>
<a href="#retail"><span>02</span>Retail</a>
<a href="#events"><span>03</span>Events</a>
<a href="#studios"><span>04</span>Studios</a>
<a href="#leisure"><span>05</span>Leisure</a>
</div>
</nav>
<section class="band shell anchor" id="offices">
<div class="split">
<div>
<span class="label">01 · Offices</span>
<h2 class="display">Offices</h2>
<figure class="photo strip" style="margin-top:26px"><img src="${img.buildOffices}" alt="Occupied office floor, people at desks, daylight from the windows" loading="lazy"/></figure>
</div>
<div class="body-col">
<p>Serviced and shell office floors for companies that want their people close to clients, banks and transport. Sizes run from a single suite to a whole floor.</p>
<h4 class="sublabel">What a tenant gets</h4>
<ul class="ticks two">
<li>${icon.check}Power backup, stated in hours, not in adjectives</li>
<li>${icon.check}Security and access control</li>
<li>${icon.check}Allocated parking</li>
<li>${icon.check}Lift access and maintained common areas</li>
<li>${icon.check}Fibre ready risers</li>
<li>${icon.check}Flexible fit out, shell or serviced</li>
<li>${icon.check}Service charge quoted up front</li>
</ul>
<div class="btn-row stack-sm"><a class="btn ghost" href="/spaces?type=office">See available offices <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band sunk anchor" id="retail">
<div class="shell split">
<div>
<span class="label">02 · Retail</span>
<h2 class="display">Shopping malls and shops</h2>
<figure class="photo strip" style="margin-top:26px"><img src="${img.buildRetail}" alt="Trading shop line on a Saturday, customers carrying bags" loading="lazy"/></figure>
</div>
<div class="body-col">
<p>Retail lines and mall units planned around footfall rather than floor area. We decide the tenant mix before we lease, so shops sit next to the shops that help them trade.</p>
<h4 class="sublabel">What a tenant gets</h4>
<ul class="ticks two">
<li>${icon.check}Anchor and inline units</li>
<li>${icon.check}Shared customer parking</li>
<li>${icon.check}Extended trading hours</li>
<li>${icon.check}Cleaning, security and waste handled centrally</li>
<li>${icon.check}Agreed signage positions</li>
<li>${icon.check}The centre marketed as a whole, not unit by unit</li>
</ul>
<div class="btn-row stack-sm"><a class="btn ghost" href="/spaces?type=shop">See available shops <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band shell anchor" id="events">
<div class="split">
<div>
<span class="label">03 · Events</span>
<h2 class="display">Event centres</h2>
<figure class="photo strip" style="margin-top:26px"><img src="${img.buildEvents}" alt="Hall dressed and full, evening, guests seated" loading="lazy"/></figure>
</div>
<div class="body-col">
<p>Halls for weddings, conferences, product launches, church services, corporate days and end of year parties. Rooms sized so you are not paying for space you will not fill.</p>
<h4 class="sublabel">What you get</h4>
<ul class="ticks two">
<li>${icon.check}Capacity options from 80 to 900 guests</li>
<li>${icon.check}In house sound and lighting</li>
<li>${icon.check}Parking for guests</li>
<li>${icon.check}Holding and changing rooms</li>
<li>${icon.check}Catering access, in house or your own</li>
<li>${icon.check}A coordinator on site for the whole event</li>
</ul>
<div class="btn-row stack-sm"><a class="btn ghost" href="/enquire">Check a date <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band invert anchor" id="studios">
<div class="shell split">
<div>
<span class="label">04 · Studios</span>
<h2 class="display">Studios</h2>
</div>
<div class="body-col">
<p>Recording, live session, broadcast and rehearsal floors, built quiet. Full detail and rates on the Studios page.</p>
<div class="btn-row stack-sm"><a class="btn on-deep" href="/studios">Go to One Place Studios <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band shell anchor" id="leisure">
<div class="split">
<div>
<span class="label">05 · Leisure</span>
<h2 class="display">Leisure and open space</h2>
<figure class="photo strip" style="margin-top:26px"><img src="${img.tileLeisure}" alt="" loading="lazy"/></figure>
</div>
<div class="body-col">
<p>The parts of a development people use without an appointment. Food courts, terraces, seating, play areas, green corners.</p>
<p>They are not decoration. They are the reason a family stays two hours instead of twenty minutes, and the reason the shops around them trade.</p>
</div>
</div>
</section>

`;

export default function WhatWeBuild() {
  return <main className="page build-page"><PageMarkup html={markup} /></main>;
}
