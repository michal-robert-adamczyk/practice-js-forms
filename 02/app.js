// 1. odwołać się do poszczególnych pól formularza
// 2. ustawić nasłuchiwanie keyup na każde pole 
3. 


const formEl = document.querySelector('form');
formEl.noValidate=true;
formEl.addEventListener('submit',function(e){
    e.preventDefault()

    const email = e.target.elements.login;
    const elementValue = email.value;
    console.log(email.value);


    function validateEmail(elementValue){      
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }; 
});


