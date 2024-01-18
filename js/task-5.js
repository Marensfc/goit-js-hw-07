"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
