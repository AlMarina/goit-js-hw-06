const selectors = {
    butDec: document.querySelector('button[data-action="decrement"]'),
    butInc: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value'),
}

selectors.butDec.addEventListener('click', handlerDec)
selectors.butInc.addEventListener('click', handlerInc)


let counterValue = 0;

function handlerDec() {
    counterValue -= 1;
   selectors.span.textContent = counterValue;
}

function handlerInc() {
    counterValue += 1;
    selectors.span.textContent = counterValue;
}