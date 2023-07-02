
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) { 
    evt.preventDefault();

    //если полей input не много:
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value)
        alert('Fields must be filled');
    const data = {
        email: email.value,
        password: password.value,
    }

    console.log(data);
    evt.currentTarget.reset();



// если полей input много, чтобы не прописывать вручную каждое:
    // const data = Object.keys(evt.currentTarget.elements).reduce((acc, item) => { 
    //     if (isNaN(item)) { 
    //         acc[item] = evt.currentTarget.elements[item].value;
    //     }
    //     return acc;
    // }, {})
   

    // можно с помощью FormData:
    // const formData = new FormData(evt.currentTarget);
    // const data = {};
    // formData.forEach((value, key) => {
    //     data[key] = value;
    // });

}