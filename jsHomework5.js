// Вывод на экран значений выражений
let a = "" + 1 + 0;
alert(a);
let b = "" - 1 + 0;
alert(b);
let c = true + false;
alert(c);
let d = 6 / '3';
alert(d);
let e = '2' * '3';
alert(e);
let f = 4 + 5 + 'px';
alert(f);
let g = '$' + 4 + 5;
alert(g);
let h = '4' - 2;
alert(h);
let i = '4px' - 2;
alert(i);
let j = 7 / 0;
alert(j);
let k = '-9' + 5;
alert(k);
let l = '-9' - 5;
alert(l);
let m = null + 1;
alert(m);
let n = undefined + 1;
alert(n);
let o = ' \t \n/' - 2;
alert(o);

// что сработает ?
let num = 10;
if (num == 10) {
    alert('Верно');
} else {
    alert('Неверно');
}
// Сработает  'Верно' ( а как по другому то!)