// wyświetlenie w `.images-list` 


// wszystkich wybranych (event `change`) 


// w polu `<input/>` plików graficznych (`.type.includes('image')`).

// Należy wykorzystać strukturę z elementu `.images-list__item--prototype` 
// (można go sklonować) przy czym należy zuwaćyć, 
// że element o tej klasie jest nie widoczny dla użytkownika.

// Zwróć uwagę również, że ten `input` typu `file` 
// pozwala wybierac więcej niż jeden plik dlatego należy użyć pętli `for` 
// przy prezentowaniu wybranych przez użytkownika plików.

// Nie zapomnij o wyświetleniu nazwy i rozmiaru pliku 
// w MB z dwoma miejscami po przecinku.


const fileEl = document.querySelector('input');
// console.log(fileEl);


fileEl.addEventListener('change', showInfoFile);


function showInfoFile(){
    const fileList = document.querySelectorAll('input');
    console.log(fileList);
    // const file = e.target.files[0];

    // console.log(
    //     file.name,
    //     file.size,
    //     file.type,
    // );
};