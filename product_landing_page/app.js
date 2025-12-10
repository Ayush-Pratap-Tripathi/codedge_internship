// initialize AOS
AOS.init({ duration: 800, once: true, offset: 80 });

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobilePanel = document.getElementById("mobilePanel");
menuBtn?.addEventListener("click", () =>
  mobilePanel.classList.toggle("hidden")
);

// CTA scroll
document.querySelectorAll("#ctaTop, #ctaTopMobile").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelector("#pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  })
);

// contact form handling (demo static behaviour)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const em = fd.get("email");
  const msg = fd.get("message");
  // simple client-side validation and feedback
  if (!em || !msg) {
    formMsg.classList.remove("hidden");
    formMsg.classList.add("text-red-400");
    formMsg.textContent = "Please provide both email and message.";
    return;
  }
  formMsg.classList.remove("hidden");
  formMsg.classList.remove("text-red-400");
  formMsg.classList.add("text-green-400");
  formMsg.textContent =
    "Thanks! Your message has been received. We will contact you at " +
    em +
    ".";
  form.reset();
});

// small entrance animation for pricing buttons
document.querySelectorAll(".card-shine").forEach((c, i) => {
  c.style.transition = "transform .35s ease, box-shadow .35s ease";
  c.addEventListener(
    "mouseenter",
    () => (c.style.transform = "translateY(-6px)")
  );
  c.addEventListener(
    "mouseleave",
    () => (c.style.transform = "translateY(0px)")
  );
});
