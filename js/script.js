"use strict";
// Set current year in footer
const yearElement = document.querySelector(".year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// MOBILE NAV TOGGLE
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const siteHeader = document.querySelector(".header");

if (mobileNavButton && siteHeader) {
  mobileNavButton.addEventListener("click", () => {
    siteHeader.classList.toggle("nav-open");
  });
}
