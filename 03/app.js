// wyświetlenie w `.images-list` 


// wszystkich wybranych (event `change`) 
// w polu `<input/>` 
// plików graficznych (`.type.includes('image')`).

// Należy wykorzystać strukturę z elementu `.images-list__item--prototype` 
// (można go sklonować) przy czym należy zuwaćyć, 
// że element o tej klasie jest nie widoczny dla użytkownika.

// Zwróć uwagę również, że ten `input` typu `file` 
// pozwala wybierac więcej niż jeden plik dlatego należy użyć pętli `for` 
// przy prezentowaniu wybranych przez użytkownika plików.

// Nie zapomnij o wyświetleniu nazwy i rozmiaru pliku 
// w MB z dwoma miejscami po przecinku.


// const fileEl = document.querySelector('input');
// console.log(fileEl);


// fileEl.addEventListener('change', showInfoFile);


// function showInfoFile() {
//     const fileList = document.querySelectorAll('input');
//     console.log(fileList);
//     const file = e.target.files[0];
//     console.log(
//         file.name,
//         file.size,
//         file.type,
//     );
// };


const input = document.querySelector('input[type="file"]')
const imagesList = document.querySelector(`.images-list`);

// czy tutaj uzywam funkcji readFile, ktrą definiuję linijkę niżej
input.addEventListener('change', readFile);

function readFile(e) {
    const file = e.target.files[0];

    // includes to jest właściwość czy metoda czy co to jest?    
    if (file && file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = function(readerEvent) {
            const newImg = document.createElement('img');
            // co to jest .src ??
            // co to jest .target.result ??
            newImg.src = readerEvent.target.result;
            imagesList.appendChild(newImg);
        };
        reader.readAsDataURL(file);
    };

}

// {
//     console.log(input.files);
//     co to jest za konstrukcja const cośtam = new costam() ??
//     czy reader to normalna zmienna, do której przypisuję funkcję FilrReader() ??
//     const reader = new FileReader();
//     reader.onload = function(){

//     }

// }, false);