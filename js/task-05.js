const selectors = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

selectors.inputEl.addEventListener('input', handlerInput);

function handlerInput(evt) {
    if (!evt.currentTarget.value.trim())
        selectors.spanEl.textContent = "Anonymous";
    else
        selectors.spanEl.textContent = evt.currentTarget.value;
}
