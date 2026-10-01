import PageMarkup from "../../components/PageMarkup/PageMarkup";
import { img } from "../../lib/images";
import { icon } from "../../lib/icons";
import "./Spaces.css";

const specIcon = { Size: icon.size, "Rent basis": icon.rent, "Service charge": icon.charge, Capacity: icon.users, Included: icon.included };

const listing = ({ id, city, type, photo, alt, title, place, status, now, specs, cta = "Enquire", plan = true }) => `
<article class="listing" data-city="${city}" data-type="${type}">
<div class="lmedia">
<img src="${photo}" alt="${alt}" loading="lazy"/>
<span class="status${now ? " now" : ""}">${status}</span>
<button class="save" type="button" data-id="${id}" aria-pressed="false" aria-label="Save ${title}">${icon.heart}</button>
</div>
<div class="lbody">
<div class="ltop">
<h4>${title}</h4><span class="place">${icon.pin}${place}</span>
</div>
<ul class="spec">
${specs.map(([k, v]) => `<li><span class="k">${specIcon[k] || ""}${k}</span><span class="v">${v}</span></li>`).join("\n")}
</ul>
<div class="foot"><a class="btn sm" href="/enquire">${cta}</a>${plan ? `<a class="tlink" href="/spaces">${icon.plan}Floor plan</a>` : ""}</div>
</div>
</article>`;

const listings = [
  { id: "ikeja-office-2", city: "lagos", type: "office", photo: img.listingOfficeShell, alt: "Empty office floor, honest shell shot",
    title: "Office suite, second floor", place: "One Place Ikeja · Lagos", status: "Available now", now: true,
    specs: [["Size", "84 sqm"], ["Rent basis", "Per annum, per sqm"], ["Service charge", "Quoted separately"]] },
  { id: "ikeja-corner-shop", city: "lagos", type: "shop", photo: img.listingShop, alt: "Shop unit frontage on the trading line",
    title: "Corner shop unit", place: "One Place Ikeja · Lagos", status: "Available now", now: true,
    specs: [["Size", "32 sqm"], ["Rent basis", "Per annum"], ["Service charge", "Quoted separately"]] },
  { id: "wuse-floor-4", city: "abuja", type: "office", photo: img.listingWholeFloor, alt: "Whole floor, columns and window line",
    title: "Whole floor, fourth", place: "One Place Wuse · Abuja", status: "From 1 October", now: false,
    specs: [["Size", "410 sqm"], ["Rent basis", "Per annum, per sqm"], ["Service charge", "Quoted separately"]] },
  { id: "wuse-mall-unit", city: "abuja", type: "mall", photo: img.listingMall, alt: "Mall concourse looking toward the unit",
    title: "Inline mall unit", place: "One Place Wuse · Abuja", status: "Available now", now: true,
    specs: [["Size", "58 sqm"], ["Rent basis", "Per annum"], ["Service charge", "Quoted separately"]] },
  { id: "gra-main-hall", city: "ph", type: "hall", photo: img.listingHall, alt: "Hall empty and lit, showing the true span",
    title: "Main hall", place: "One Place GRA · Port Harcourt", status: "By the day", now: false,
    specs: [["Capacity", "420 guests"], ["Rent basis", "Per day"], ["Included", "Sound, lighting, coordinator"]], cta: "Check a date", plan: false },
  { id: "gra-serviced-suite", city: "ph", type: "office", photo: img.listingSuite, alt: "Small serviced suite, furnished",
    title: "Serviced suite", place: "One Place GRA · Port Harcourt", status: "Available now", now: true,
    specs: [["Size", "26 sqm"], ["Rent basis", "Per month, serviced"], ["Service charge", "Included"]] },
];

const markup = `

<section class="shero">
<div class="shell">
<div class="hero-grid">
<div><span class="label">Availability</span><h1 class="display">Spaces available now.</h1></div>
<div><p class="lede">Current availability across our developments. Filter by city and by type.</p></div>
</div>
</div>
</section>
<div class="filterbar">
<div class="shell">
<div aria-label="Filter by city" class="filters" role="group">
<span class="fl">City</span>
<button class="chip on" data-filter="city" data-value="all">All</button>
<button class="chip" data-filter="city" data-value="lagos">Lagos</button>
<button class="chip" data-filter="city" data-value="abuja">Abuja</button>
<button class="chip" data-filter="city" data-value="ph">Port Harcourt</button>
</div>
<div aria-label="Filter by type" class="filters" role="group">
<span class="fl">Type</span>
<button class="chip on" data-filter="type" data-value="all">All</button>
<button class="chip" data-filter="type" data-value="office">Office</button>
<button class="chip" data-filter="type" data-value="shop">Shop</button>
<button class="chip" data-filter="type" data-value="mall">Mall unit</button>
<button class="chip" data-filter="type" data-value="hall">Hall</button>
</div>
</div>
</div>
<section class="band shell listings-band">
<div class="listings" id="listings">
${listings.map(listing).join("\n")}
<div class="empty" id="emptyState" style="display:none">
<h4>Nothing matching that today.</h4>
<p>We do not have a space matching that today. Tell us what you are looking for and we will call you when one comes up.</p>
<a class="btn ghost" href="/enquire">Register your requirement</a>
</div>
</div>
</section>
<section class="band sunk">
<div class="shell">
<div class="head-block"><span class="label">Leasing</span><h2 class="display">How it works, in four steps.</h2></div>
<div class="g4 steps">
<div class="item"><span class="step">01</span><h4>Enquire</h4><p>Send us the size you need, what you will use it for, and the city.</p></div>
<div class="item"><span class="step">02</span><h4>Visit</h4><p>We arrange an inspection within five working days.</p></div>
<div class="item"><span class="step">03</span><h4>Terms</h4><p>You get a written offer with rent, service charge, lease term and the fit out position, all on one page.</p></div>
<div class="item"><span class="step">04</span><h4>Move in</h4><p>Documentation, handover, and support while you fit out.</p></div>
</div>
</div>
</section>
<section class="band shell">
<div class="split">
<div><span class="label">Questions</span><h2 class="display">What tenants ask us first.</h2></div>
<div class="faq">
<details><summary>What is the shortest lease you will do?</summary><div class="ans"><p>Two years for offices and shop units. Shorter terms on kiosks and serviced suites, which run monthly.</p></div></details>
<details><summary>Is service charge inside the rent?</summary><div class="ans"><p>No. It is quoted separately and reviewed once a year. You see what it covers before you sign.</p></div></details>
<details><summary>Can I fit out the space myself?</summary><div class="ans"><p>Yes, to an agreed specification. We give you the drawings and a fit out window before rent starts.</p></div></details>
<details><summary>What is the power situation?</summary><div class="ans"><p>Details to be confirmed by One Place. State hours of supply, the generator arrangement, and how power is billed.</p></div></details>
<details><summary>Is there parking?</summary><div class="ans"><p>Details to be confirmed by One Place. State bays per unit and visitor parking.</p></div></details>
<details><summary>Can I see the floor plan before I visit?</summary><div class="ans"><p>Yes. Every listing has a plan you can download.</p></div></details>
</div>
</div>
</section>

`;

export default function Spaces() {
  return <main className="page spaces-page"><PageMarkup html={markup} /></main>;
}
