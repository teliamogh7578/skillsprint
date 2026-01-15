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
