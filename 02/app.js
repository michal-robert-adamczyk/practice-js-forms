



const formEl = document.querySelector('form');

formEl.noValidate=true;

function validateEmail(elementValue){      
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  };

  function validatePasword(elementValue){      
    const passwordPattern = /^.{6,}$/;
    return passwordPattern.test(elementValue); 
  };
formEl.addEventListener('submit',function(e){
    e.preventDefault();

    const errors = [];
    // console.log(errors);

    const email = e.target.elements.login.value;
    // console.log(email);
    // console.log(validateEmail(email))
    
    if (validateEmail(email)){
        // console.log(validateEmail(email));
    }
    else{
        errors.push('zły emial');
    };


    const forPass1 = e.target.elements.pass1.value;
    if (validatePasword(forPass1)){
        // console.log(validateEmail(email));
    }
    else{
        errors.push('hasło nie ma 6 znaków');
    };
    // console.log(forPass1);
    // console.log(validatePasword(forPass1));

    const forPass2 = e.target.elements.pass2.value;
    // console.log(forPass2);
    if (forPass1==forPass2){
        // console.log('same');
    }
    else{
        errors.push('hasła nie są takie same');
        // console.log('different');
    };
        
    
    const accept = e.target.elements.accept;
    if (accept.checked){
        // console.log('checked');
    }
    else{
        errors.push('regulamin nie został zaakceptowany');
        // console.log('not checked');
    }
    console.log(errors);
        
});







// 5. warunek if not --> kolor fontu dla lebela z błędnie wprowadzonymi danymi zmienić na czerwono
// zrobić tablicę z błędnie wprowadzonymi danymie `const errors = []` i dodać do niej selektors elementu z błędnymi danymi
// pętla (`for` lub `forEach`), która zaznaczy elementy z błędem