// 1. Odwołać się do wszystkich pól formularza i zatrzymać domyślną akcję
console.log('task 1 done');

// 2. sprawdzić czy dwa hasła są takie same i mają ponad 6 znaków
// console.log('task 2 done');

// 3. sprawdzić czy zostal poprawnie wprowadzony email
// console.log('task 2 done');

// rozumiem co robi ta funkcja ale najwyraźniej umyka mi coś w samej zasadzie działania funkcji ogólnie







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

    const email = e.target.elements.login.value;
    console.log(email);
    console.log(validateEmail(email));


    const forPass1 = e.target.elements.pass1.value;
    console.log(forPass1);
    console.log(validatePasword(forPass1));

    const forPass2 = e.target.elements.pass2.value;
    console.log(forPass2);

    if (forPass1==forPass2){
        console.log('same');
    }
    else
        console.log('different');
    

    
    
    
});







// 4. warunek if wszystko ok --> console.log('done');
//  if (walidacja e-maila oreaz obydwa paswordy takie same){
//   console.log('done');
// };

// 5. warunek if not --> kolor fontu dla lebela z błędnie wprowadzonymi danymi zmienić na czerwono
// zrobić tablicę z błędnie wprowadzonymi danymie `const errors = []` i dodać do niej selektors elementu z błędnymi danymi
// pętla (`for` lub `forEach`), która zaznaczy elementy z błędem