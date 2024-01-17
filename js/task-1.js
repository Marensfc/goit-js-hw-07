"use strict";

const listElements = document.querySelectorAll('#categories>.item')

console.log('Number of categories:', listElements.length);

listElements.forEach(elem => {
    console.log('category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
})