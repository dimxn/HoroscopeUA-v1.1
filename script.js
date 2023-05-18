document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    const horoscope = async (number) => {
        try {
            const response = await fetch(`https://horoscopeuaapi--dimxn.repl.co/?number=${number}`, {
                method: "get",
            });
            const data = await response.json();
            return data.horoscopeText;
        } catch (err) {
            console.log(err);
            return "Спробуйте, ще раз";
        }
    };

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const validator = (input, maxNumber) => {
        input.addEventListener('input', (e) => {
            const { value } = e.target;
            if (Number(value) > maxNumber) {
                input.value = maxNumber.toString();
            }
        })
    };
    validator(dayInput, 31);
    validator(monthInput, 12);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        document.querySelector(".horoscope").innerHTML = '<div class="loading"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><p>Шукаю гороскоп</p></div>';
        let load = document.querySelector('.loading');

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

        const displayHoroscope = (zodiac, horoscopeText, img) => {
            return `<div class=\"result\">
            <h2 class=\"result__title\">Ваш знак зодіаку:</h2>
            <div class=\"horoscope__title\">${zodiac}</div>
            <div class=\"horoscope__img\">
                <img src=\"${img}\" alt=\"horoscope\">
            </div>
            <div class=\"horoscope__text\">
                <p>${horoscopeText}</p>
            </div>
        </div>`;
        }

        let day = Number(document.getElementById('day').value),
            month = Number(document.getElementById('month').value);

        switch (month) {
            case 1:
                document.querySelector(".horoscope").innerHTML = day <= 19 ? displayHoroscope('Козеріг', await horoscope(10), img['Козеріг']) : displayHoroscope('Водолій', await horoscope(11), img['Водолій']);
                break;
            case 2:
                document.querySelector(".horoscope").innerHTML = day <= 18 ? displayHoroscope('Водолій', await horoscope(11), img['Водолій']) : displayHoroscope('Риби', await horoscope(12), img['Риби']);
                break;
            case 3:
                document.querySelector(".horoscope").innerHTML = day <= 20 ? displayHoroscope('Риби', await horoscope(12), img['Риби']) : displayHoroscope('Овен', await horoscope(1), img['Овен']);
                break;
            case 4:
                document.querySelector(".horoscope").innerHTML = day <= 19 ? displayHoroscope('Овен', await horoscope(1), img['Овен']) : displayHoroscope('Телець', await horoscope(2), img['Телець']);
                break;
            case 5:
                document.querySelector(".horoscope").innerHTML = day <= 20 ? displayHoroscope('Телець', await horoscope(2), img['Телець']) : displayHoroscope('Близнюки', await horoscope(3), img['Близнюки']);
                break;
            case 6:
                document.querySelector(".horoscope").innerHTML = day <= 21 ? displayHoroscope('Близнюки', await horoscope(3), img['Близнюки']) : displayHoroscope('Рак', await horoscope(4), img['Рак']);
                break;
            case 7:
                document.querySelector(".horoscope").innerHTML = day <= 22 ? displayHoroscope('Рак', await horoscope(4), img['Рак']) : displayHoroscope('Лев', await horoscope(5), img['Лев']);
                break;
            case 8:
                document.querySelector(".horoscope").innerHTML = day <= 22 ? displayHoroscope('Лев', await horoscope(5), img['Лев']) : displayHoroscope('Діва', await horoscope(6), img['Діва']);
                break;
            case 9:
                document.querySelector(".horoscope").innerHTML = day <= 22 ? displayHoroscope('Діва', await horoscope(6), img['Діва']) : displayHoroscope('Терези', await horoscope(7), img['Терези']);
                break;
            case 10:
                document.querySelector(".horoscope").innerHTML = day <= 22 ? displayHoroscope('Терези', await horoscope(7), img['Терези']) : displayHoroscope('Скорпіон', await horoscope(8), img['Скорпіон']);
                break;
            case 11:
                document.querySelector(".horoscope").innerHTML = day <= 21 ? displayHoroscope('Скорпіон', await horoscope(8), img['Скорпіон']) : displayHoroscope('Стрілець', await horoscope(9), img['Стрілець']);
                break;
            case 12:
                document.querySelector(".horoscope").innerHTML = day <= 21 ? displayHoroscope('Стрілець', await horoscope(9), img['Стрілець']) : displayHoroscope('Козеріг', await horoscope(10), img['Козеріг']);
                break;
            default:
                document.querySelector(".horoscope").innerHTML = '<div class="error"><div class="error__img"><i class="fas fa-ban"></i></div><h1 class="error__title">Помилка: Введіть вірні данні</h1></div>';
        }

        load.classList.add('hide')
        setTimeout(() => {
            load.remove()
        }, 1200);
    });
})