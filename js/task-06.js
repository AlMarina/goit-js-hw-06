const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handlerInput);

function handlerInput(evt) { 
    evt.currentTarget.classList.remove('valid', 'invalid');

    if (evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length))
        
        evt.currentTarget.classList.add('valid');
    else 
        evt.currentTarget.classList.add('invalid');
}