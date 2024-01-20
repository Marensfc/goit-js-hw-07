'use strict';

const input = document.querySelector('#name-input')
const userName = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
    const trimmedValue = input.value.trim();
    userName.textContent = trimmedValue;
    
    if(trimmedValue.length === 0) {
        userName.textContent = 'Anonymous';
    }
})



