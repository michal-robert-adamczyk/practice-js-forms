document.addEventListener('DOMContentLoaded', init);

function init() {

    const rangeEl = document.querySelector('[type="range"]');
    const colorEl = document.querySelector('[type="color"]');
    rangeEl.setAttribute('min', '0,0');
    rangeEl.setAttribute('max', '1,0');

    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');



    rangeEl.addEventListener('mousemove', setValue);
    rangeEl.addEventListener('change', setValue);
    colorEl.addEventListener('change', setValue);


    function setValue(e) {
        const isMouseMoveEvent = e.type === 'mousemove';
        const isMouseLeftButtonPress = e.buttons === 1;
        if (
            isMouseMoveEvent && isMouseLeftButtonPress ||
            !isMouseMoveEvent
        ) {
            const opacity = rangeEl.value;
            const color = colorEl.value;
            console.log(opacity);
            console.log(color);

        }
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