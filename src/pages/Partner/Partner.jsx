import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./Partner.css";

const markup = `

<section class="phero">
<figure class="phero-media"><img src="${img.partnerTower}" alt="" fetchpriority="high"/></figure>
<div class="shell phero-in">
<div class="phero-grid">
<div><span class="label">Partnerships</span><h1 class="display">Build with us.</h1></div>
<div><p class="lede">We work with three kinds of partner.</p></div>
</div>
</div>
</section>
<section class="band shell">
<div class="g3">
<div class="card">
<span class="ic-head">${icon.layers}</span>
<span class="label">01</span>
<h4>Landowners</h4>
<p>You have land in the right part of the city. We bring design, capital structure, construction management and tenants. You keep a share of the asset or a share of the income, whichever suits you.</p>
</div>
<div class="card">
<span class="ic-head">${icon.rent}</span>
<span class="label">02</span>
<h4>Capital partners</h4>
<p>Debt or equity into a named development, with defined terms, a defined exit, and reporting on the same schedule every quarter.</p>
</div>
<div class="card">
<span class="ic-head">${icon.building}</span>
<span class="label">03</span>
<h4>Corporate occupiers</h4>
<p>Build to suit. Give us the specification and the timeline and we develop to it, then lease it to you.</p>
</div>
</div>
</section>
<section class="band invert">
<div class="shell">
<div class="head-block"><span class="label">Our approach</span><h2 class="display">How we look at a deal.</h2></div>
<div class="g4 steps">
<div class="item"><span class="step">01</span><h4>We buy where the city already moves</h4><p>Footfall first, floor area second.</p></div>
<div class="item"><span class="step">02</span><h4>We build for more than one use</h4><p>A single use building has a single point of failure.</p></div>
<div class="item"><span class="step">03</span><h4>We manage for occupancy, not prestige</h4><p>A full ordinary building beats an admired empty one.</p></div>
<div class="item"><span class="step">04</span><h4>We report on the same schedule every quarter</h4><p>Good news and bad news travel at the same speed.</p></div>
</div>
</div>
</section>
<section class="band shell">
<div class="split">
<div>
<span class="label">Send us a site</span>
<h2 class="display">What we need to review it.</h2>
<p style="color:var(--ink-2);margin-top:20px;max-width:46ch">Send us these and we will come back to you within five working days with a yes, a no, or a question.</p>
<ul class="ticks req-list">
<li>${icon.check}Location and the title position</li>
<li>${icon.check}Land size</li>
<li>${icon.check}Current use and what is on it now</li>
<li>${icon.check}The structure you would prefer</li>
<li>${icon.check}Your timeline</li>
</ul>
</div>
<div class="form-wrap">
<form class="js-form" novalidate="">
<div class="fgrid">
<div class="field"><label for="p-name">Name</label><input id="p-name" type="text" autocomplete="name"/></div>
<div class="field"><label for="p-org">Organisation</label><input id="p-org" type="text" autocomplete="organization"/></div>
<div class="field"><label for="p-role">Role</label><input id="p-role" type="text"/></div>
<div class="field">
<label for="p-type">Partnership type</label>
<select id="p-type"><option>Land</option><option>Capital</option><option>Build to suit</option></select>
</div>
<div class="field full"><label for="p-em">Email</label><input id="p-em" type="email" autocomplete="email"/></div>
<div class="field full"><label for="p-loc">City and location</label><input id="p-loc" type="text"/></div>
<div class="field full"><label for="p-desc">Brief description</label><textarea id="p-desc"></textarea></div>
<div class="field full"><label for="p-file">Upload a document, optional</label><input id="p-file" type="file"/></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Send it to us</button></div>
</form>
<div class="form-done">
<h4>Received.</h4>
<p>We will come back to you within five working days with a yes, a no, or a question.</p>
</div>
</div>
</div>
</section>

`;

export default function Partner() {
  return <main className="page partner-page"><PageMarkup html={markup} /></main>;
}
