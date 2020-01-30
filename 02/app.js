// jaki selektor byłby lepszy ?



const formEl = document.querySelector('form');

formEl.noValidate = true;

function validateEmail(elementValue) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
};

function validatePasword(elementValue) {
    const passwordPattern = /^.{6,}$/;
    return passwordPattern.test(elementValue);
};

//zrobić żeby ta funkcja zmieniała kolor elementu na czerwony 
function colourChanger(element) {
    // console.log(element);
};
formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const errors = [];

    const email = e.target.elements.login;
    const emailValue = e.target.elements.login.value;

    if (validateEmail(emailValue)) {} else {

        errors.push('[for="formLogin"]');
        const formLogin = document.querySelector('[for="formLogin"]');

        formLogin.setAttribute('style', 'color:red');
        // tutaj testowo zrobić tak żeby się kolor zmieniał, potem to samo zastosować w pętli
        // email.setAttribute('style', 'color:#FF0000');

    };


    const forPass1 = e.target.elements.pass1.value;
    if (validatePasword(forPass1)) {} else {
        errors.push('[for="formPass1"]');
        const formPass1 = document.querySelector('[for="formPass1"]');

        formPass1.setAttribute('style', 'color:red');

        errors.push('[for="formPass2"]');
        const formPass2 = document.querySelector('[for="formPass2"]');

        formPass2.setAttribute('style', 'color:red');
    };

    const forPass2 = e.target.elements.pass2.value;
    if (forPass1 == forPass2) {} else {
        errors.push('[for="formPass1"]');
        const formPass1 = document.querySelector('[for="formPass1"]');

        formPass1.setAttribute('style', 'color:red');

        errors.push('[for="formPass2"]');
        const formPass2 = document.querySelector('[for="formPass2"]');

        formPass2.setAttribute('style', 'color:red');
    };


    const accept = e.target.elements.accept;
    if (accept.checked) {} else {
        errors.push('[for="formAccept"]');
        const formAccept = document.querySelector('[for="formAccept"]');

        formAccept.setAttribute('style', 'color:red');
    };

    console.log(errors);
    for (let i = 0; i < errors.length; i++) {
        console.log(i);
        console.log(errors[i]);
    };



    // if (errors.length == 0) {
    //     // console.log("done");
    // }
    // else {

    //     // console.log(errors);
    //     errors.forEach(colourChanger);
    // }

});



const head = document.querySelector('head');

// console.log(head);


// Tworzyć zmienną z elementem zależnym od zawartosci tablicy