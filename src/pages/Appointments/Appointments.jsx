import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./Appointments.css";

const markup = `

<section class="phero">
<figure class="phero-media"><img src="${img.appointmentsHero}" alt="Meeting in progress through a glass wall, room set and lit" fetchpriority="high"/></figure>
<div class="shell phero-in">
<span class="label">Operated by One Place</span>
<h1 class="display">The Appointments</h1>
</div>
</section>
<section class="intro shell">
<div class="intro-grid">
<p class="lede">Meeting rooms you can book by the hour.</p>
<div class="body-col">
<p>Some conversations need a door. The Appointments is our meeting suite inside One Place buildings. Book a room for two people or twenty, arrive, and the room is already set.</p>
<div class="btn-row stack-sm" style="margin-top:22px"><a class="btn brass" href="/appointments#appt-form">Check availability <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band shell">
<div class="head-block"><span class="label">The rooms</span><h2 class="display">Three rooms, three kinds of conversation.</h2></div>
<div class="g3">
<div class="card media-card">
<div class="cmedia"><img src="${img.roomTwoSeater}" alt="" loading="lazy"/></div>
<h4>The Two Seater</h4>
<p>Two to four people. For an interview, a first meeting, a signing.</p>
<ul class="spec"><li><span class="k">${icon.clock}Rate</span><span class="v">Per hour, to supply</span></li></ul>
<div class="card-foot"><a class="btn sm ghost" href="#appt-form" data-pick="a-room" data-value="The Two Seater">Hold this room <span class="arrow">→</span></a></div>
</div>
<div class="card media-card">
<div class="cmedia"><img src="${img.roomBoard}" alt="" loading="lazy"/></div>
<h4>The Board Room</h4>
<p>Eight to twelve people. Screen, long table, closed door.</p>
<ul class="spec"><li><span class="k">${icon.clock}Rate</span><span class="v">Per hour, to supply</span></li></ul>
<div class="card-foot"><a class="btn sm ghost" href="#appt-form" data-pick="a-room" data-value="The Board Room">Hold this room <span class="arrow">→</span></a></div>
</div>
<div class="card media-card">
<div class="cmedia"><img src="${img.roomLongTable}" alt="" loading="lazy"/></div>
<h4>The Long Table</h4>
<p>Up to twenty. Training days, workshops, quarterly reviews.</p>
<ul class="spec"><li><span class="k">${icon.clock}Rate</span><span class="v">Per hour, to supply</span></li></ul>
<div class="card-foot"><a class="btn sm ghost" href="#appt-form" data-pick="a-room" data-value="The Long Table">Hold this room <span class="arrow">→</span></a></div>
</div>
</div>
</section>
<section class="band sunk">
<div class="shell split">
<div><span class="label">Included</span><h2 class="display">What comes with the room.</h2></div>
<div class="g2">
<div class="card">
<h4 class="sublabel" style="margin-top:0">No extra charge</h4>
<ul class="ticks">
<li>${icon.check}Wifi</li>
<li>${icon.check}Screen with the cable already in the room</li>
<li>${icon.check}Whiteboard and markers</li>
<li>${icon.check}Water, tea and coffee</li>
<li>${icon.check}Air conditioning and power backup</li>
<li>${icon.check}Your guest received at the front desk</li>
</ul>
</div>
<div class="card">
<h4 class="sublabel" style="margin-top:0">On request</h4>
<ul class="ticks">
<li>${icon.check}Printing and scanning</li>
<li>${icon.check}Catering</li>
<li>${icon.check}Extra chairs and a second screen</li>
</ul>
</div>
</div>
</div>
</section>
<section class="band shell" id="appt-form">
<div class="split">
<div>
<span class="label">Booking</span>
<h2 class="display">Hold a room.</h2>
<p class="lede" style="margin-top:22px">By the hour, half day, full day, or a monthly retainer if you use us every week.</p>
</div>
<div class="form-wrap">
<form class="js-form" novalidate="">
<div class="fgrid">
<div class="field"><label for="a-date">Date</label><input id="a-date" type="date"/></div>
<div class="field"><label for="a-time">Start time</label><input id="a-time" type="time"/></div>
<div class="field">
<label for="a-dur">Duration</label>
<select id="a-dur"><option>1 hour</option><option>2 hours</option><option>Half day</option><option>Full day</option></select>
</div>
<div class="field">
<label for="a-room">Room</label>
<select id="a-room"><option>The Two Seater</option><option>The Board Room</option><option>The Long Table</option></select>
</div>
<div class="field"><label for="a-guests">Number of guests</label><input id="a-guests" min="1" type="number" inputmode="numeric"/></div>
<div class="field"><label for="a-name">Name</label><input id="a-name" type="text" autocomplete="name"/></div>
<div class="field"><label for="a-co">Company</label><input id="a-co" type="text" autocomplete="organization"/></div>
<div class="field"><label for="a-ph">Phone</label><input id="a-ph" type="tel" autocomplete="tel"/></div>
<div class="field full"><label for="a-em">Email</label><input id="a-em" type="email" autocomplete="email"/></div>
<div class="field full"><label for="a-notes">Anything we should set up in advance</label><textarea id="a-notes"></textarea></div>
</div>
<div class="btn-row"><button class="btn brass" type="submit">Hold this room</button></div>
</form>
<div class="form-done">
<h4>Your room is held.</h4>
<p>We will confirm by phone within two hours during working hours. Payment on arrival or by transfer before the day.</p>
</div>
</div>
</div>
</section>

`;

export default function Appointments() {
  return <main className="page appointments-page"><PageMarkup html={markup} /></main>;
}
