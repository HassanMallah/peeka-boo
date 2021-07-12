'use strict';

const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const bodys = document.querySelector('body');

// FUnctions
function closedFaceFn() {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
}

function openFaceFn() {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
}

// Add eventListener

closedFace.addEventListener('click', openFaceFn);
openFace.addEventListener('click', closedFaceFn);
