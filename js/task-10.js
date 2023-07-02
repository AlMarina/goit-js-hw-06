const selectors = {
  inputEl: document.querySelector('[type="number"]'),
  btnCreatEl: document.querySelector('button[data-create]'),
  btnDestEl: document.querySelector('button[data-destroy]'),
  divEl: document.querySelector('#boxes'),
}

console.log(selectors.inputEl);
console.log(selectors.btnCreatEl);
console.log(selectors.btnDestEl);


selectors.btnCreatEl.addEventListener('click', handlerClickCreat);
selectors.btnDestEl.addEventListener('click', handlerClickDwstroy);

function handlerClickCreat() { 
  createBoxes(selectors.inputEl.value);
}

function handlerClickDwstroy() { 
  destroyBoxes();
}


function createBoxes(amount) {
  let markup = '';
   let size = 30;
  for (let i = 0; i < amount; i += 1) {
   
    const mark = ` <div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    markup += mark;
    size += 10;
  }
  
  return selectors.divEl.insertAdjacentHTML('beforeend', markup);
}


function destroyBoxes() { 
  selectors.divEl.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




