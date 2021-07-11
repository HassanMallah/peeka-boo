'use strict';

const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const bodys = document.querySelector('body');
// const color = ['firebrick', 'aqua', 'coral', 'blueviolet'];

// FUnctions
function closedFaceFn() {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');

    // const colorIndex = parseInt(Math.random() * color.length);
    // body.style.backgroundColor = color[colorIndex];
  }
}

function openFaceFn() {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');

    // const colorIndex = parseInt(Math.random() * color.length);
    // body.style.backgroundColor = color[colorIndex];
  }
}

// Add eventListener

closedFace.addEventListener('click', openFaceFn);
openFace.addEventListener('click', closedFaceFn);
