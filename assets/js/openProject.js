"use strict";

const projectTexts = document.querySelectorAll(".project-text");

projectTexts.forEach((projectText, idx) => {
  projectText.addEventListener("click", function () {
    window.location.href = `/pages/project${idx + 1}.html`;
  });
});
