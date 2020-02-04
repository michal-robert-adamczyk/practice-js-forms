document.addEventListener('DOMContentLoaded', init);

function init() {
    // 3. tworzę potrzebne mi zmienne
    const rangeEl = document.querySelector('[type="range"]');
    const colorEl = document.querySelector('[type="color"]');
    rangeEl.setAttribute('min', '0,0');
    rangeEl.setAttribute('max', '1,0');

    // 4. tworzę nasłuchwianie dla zmiennych 




    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');


    // Ta funkcja ustawia ??
    rangeEl.addEventListener('mousemove', setValueRange);

    function setValueRange(e) {
        const isMouseMoveEvent = e.type === 'mousemove';
        const isMouseLeftButtonPress = e.buttons === 1;
        if (
            isMouseMoveEvent && isMouseLeftButtonPress ||
            !isMouseMoveEvent
        ) {
            const opacity = e.target.value;
            console.log(opacity);
        }
    }

    colorEl.addEventListener('change', setValueColor);

    function setValueColor(e) {
        const body = document.body;
        const color = e.target.value;
        console.log(color);
    }

    function setBoxShadow(element, colorInHex, opacity = 1) {
        const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

        element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
    }


    function getChannelColor(colorInHex, channelName) {
        let start;
        switch (channelName) {
            case 'red':
                start = 1;
                break;
            case 'green':
                start = 3;
                break;
            case 'blue':
                start = 5;
                break;
        }

        const channelColorHex = colorInHex.substr(start, 2);
        const channelColorDec = parseInt(channelColorHex, 16);

        return channelColorDec;
    }
}