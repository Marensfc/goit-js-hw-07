"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let markup = [];

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement("div");
    elem.style.backgroundColor = `${getRandomHexColor()}`;
    elem.style.height = `${30 + 10 * i}px`;
    elem.style.width = `${30 + 10 * i}px`;
    markup.push(elem);
  }

  divBoxes.append(...markup);
}

buttonCreate.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
  input.value = "";
});

buttonDestroy.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
