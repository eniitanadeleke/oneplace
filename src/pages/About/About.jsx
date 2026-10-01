import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import "./About.css";

const markup = `

<section class="phero">
<figure class="phero-media"><img src="${img.aboutHero}" alt="One of our developments in use, mid morning, tenants and customers in frame" fetchpriority="high"/></figure>
<div class="shell phero-in">
<span class="label">About</span>
<h1 class="display" style="max-width:18ch">We are in the business of places people show up to.</h1>
</div>
</section>
<section class="intro shell">
<div class="intro-grid">
<p class="lede">One Place Properties Ltd is a commercial property company. We acquire, develop, lease and operate buildings that a city uses every day.</p>
</div>
</section>
<section class="band shell">
<div class="split">
<div><span class="label">Why the middle</span><h2 class="display">A quiet address is a slow business.</h2></div>
<div class="body-col">
<p>A building on a quiet road can be beautiful and still be empty. We look for the part of a city where people already pass, and we buy there. Land costs more in those places. It also fills faster, holds value better and gives a tenant customers on the first day.</p>
<p>Then we design for more than one thing to happen. A single use building empties the moment that one use slows down. A mixed building has somewhere else to send its footfall.</p>
</div>
</div>
</section>
<section class="band sunk">
<div class="shell">
<div class="head-block"><span class="label">How we work</span><h2 class="display">Three rules we do not bend.</h2></div>
<div class="g3 rule-list">
<div class="card">
<h4>Location before design</h4>
<p>We do not force a scheme onto the wrong site. If the location will not carry the plan, we change the plan or we walk away from it.</p>
</div>
<div class="card">
<h4>Mixed use before single use</h4>
<p>Offices above shops, meetings beside halls, studios that work when the offices close. A single use building has a single point of failure.</p>
</div>
<div class="card">
<h4>Management before handover</h4>
<p>We stay involved after the ribbon is cut. Occupancy is a job somebody does every week, not an outcome you hope for.</p>
</div>
</div>
</div>
</section>
<section class="band shell">
<div class="head-block"><span class="label">Leadership</span><h2 class="display">The people responsible.</h2></div>
<div class="g3">
<div class="card media-card person">
<div class="cmedia plate portrait"><span class="cap"><b>Portrait</b> · Managing Director</span></div>
<h4>Name to supply</h4>
<p class="role">Managing Director</p>
<p>Leads acquisition and development. Before One Place, spent [X] years [doing what] at [where]. Responsible for which sites we buy and what gets built on them.</p>
</div>
<div class="card media-card person">
<div class="cmedia plate portrait"><span class="cap"><b>Portrait</b> · Director, Asset Management</span></div>
<h4>Name to supply</h4>
<p class="role">Director, Asset Management</p>
<p>Leads leasing, tenant mix and facilities. Responsible for keeping buildings full and keeping them working once they are.</p>
</div>
<div class="card media-card person">
<div class="cmedia plate portrait"><span class="cap"><b>Portrait</b> · Director, Operations</span></div>
<h4>Name to supply</h4>
<p class="role">Director, Operations</p>
<p>Runs The Appointments, the event centres and One Place Studios. Responsible for everything a visitor experiences on the day.</p>
</div>
</div>
</section>
<section class="band sunk">
<div class="shell split">
<div><span class="label">Company</span><h2 class="display">The details.</h2></div>
<div class="card">
<ul class="spec">
<li><span class="k">Registered name</span><span class="v">One Place Properties Ltd</span></li>
<li><span class="k">RC number</span><span class="v">To supply</span></li>
<li><span class="k">Registered office</span><span class="v">To supply</span></li>
<li><span class="k">Year established</span><span class="v">To supply</span></li>
<li><span class="k">Memberships</span><span class="v">To supply</span></li>
</ul>
</div>
</div>
</section>

`;

export default function About() {
  return <main className="page about-page"><PageMarkup html={markup} /></main>;
}
