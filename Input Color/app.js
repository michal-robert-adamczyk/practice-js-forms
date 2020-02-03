document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorEl = document.querySelector('input');
    colorEl.addEventListener('change', changeBGColor);

    function changeBGColor(e) {
        const body = document.body;
        const color = e.target.value;
        body.style.backgroundColor = color;
        // ?? dlaczego używam niezdefiniowanej funkcji i nie pojawia się komunikat w console logu??
        body.style.color = invertColor(color);
    }

    function invertColor(hex) {
        // ?? dlaczego let, a nie const??
        let color = "#"
        for (let i = 1; i <= 6; i = i + 2) {
            const dec = 255 - parseInt(hex.substr(i, 2), 16);
            color += (dec < 16 ? '0' : '') + dec.toString(16);
        }
        return color;
    }
}