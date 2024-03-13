document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');

    const horoscope = async (number) => {
        try {
            const response = await fetch(`https://dimxn.pp.ua/horoscopeapi/?number=${number}`, {
                method: "get",
            });
            const data = await response.json();
            return data.horoscopeText;
        } catch (err) {
            console.log(err);
            return "Спробуйте, ще раз";
        }
    };

    const validator = (input, maxNumber) => {
        input.addEventListener('input', (e) => {
            const { value } = e.target;
            if (Number(value) > maxNumber) {
                input.value = maxNumber.toString();
            }
        });
    };

    validator(dayInput, 31);
    validator(monthInput, 12);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const horoscopeContainer = document.querySelector(".horoscope");
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('loading');
        loadingElement.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div><p>Шукаю гороскоп</p>';
        horoscopeContainer.innerHTML = '';
        horoscopeContainer.appendChild(loadingElement);

        const img = {
            'Діва': 'https://cdn-icons-png.flaticon.com/512/1994/1994953.png',
            'Козеріг': 'https://cdn-icons-png.flaticon.com/512/3184/3184956.png',
            'Водолій': 'https://cdn-icons-png.flaticon.com/512/47/47246.png',
            'Риби': 'https://cdn-icons-png.flaticon.com/512/47/47160.png',
            'Овен': 'https://cdn-icons-png.flaticon.com/512/47/47156.png',
            'Телець': 'https://cdn-icons-png.flaticon.com/512/47/47414.png',
            'Близнюки': 'https://cdn-icons-png.flaticon.com/512/47/47271.png',
            'Рак': 'https://cdn-icons-png.flaticon.com/512/47/47412.png',
            'Лев': 'https://cdn-icons-png.flaticon.com/512/47/47337.png',
            'Терези': 'https://cdn-icons-png.flaticon.com/512/47/47117.png',
            'Скорпіон': 'https://cdn-icons-png.flaticon.com/512/47/47128.png',
            'Стрілець': 'https://cdn-icons-png.flaticon.com/512/47/47039.png'
        };

        const displayHoroscope = (zodiac, horoscopeText, imgSrc) => {
            return `<div class="result">
                <h2 class="result__title">Ваш знак зодіаку:</h2>
                <div class="horoscope__title">${zodiac}</div>
                <div class="horoscope__img">
                    <img src="${imgSrc}" alt="horoscope">
                </div>
                <div class="horoscope__text">
                    <p>${horoscopeText}</p>
                </div>
            </div>`;
        };

        const day = Number(dayInput.value);
        const month = Number(monthInput.value);

        let zodiac = '';
        let horoscopeText = '';
        let imgSrc = '';

        switch (month) {
            case 1:
                zodiac = day <= 19 ? 'Козеріг' : 'Водолій';
                horoscopeText = await horoscope(day <= 19 ? 10 : 11);
                imgSrc = day <= 19 ? img['Козеріг'] : img['Водолій'];
                break;
            case 2:
                zodiac = day <= 18 ? 'Водолій' : 'Риби';
                horoscopeText = await horoscope(day <= 18 ? 11 : 12);
                imgSrc = day <= 18 ? img['Водолій'] : img['Риби'];
                break;
            case 3:
                zodiac = day <= 20 ? 'Риби' : 'Овен';
                horoscopeText = await horoscope(day <= 20 ? 12 : 1);
                imgSrc = day <= 20 ? img['Риби'] : img['Овен'];
                break;
            case 4:
                zodiac = day <= 19 ? 'Овен' : 'Телець';
                horoscopeText = await horoscope(day <= 19 ? 1 : 2);
                imgSrc = day <= 19 ? img['Овен'] : img['Телець'];
                break;
            case 5:
                zodiac = day <= 20 ? 'Телець' : 'Близнюки';
                horoscopeText = await horoscope(day <= 20 ? 2 : 3);
                imgSrc = day <= 20 ? img['Телець'] : img['Близнюки'];
                break;
            case 6:
                zodiac = day <= 21 ? 'Близнюки' : 'Рак';
                horoscopeText = await horoscope(day <= 21 ? 3 : 4);
                imgSrc = day <= 21 ? img['Близнюки'] : img['Рак'];
                break;
            case 7:
                zodiac = day <= 22 ? 'Рак' : 'Лев';
                horoscopeText = await horoscope(day <= 22 ? 4 : 5);
                imgSrc = day <= 22 ? img['Рак'] : img['Лев'];
                break;
            case 8:
                zodiac = day <= 22 ? 'Лев' : 'Діва';
                horoscopeText = await horoscope(day <= 22 ? 5 : 6);
                imgSrc = day <= 22 ? img['Лев'] : img['Діва'];
                break;
            case 9:
                zodiac = day <= 22 ? 'Діва' : 'Терези';
                horoscopeText = await horoscope(day <= 22 ? 6 : 7);
                imgSrc = day <= 22 ? img['Діва'] : img['Терези'];
                break;
            case 10:
                zodiac = day <= 22 ? 'Терези' : 'Скорпіон';
                horoscopeText = await horoscope(day <= 22 ? 7 : 8);
                imgSrc = day <= 22 ? img['Терези'] : img['Скорпіон'];
                break;
            case 11:
                zodiac = day <= 21 ? 'Скорпіон' : 'Стрілець';
                horoscopeText = await horoscope(day <= 21 ? 8 : 9);
                imgSrc = day <= 21 ? img['Скорпіон'] : img['Стрілець'];
                break;
            case 12:
                zodiac = day <= 21 ? 'Стрілець' : 'Козеріг';
                horoscopeText = await horoscope(day <= 21 ? 9 : 10);
                imgSrc = day <= 21 ? img['Стрілець'] : img['Козеріг'];
                break;
            default:
                horoscopeContainer.innerHTML = '<div class="error"><div class="error__img"><i class="fas fa-ban"></i></div><h1 class="error__title">Помилка: Введіть вірні дані</h1></div>';
                return;
        }

        const horoscopeHtml = displayHoroscope(zodiac, horoscopeText, imgSrc);
        horoscopeContainer.innerHTML = horoscopeHtml;

        loadingElement.classList.add('hide');
        setTimeout(() => {
            loadingElement.remove();
        }, 1200);
    });
});
