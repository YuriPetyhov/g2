//Задача 1
let admin;
let name = 'Джон';
admin = name;
alert('admin');

//Задача 2
const Earth;
let userName;

//Задача 3
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let str = 'Привет, мир!';
console.log(str);

//Задача 4
let val1 = "" + 1 + 0; //'10'
console.log(val1);
let val2 = "" - 1 + 0; //-1
console.log(val2);
let val3 = true + false; //1
console.log(val3);
let val4 = 6 / "3"; //2
console.log(val4);
let val5 = "2" * "3"; //6
console.log(val5);
let val6 = 4 + 5 + "px"; //'9px'
console.log(val6);
let val7 = "$" + 4 + 5; //'$45'
console.log(val7);
let val8 = "4" - 2; //2
console.log(val8);
let val9 = "4px" - 2; //NaN
console.log(val9);
let val10 = 7 / 0; //infinity
console.log(val10);
let val11 = "  -9  " + 5; // ' -9 5'
console.log(val11);
let val12 = "  -9  " - 5; // -14
console.log(val12);
let val13 = null + 1; //1
console.log(val13);
let val14 = undefined + 1; // NaN
console.log(val14);
let val15 = " \t \n" - 2; // -2
console.log(val15);

//Задача 5
let num = 10;
if(num == 10) {
    console.log('Верно'); //выполнится
} else {
    console.log('Неверно');
}

//Задача 6
let min = 59;
if(min >= 0 && min < 15) {
    console.log('Первая четверть часа');
} else if(min >= 15 && min < 30) {
    console.log('Вторая четверть часа');
} else if(min >= 30 && min < 45) {
    console.log('Третья четверть часа');
} else if(min >= 45 && min <= 59) {
    console.log('Четвертая четверть часа');
}

//Задача 7 вариант с is-else
let lang = 'en';
let country;
if(lang === 'ru') {
    console.log(country = 'русский');
} else if (lang === 'en') {
    console.log(country = 'английский');
}

//Задача 7 вариант с switch
let lang = 'ru';
let country;
switch (lang) {
    case ('ru') :
        console.log(country = 'русский');
        break;
    case ('en') :
        console.log(country = 'английский');
        break;
}