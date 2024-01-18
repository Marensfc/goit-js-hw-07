"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    form.elements.email.value.trim().length === 0 ||
    form.elements.password.value.trim().length === 0
  ) {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      [form.elements.email.name]: form.elements.email.value.trim(),
      [form.elements.password.name]: form.elements.password.value.trim(),
    };
    console.log(userData);
    form.reset();
  }
});


