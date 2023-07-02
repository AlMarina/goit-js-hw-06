const selectors = {
    butDec: document.querySelector('button[data-action="decrement"]'),
    butInc: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value'),
}

selectors.butDec.addEventListener('click', handlerDec)
selectors.butInc.addEventListener('click', handlerInc)

// function handlerDec() {
//    selectors.span.textContent = Number(selectors.span.textContent) - 1;
// }

// function handlerInc() {
//     selectors.span.textContent = Number(selectors.span.textContent) + 1;
// }

let counterValue = 0;

function handlerDec() {
    counterValue -= 1;
   selectors.span.textContent = counterValue;
}

function handlerInc() {
    counterValue += 1;
    selectors.span.textContent = counterValue;
}