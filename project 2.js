const button = document.querySelector('.btn');
const body = document.querySelector('body');
const color = ['firebrick', 'aqua', 'coral', 'blueviolet'];

body.style.backgroundColor = 'white';

button.addEventListener('click', function () {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
});
