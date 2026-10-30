// Change this to your WhatsApp number (country code, no + or spaces)
const WA_NUMBER = "254107795410";
const WA_BASE = "https://wa.me/" + WA_NUMBER;

document.querySelectorAll(".wa-link").forEach((a) => {
  a.href = WA_BASE + "?text=" + encodeURIComponent("Hi Crownsite, I'd like a website for my business.");
  a.target = "_blank";
  a.rel = "noopener";
});

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = `Hi Crownsite,\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nI need: ${d.get("need")}\nAbout my business: ${d.get("details") || "-"}`;
    window.open(WA_BASE + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
}

// subtle reveal on scroll
const items = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}
