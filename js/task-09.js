
const selectors = {
  div: document.querySelector('.widget'),
  span: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
}

selectors.btnEl.addEventListener('click', handlerClick)

function handlerClick() { 
  const color = getRandomHexColor();
  selectors.span.textContent = color; 
selectors.div.parentElement.style.backgroundColor = color; 

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
