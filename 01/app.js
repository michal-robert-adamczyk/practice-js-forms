const formEl = document.querySelector('form');

for(const el of formEl.elements) {
   
}

formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName;

    const firstNameLi = firstName.value;
    const lastName = e.target.elements.lastName;
   

    const lastNameLi = lastName.value;

    if (firstNameLi || lastNameLi) {

        const NewLi = document.createElement('li');
        NewLi.innerText=firstNameLi +' '+ lastNameLi;
        const parrentUl = document.querySelector('.users-list');
        parrentUl.appendChild(NewLi);
      
    };
    


    

    

});

