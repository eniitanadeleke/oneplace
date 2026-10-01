import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./Studios.css";

const markup = `

<section class="phero">
<figure class="phero-media"><img src="${img.studiosHero}" alt="Live session mid take, players and instruments in frame, never an empty room" fetchpriority="high"/></figure>
<div class="shell phero-in">
<span class="label">One Place Studios</span>
<h1 class="display">Built quiet.<br/>Lit. Ready.</h1>
</div>
</section>
<section class="intro shell">
<div class="intro-grid">
<p class="lede">Studio floors inside our developments, open to producers, artists, choirs, broadcasters, brands and independent creators.</p>
<div class="body-col">
<p>Recording, live sessions, video, rehearsal and streaming, in a building with power that stays on.</p>
<div class="btn-row stack-sm" style="margin-top:22px">
<a class="btn brass" href="/studios#studio-form">Book a session <span class="arrow">→</span></a>
<a class="btn ghost" href="/enquire">Take a tour</a>
</div>
</div>
</div>
</section>
<section class="band shell">
<div class="head-block"><span class="label">The studios</span><h2 class="display">Four rooms, four jobs.</h2></div>
<div class="g2">
<div class="card media-card">
<div class="cmedia"><img src="${img.studioRecording}" alt="Vocal take through the booth glass" loading="lazy"/></div>
<h4>Recording room</h4>
<p>Treated booth and control room. Vocals, voiceover, instrument tracking.</p>
<div class="card-foot"><a class="tlink" href="#studio-form" data-pick="s-room" data-value="Recording room">Book a session <span class="arrow">→</span></a></div>
</div>
<div class="card media-card">
<div class="cmedia"><img src="${img.studioLive}" alt="Full band or choir under the lighting grid" loading="lazy"/></div>
<h4>Live room</h4>
<p>Room enough for a band or a choir, with a lighting grid and multi camera positions.</p>
<div class="card-foot"><a class="tlink" href="#studio-form" data-pick="s-room" data-value="Live room">Book a session <span class="arrow">→</span></a></div>
</div>
<div class="card media-card">
<div class="cmedia"><img src="${img.studioBroadcast}" alt="Interview set with cameras running" loading="lazy"/></div>
<h4>Broadcast floor</h4>
<p>Set, lighting and streaming feed for interviews, podcasts and live programmes.</p>
<div class="card-foot"><a class="tlink" href="#studio-form" data-pick="s-room" data-value="Broadcast floor">Book a session <span class="arrow">→</span></a></div>
</div>
<div class="card media-card">
<div class="cmedia"><img src="${img.studioRehearsal}" alt="Rehearsal in progress, backline set up" loading="lazy"/></div>
<h4>Rehearsal space</h4>
<p>Backline, mirrors and floor space. Cheaper hours for regular bookings.</p>
<div class="card-foot"><a class="tlink" href="#studio-form" data-pick="s-room" data-value="Rehearsal space">Book a session <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band invert">
<div class="shell split">
<div><span class="label">Rates</span><h2 class="display">Hourly, day, or a block.</h2></div>
<div class="body-col">
<p>Block booking is cheaper and holds the room for a run of sessions.</p>
<ul class="spec" style="margin-top:20px">
<li><span class="k">${icon.clock}Hourly</span><span class="v">Rate card to supply</span></li>
<li><span class="k">${icon.calendar}Day</span><span class="v">Rate card to supply</span></li>
<li><span class="k">${icon.layers}Block</span><span class="v">Rate card to supply</span></li>
</ul>
<h4 class="sublabel">Add ons</h4>
<ul class="ticks">
<li>${icon.check}Engineer</li>
<li>${icon.check}Camera crew</li>
<li>${icon.check}Live streaming</li>
<li>${icon.check}Editing suite time</li>
<li>${icon.check}Session storage and delivery</li>
</ul>
</div>
</div>
</section>
<section class="band shell" id="studio-form">
<div class="split">
<div><span class="label">Booking</span><h2 class="display">Book a session.</h2></div>
<div class="form-wrap">
<form class="js-form" novalidate="">
<div class="fgrid">
<div class="field">
<label for="s-room">Studio</label>
<select id="s-room"><option>Recording room</option><option>Live room</option><option>Broadcast floor</option><option>Rehearsal space</option></select>
</div>
<div class="field"><label for="s-date">Date</label><input id="s-date" type="date"/></div>
<div class="field"><label for="s-hours">Hours needed</label><input id="s-hours" min="1" type="number" inputmode="numeric"/></div>
<div class="field">
<label for="s-add">Add ons</label>
<select id="s-add"><option>None</option><option>Engineer</option><option>Camera crew</option><option>Live streaming</option><option>Editing suite</option></select>
</div>
<div class="field"><label for="s-name">Name</label><input id="s-name" type="text" autocomplete="name"/></div>
<div class="field"><label for="s-ph">Phone</label><input id="s-ph" type="tel" autocomplete="tel"/></div>
<div class="field full"><label for="s-em">Email</label><input id="s-em" type="email" autocomplete="email"/></div>
<div class="field full"><label for="s-brief">What are you recording</label><textarea id="s-brief"></textarea></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Request this session</button></div>
</form>
<div class="form-done">
<h4>Session requested.</h4>
<p>We will confirm availability and the full quote by phone within one working day.</p>
</div>
</div>
</div>
</section>

`;

export default function Studios() {
  return <main className="page studios-page"><PageMarkup html={markup} /></main>;
}
