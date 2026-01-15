"use strict";
// Set current year in footer
const yearElement = document.querySelector(".year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// Mobile nav toggle
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const siteHeader = document.querySelector(".header");

if (mobileNavButton && siteHeader) {
  mobileNavButton.addEventListener("click", () => {
    siteHeader.classList.toggle("nav-open");
  });
}
// Smooth scrolling
const anchorLinks = document.querySelectorAll("a[href^='#']");

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId) return;
    event.preventDefault();
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link") && siteHeader) {
      siteHeader.classList.remove("nav-open");
    }
  });
});
// Sticky header
const heroSection = document.querySelector("#hero");

if (heroSection) {
  const stickyObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  stickyObserver.observe(heroSection);
}
// Flexbox gap property detection
function detectFlexGapSupport() {
  const testFlex = document.createElement("div");
  testFlex.style.display = "flex";
  testFlex.style.flexDirection = "column";
  testFlex.style.rowGap = "1px";

  testFlex.appendChild(document.createElement("div"));
  testFlex.appendChild(document.createElement("div"));

  document.body.appendChild(testFlex);
  const isSupported = testFlex.scrollHeight === 1;
  testFlex.remove();

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}

detectFlexGapSupport();
