function debounce(eventFunc, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      eventFunc.call(this);
    }, delay);
  };
}

// EventFunction
let userInput = document.querySelector('#userInput');
let eventHandler = () => console.log('Searching ...');

userInput.addEventListener('input', debounce(eventHandler, 800));
