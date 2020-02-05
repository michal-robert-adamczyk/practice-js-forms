// 3. Const dla każdego potrzebnego pola
// 4. nazwaElementu.noValidate = true (może pętlą to zrobię)
// 5. event listener dla submit i preventDfault
// 6. zrobić if dla każdego pola 
// if (!NazwaFunkcjiValidującejPole(NazwaElementuValidowanego)) {
//     co ma się stać jeżeli walidacja zakończy się fiaskiem;
//     };
// 7. Zrobić informację, że wszystko wprowadzono prawidłowo
document.addEventListener('DOMContentLoaded', init);

function init() {
    // 3. Const dla każdego potrzebnego pola
    const firstNameEl = document.querySelector('[name="firstName"]');
    console.log(firstNameEl);
    const lastNameEl = document.querySelector('[name="lastName"]');
    console.log(lastNameEl);
    const streetEl = document.querySelector('[name="street"]');
    console.log(streetEl);
    const houseNumberEl = document.querySelector('[name="houseNumber"]');
    console.log(houseNumberEl);
    const flatNumberEl = document.querySelector('[name="flatNumber"]');
    console.log(flatNumberEl);
    const zipEl = document.querySelector('[name="zip"]');
    console.log(zipEl);
    const cityEl = document.querySelector('[name="city"]');
    console.log(cityEl);
    const voivodeshipEl = document.querySelector('[name="voivodeship"]');
    console.log(voivodeshipEl);
    const submitEl = document.querySelector('[type="submit"]');
    console.log(submitEl);
}