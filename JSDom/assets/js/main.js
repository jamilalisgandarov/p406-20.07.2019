// const element = document.querySelector('#features');
// const div = document.getElementsByClassName('main')[0]; // --> []

// setTimeout(() => {
//   element.style.width = '200px';
//   element.style.height = '200px';
//   element.style.backgroundColor = 'blue';
// }, 3000);

const elements = document.querySelectorAll('.feature-item');

elements.forEach((element, index) => {
  element.style.transitionDelay = `${index*0.5}s`;
});

setTimeout(() => {
  const elements = document.querySelectorAll('.feature-item');

  elements.forEach((element, index) => {
    element.classList.add('active');
  });
}, 2000);
