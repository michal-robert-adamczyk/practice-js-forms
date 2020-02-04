document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorEl = document.querySelector('input');
    colorEl.addEventListener('change', changeBGColor);

    function changeBGColor(e) {
        const body = document.body;
        const color = e.target.value;
        body.style.backgroundColor = color;
        // ?? dlaczego używam niezdefiniowanej funkcji i nie pojawia się komunikat w console logu??
        // ?? Czy to nie ma znaczenia??
        // ?? Czy to, że jest tutaj "color" wynika z tego, żę w funkcji niżej jest on wynikiem return??
        body.style.color = invertColor(color);
    }

    // ??dlaczego tutaj w nawiasie jest hex a wyżej colo??
    function invertColor(hex) {
        // ?? dlaczego let, a nie const?? - bo można let nadpisywać, a const nie!!
        // ?? dlaczego tutaj jest #, domyślam się, że pobiera to jakoś wartość z inputu ale jak??
        let color = "#"

        // zaczyna pętle od i=1 i pobiera dwie liczby od i czyli i oraz następną
        // jest 6 i w sumie
        // każda kolejna pętla zaczyna się od co drugiego i
        // pętla wykonuje się trzy razy
        for (let i = 1; i <= 6; i = i + 2) {
            //?? Czy to oblicza kolor przeciwny, czy kolor który ma RGB maksymalne pomniejszone o wybrane??
            const dec = 255 - parseInt(hex.substr(i, 2), 16);

            // zabezpieczenie przed brakiem zera po konwersji
            // ?? jak to działa ??
            color += (dec < 16 ? '0' : '') + dec.toString(16);
        }
        return color;
    }
}