"use strict";

const hello = document.querySelector(".hello");

document.addEventListener("DOMContentLoaded", function () {
  hello.classList.add("initial-wave");

  setTimeout(function () {
    hello.classList.remove("initial-wave");
  }, 2000);
});
