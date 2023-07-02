
const selectors = {
  div: document.querySelector('.widget'),
  span: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
}

selectors.btnEl.addEventListener('click', handlerClick)

function handlerClick() { 
  selectors.span.textContent = getRandomHexColor(); 
selectors.div.parentElement.style.backgroundColor = getRandomHexColor(); 

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
