const input = document.querySelector('input[type="file"]')
const imagesList = document.querySelector(`.images-list`);

// czy tutaj uzywam funkcji readFile, ktrą definiuję linijkę niżej ??
input.addEventListener('change', readFile);

function readFile(e) {


    const fileList = e.target.files;

    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        // includes to jest właściwość czy metoda czy co to jest?   
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
                const newImg = document.createElement('img');

                // co to jest .target.result ??
                newImg.src = readerEvent.target.result;
                const newHeader = document.createElement('header');
                const newLi = document.createElement('li');
                const newFooter = document.createElement('footer');
                const newPharagraphFileName = document.createElement('p');
                const newPharagraphFileSize = document.createElement('p');
                newPharagraphFileName.innerText = file.name;
                newPharagraphFileSize.innerText = file.size;
                const body = document.querySelector('body');
                body.appendChild(newPharagraphFileName);
                body.appendChild(newPharagraphFileSize);
                imagesList.appendChild(newLi);
                newLi.appendChild(newHeader);
                newLi.appendChild(newImg);
                newLi.appendChild(newFooter);
                newLi.className = "images-list__item";
                newHeader.className = "images-list__item-name";
                newImg.className = "images-list__item-img";
                newFooter.className = "images-list__item-size";
            };
            reader.readAsDataURL(file);
        };
    }




}


//     co to jest za konstrukcja const cośtam = new costam() ??
//     czy reader to normalna zmienna, do której przypisuję funkcję FilrReader() ??
//     const reader = new FileReader();