'use strict';

const input = document.querySelector('#name-input')
const userName = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
    userName.textContent = event.currentTarget.value.trim();
    
    if(event.currentTarget.value.trim().length === 0) {
        userName.textContent = 'Anonymous';
    }
})



