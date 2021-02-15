// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function week(d) {
    return d
}
let day = week(3);
switch (day) {
    case 1:
        console.log('понедельник');
        break;
    case 2:
        console.log('вторник');
        break;
    case 3:
        console.log('среда');
        break;
    case 4:
        console.log('четверг');
        break;
    case 5:
        console.log('пятница');
        break;
    case 6:
        console.log('суббота');
        break;
    case 7:
        console.log('воскресение');
        break;

    default:
        console.log('не день, а фигня какая-то!');

}

