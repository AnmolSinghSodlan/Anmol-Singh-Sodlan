"use strict";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const counterPlate = document.querySelector(".counter");
const counterPoints = document.querySelectorAll(".counter-point");
const image = document.querySelector(".project-image");
const description = document.querySelector(".project-description");
let counter = 0;

function init() {
  image.classList.add(`project-${counter + 1}-image`, "slide-in");

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.remove("disable");

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.add("slide-up");

  counterPoints[counter].classList.add("counter-point-active");
}

function remove() {
  next.classList.add("disable");
  prev.classList.add("disable");
  counterPlate.classList.add("disable");

  image.classList.add("slide-out");

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.add("slide-down");

  setTimeout(() => {
    image.classList.remove(`project-${counter + 1}-image`);

    image.classList.remove("slide-in");

    document
      .querySelector(`.project-${counter + 1}-text`)
      .classList.add("disable");

    document
      .querySelector(`.project-${counter + 1}-text`)
      .classList.remove("slide-up");
  }, 700);

  counterPoints[counter].classList.remove("counter-point-active");
}

function add() {
  image.classList.remove("slide-out");

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.remove("slide-down");

  image.classList.add(`project-${counter + 1}-image`);

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.remove("disable");

  image.classList.add("slide-in");

  document
    .querySelector(`.project-${counter + 1}-text`)
    .classList.add("slide-up");

  counterPoints[counter].classList.add("counter-point-active");

  next.classList.remove("disable");
  prev.classList.remove("disable");
  counterPlate.classList.remove("disable");
}

function onNext() {
  remove();

  setTimeout(() => {
    counter++;
    if (counter > 4) counter = 0;
  }, 701);

  setTimeout(() => {
    add();
  }, 702);
}

function onPrev() {
  remove();

  setTimeout(() => {
    counter--;
    if (counter < 0) counter = 4;
  }, 701);

  setTimeout(() => {
    add();
  }, 702);
}

function onCounterPoint(index) {
  remove();

  setTimeout(() => {
    counter = index;
  }, 701);

  setTimeout(() => {
    add();
  }, 702);
}

counterPoints.forEach((counterPoint, index) => {
  counterPoint.addEventListener("click", function () {
    if (index === counter) return;

    onCounterPoint(index);
  });
});

init();

prev.addEventListener("click", onPrev);
next.addEventListener("click", onNext);
