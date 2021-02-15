// Определение в какую четверть часа попадает заданное значение минут с выводом на экран
let min;
min = 50;
if (min >= 0 && min <= 14) {
    alert('В первую четверть.')
};
if (min >= 15 && min <= 29) {
    alert('Во вторую четверть.')
};
if (min >= 30 && min <= 44) {
    alert('В третью четверть.')
};
if (min >= 045 && min <= 59) {
    alert('В четвертую четверть.')
};

// Вывод в консоль значения переменной country  в зависимости от значения переменной lang
let lang;
lang = 'ru';
if (lang === 'ru') {
    let country = 'рус';
    alert(country);
};

if (lang === 'en') {
    let country = 'eng';
    alert(country);
};

let country;
switch (lang) {
    case 'ru':
        country = 'рус';
        console.log(country);
        break;
    case 'en':
        country = 'eng';
        console.log(country);
        break;
};

