"use strict";

const about = document.querySelector(".about");
const resume = document.querySelector(".resume");
const contact = document.querySelector(".contact");
const techStack = document.querySelector(".tech-stack");
const projects = document.querySelector(".projects");

document.addEventListener("DOMContentLoaded", function () {
  about?.classList.add("mounting");
  resume?.classList.add("mounting");
  contact?.classList.add("mounting");
  techStack?.classList.add("mounting");
  projects?.classList.add("mounting");

  setTimeout(function () {
    about?.classList.remove("mounting");
    resume?.classList.remove("mounting");
    contact?.classList.remove("mounting");
    techStack?.classList.remove("mounting");
    projects?.classList.remove("mounting");
  }, 501);
});
