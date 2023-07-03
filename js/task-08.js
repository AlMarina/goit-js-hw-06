
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) { 
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;
    if (!email.value.trim() || !password.value.trim()) {
        alert('Fields must be filled');
       return
    }
    const data = {
        email: email.value,
        password: password.value,
    }

    console.log(data);
    evt.currentTarget.reset();

}