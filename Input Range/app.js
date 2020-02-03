const init = function() {
    const defaultRangeValue = 40;
    const spanEl = document.querySelector('span');
    const rangeEl = document.querySelector('input');
    rangeEl.addEventListener('mousemove', showValue);
    rangeEl.addEventListener('change', showValue);
    spanEl.innerText = defaultRangeValue;
    rangeEl.value = defaultRangeValue;

    function showValue(e) {
        const isMouseMoveEvent = e.type === 'mousemove';
        const isMouseLeftButtonPress = e.buttons === 1;
        if (
            isMouseMoveEvent && isMouseLeftButtonPress ||
            !isMouseMoveEvent
        ) {
            spanEl.innerText = e.target.value;
        }
    }
};
document.addEventListener('DOMContentLoaded', init);