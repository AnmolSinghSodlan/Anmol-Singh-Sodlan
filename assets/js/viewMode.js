"use strict";

const project = document.querySelector(".project-image");
const overlay = document.querySelector(".overlay");
const mode = document.querySelector(".mode");
const modeIcon = document.querySelector(".mode-icon");
let dark = true;

function darkMode() {
  document.documentElement.style.setProperty("--color-background", "#101010");
  document.documentElement.style.setProperty("--color-box", "#1f2123");
  document.documentElement.style.setProperty("--color-text", "#d1d3d7");
  modeIcon.classList.remove("mode-icon-bright");
  modeIcon.classList.add("mode-icon-dark");
  overlay?.classList.remove("overlay-bright");
  overlay?.classList.add("overlay-dark");
}

function brightMode() {
  document.documentElement.style.setProperty("--color-background", "#edeef0");
  document.documentElement.style.setProperty("--color-box", "#b3b3b3");
  document.documentElement.style.setProperty("--color-text", "#1f2123");
  modeIcon.classList.remove("mode-icon-dark");
  modeIcon.classList.add("mode-icon-bright");
  overlay?.classList.remove("overlay-dark");
  overlay?.classList.add("overlay-bright");
}

function changeMode() {
  if (dark) brightMode();
  else darkMode();
  dark = !dark;
}

mode.addEventListener("click", changeMode);
