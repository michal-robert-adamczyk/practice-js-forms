// 2. tworzę funkcje init, do której wkładam wszystko co ma się stać po załadowaniu DOM
const init = function() {

    // 3. tworzę potrzebne mi zmienne
    const defaultRangeValue = 40;
    const spanEl = document.querySelector('span');
    const rangeEl = document.querySelector('input');
    // 4. tworzę nasłuchwianie dla zmiennych 
    // funkcje, które nasłuchiwanie ma uruchomić robię później
    rangeEl.addEventListener('mousemove', showValue);
    rangeEl.addEventListener('change', showValue);
    // 5. przypisuję domyślne wartości dla elementów span i range
    spanEl.innerText = defaultRangeValue;
    rangeEl.value = defaultRangeValue;

    // 6. tworzę funkcję, która przypisuje wartość z range do span
    function showValue(e) {
        // typ eventu to 'mousemove
        const isMouseMoveEvent = e.type === 'mousemove';
        // podczas eventu wciśnięty jest przycisk myszy
        const isMouseLeftButtonPress = e.buttons === 1;
        if (
            // ?? kiedy event ruchu występuje razem z wcisnięciem myszy
            // ?? albo kiedy jest dowolny event
            // ?? czy to oznacza, że cokolwiek się stanie, to wartość zostanie przypisana do span??            
            isMouseMoveEvent && isMouseLeftButtonPress ||
            !isMouseMoveEvent
        ) {
            // ??przypisuję elementowi span wartość tego na czym byl event            
            spanEl.innerText = e.target.value;
        }
    }
};
// 1. ustawiam nasłuchiwanie dla eventu DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);