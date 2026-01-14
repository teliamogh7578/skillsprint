"use strict";
// Set current year in footer
const yearElement = document.querySelector(".year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
