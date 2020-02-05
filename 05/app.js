// 7. Zrobić informację, że wszystko wprowadzono prawidłowo
document.addEventListener('DOMContentLoaded', init);

function init() {
    // ?? Jak to zrobić szybciej ??
    const formEl = document.querySelector('form');
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

    // ?? Jak to zrobić szybciej ??
    cityEl.formEl = true;
    firstNameEl.noValidate = true;
    lastNameEl.noValidate = true;
    streetEl.noValidate = true;
    houseNumberEl.noValidate = true;
    flatNumberEl.noValidate = true;
    zipEl.noValidate = true;
    cityEl.noValidate = true;
    voivodeshipEl.noValidate = true;

    function validateName(firstNameElValue) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(firstNameElValue);
    };

    function validateName(lastNameEl) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(lastNameEl);
    };


    function validateName(streetEl) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(streetEl);
    };

    function validateName(houseNumberEl) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(houseNumberEl);
    };

    function validateName(flatNumberEl) {
        // zmienić RegEx !
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(flatNumberEl);
    };

    function validateName(zipEl) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(zipEl);
    };

    function validateName(cityEl) {
        // zmienić RegEx !!
        const NamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return NamePattern.test(cityEl);
    };

    formEl.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstNameElValue = e.target.elements.firstName.value;
        console.log(firstNameElValue);

        if (!validateName(firstNameElValue)) {
            console.log('nieprawidłowa wartość');
            alert('To nie może być Twoje imie, nie kłam');

            // ?? jak zrobić zmienną, która będzie we wszystkich ifach i jeżeli w żadnym nie będzie miała wartości true, to pojawi się alert, że wszystko ok??
            // const error = true;
            // if (error = true) {
            //     console.log('błąd')
            // }

        }

    });




}