
const inputEl = document.querySelector("#font-size-control");
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', handlerInput);

function handlerInput(evt) { 
    spanEl.style.fontSize = `${Number(evt.currentTarget.value)}px`;
}