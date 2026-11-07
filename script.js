/* EDIT THESE TWO LINES: WhatsApp number in international format, no + or spaces */
const WHATSAPP = "254107795410";
const EMAIL = "crownsitetech@gmail.com";

const wa = t => "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t);
const hi = wa("Hi Crownsite, I'd like to discuss a project.");
["waDirect", "fab", "fWa"].forEach(id => document.getElementById(id).href = hi);

const btn = document.getElementById("menuBtn"), drop = document.getElementById("drop");
const setMenu = o => { drop.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); };
btn.addEventListener("click", () => setMenu(!drop.classList.contains("open")));
drop.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });

document.getElementById("mailDirect").href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Project enquiry");
document.getElementById("enq").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = "Hi Crownsite,\nName: " + f.get("name") + "\nContact: " + f.get("contact") +
    "\nService: " + f.get("service") + "\nDetails: " + (f.get("details") || "-");
  window.open(wa(msg), "_blank", "noopener");
});

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll(".htxt > *,.k,h2,.sub,.svc,.card,.step,details,form,.direct").forEach((el, i) => { el.classList.add("rv"); el.style.animationDelay = (i % 3) * 90 + "ms"; io.observe(el); });
addEventListener("pointermove", e => { const r = document.documentElement.style; r.setProperty("--mx", e.clientX + "px"); r.setProperty("--my", e.clientY + "px"); });