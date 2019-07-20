function alertMe() {
  alert('You have been alerted!');
}

function Class() {
  this.getStundetsCount = function() {
    alert('12');
  };
}

// const instance = new Class();

var instance = new Class();

document
  .querySelector('.button-style')
  .addEventListener('click', function() {
    console.log('Test');
  })

document
  .querySelector('.button-style')
  .addEventListener('mouseover', function() {
    console.log('mouseover');
  })

document
  .querySelector('.button-style')
  .getAttribute('data-navigation');

document
  .querySelector('.button-style')
  .addEventListener('click', function(event) {
    console.log(event);
  });

document
  .querySelector('.input-element')
  .addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      console.log(event.target.value);
    }
  });
