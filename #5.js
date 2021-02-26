/*#1.1 Задача 

Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
Вот так должен работать наш класс:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31*/

// Решение

class Worker {
   constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
   }
   getSalary = function () { return this.rate * this.days }
}
let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());



/*#1.2 Модифицируйте класс Worker из предыдущей задачи следующим образом: 
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. 
Наш класс теперь будет работать так:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31*/

// Решение

class Worker {
   constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
   }
   getSalary = function () { return this.rate * this.days };
   get getName() {
      return this.name;
   }

   get getSurname() {
      return this.surname;
   }

   get getRate() {
      return this.rate;
   }

   get getDays() {
      return this.days;
   }

}
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays);
console.log(worker.getSalary());



/*#1.3 Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10*/

// Решение

class Worker {
   constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
   }
   getSalary = function () { return this.rate * this.days };
   get getName() {
      return this.name;
   }
   get getSurname() {
      return this.surname;
   }
   get getRate() {
      return this.rate;
   }
   set getRate(val) {
      this.rate = val;
   }
   get getDays() {
      return this.days;
   }
   set getDays(val) {
      this.days = val;
   }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName);
console.log(worker.getSurname);
console.log(worker.getRate);
console.log(worker.getDays);
console.log(worker.getSalary());//310
worker.getRate = 20;
worker.getDays = 10;
console.log(worker.getSalary());//200



/*#2 Задача
Реализуйте класс MyString, который будет иметь следующие методы: 
метод reverse(), который параметром принимает строку, 
а возвращает ее в перевернутом виде, метод ucFirst(), 
который параметром принимает строку, а возвращает эту же строку,
сделав ее первую букву заглавной и метод ucWords, 
который принимает строку и делает заглавной первую букву каждого слова этой строки.

Наш класс должен работать так:

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'*/

// Решение:

class MyString {
   constructor(text) {
      this.text = text;
   }

   reverse(text) {
      let newStr = '';
      let w = '';
      for (let i = text.length - 1; i >= 0; i--) {
         w = text[i];
         newStr = newStr + w;
      }
      return newStr;
   }

   ucFirst(text) {
      let l = text.length;
      let a = (text[0].toUpperCase());
      let b = text.slice(1, l);
      return text = a + b;
   }

   ucWords(text) {
      let l = text.length;
      let a = (text[0].toUpperCase());
      let b = text.slice(1, l);
      text = a + b;
      for (let i = 0; i < l; i++) {
         if (text[i] == ' ') {
            let e = (text[i + 1].toUpperCase());
            let d = text.slice(0, i);
            let f = text.slice(i + 2, l);
            text = d + ' ' + e + f;
         }
      }
      return text;
   }
}

var str = new MyString();

console.log(str.reverse('мороз и солнце')); //выведет "ецнлос и зором"
console.log(str.ucFirst('день чудесный')); //выведет "День чудесный"
console.log(str.ucWords('не спи не спи не спи')); //выведет "Не Спи Не Спи Не Спи"



/*#3 Задача
Реализуйте класс Validator, который будет проверять строки. 
К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true, 
если не является - то false. Кроме того, класс будет иметь следующие методы: 
метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone 
для проверки телефона:

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны*/

// Решение:

class Validator {
   constructor(adr, dom, date, num) {
      this.adr = adr;
      this.dom = dom;
      this.date = date;
      this.num = num;
   }

   isEmail(adr) {

      let test1;
      let test2;
      let test3;
      if (adr.length > 5) {
         for (let i = 0; i <= adr.length; i++) {
            if (adr[i] == '@') {
               // console.log('Все Ок! @ есть');
               break;
            } else {
               if (i < adr.length) { continue; }
               else {
                  test1 = 'Нет @';
                  // console.log(test1);

               }
            }
         };
         for (let i = 0; i < adr.length - 2; i++) {
            if (adr[i] == '.') {
               // console.log('Все Ок! Точка есть');
               break;
            } else {
               if (i < adr.length - 3) { continue; }
               else {
                  test2 = 'Нет точки или неверный домен';
                  // console.log(test2);
               }

            }
         }
      }
      else {
         test3 = 'Слишком короткий адрес';
         // console.log(test3);
      };

      if (typeof (test1 & test2 || test3) == 'string') {
         return ('e-mail' + ' ' + false);


      }
      else {
         return ('e-mail' + ' ' + true);
      };

   };

   isDomain(dom) {
      let test1;
      let test2;

      if (dom.length > 4) {
         for (let i = 0; i < dom.length - 2; i++) {
            if (dom[i] == '.') {

               break;
            } else {
               if (i < dom.length - 3) { continue; }
               else {
                  test1 = 'Нет точки или неверный домен';

               }

            }
         }
      }
      else {
         test2 = 'Слишком короткое доменное имя';

      };

      if (typeof (test1 || test2) == 'string') {
         return ('domain' + ' ' + false);
      }
      else {
         return ('domain' + ' ' + true);
      };
   };

   isDate(date) {

      let test1;
      let test2;
      let test3;
      let test4;
      if (date.length === 10) { test1 = true } else { test1 = false };
      let day = date[0] + date[1];
      if (day <= 31) { test2 = true } else { test2 = false };
      if (date[2] && date[5] == '.') { test3 = true }
      else { test3 = false };
      let mon = date[3] + date[4];
      if (mon <= '12') { test4 = true } else { test4 = false };
      if ((test1 && test2 && test3 && test4) == false) {
         return ('date' + ' ' + false);
      }
      else {
         return ('date' + ' ' + true);
      };
   }

   isPhone(num) {

      let test1;
      let test2;
      let test3;
      let test4;

      if (num.length === 19) { test1 = true } else { test1 = false };
      if (num.indexOf('+375 (', 0) == 0) { test2 = true } else { test2 = false };
      if (num.indexOf(') ', 8) == 8) { test3 = true } else { test3 = false };
      if ((num.indexOf('-', 13) == 13) & (num.indexOf('-', 16) == 16)) { test4 = true } else { test4 = false };
      if ((test1 && test2 && test3 && test4) == false) {
         return ('number' + ' ' + false);
      }
      else {
         return ('number' + ' ' + true);
      };

   }

}

var validator = new Validator();
console.log(validator.isEmail('phphtmlmail.ru'));
console.log(validator.isDomain('phphtmnet'));
console.log(validator.isDate('47.02.2220'));
console.log(validator.isPhone('+375 (249) 817-22-92'));



/*#4 Задача
В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода?
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};
alert( rabbit.jumps ); // ?
delete rabbit.jumps;
alert( rabbit.jumps ); // ?
delete animal.jumps;
alert( rabbit.jumps ); // ?

Должно быть 3 ответа.*/

1) true
2) null
3) undefined



/*#5 Задача
Задача состоит из двух частей.
У нас есть объекты:
let head = {
  glasses: 1
};
let table = {
  pen: 3
};
let bed = {
  sheet: 1,
  pillow: 2
};
let pockets = {
  money: 2000
};

С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets > bed > table > head. 
Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.*/


// Решение:

let head = {
   glasses: 1
};
let table = {
   pen: 3,
   __proto__: head
};
let bed = {
   sheet: 1,
   pillow: 2,
   __proto__: table
};
let pockets = {
   money: 2000,
   __proto__: bed
};
console.log(pockets.pen);
console.log(bed.glasses);

Первый раз быстрее через head.glasses, а дальше - без разницы.В JS что - то там запомнится и искать будет сразу где надо:)



/*#6 Задача
Объект rabbit наследует от объекта animal.
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
  eat() {
    this.full = true;
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.eat();*/

rabbit



/*#7 Задача
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};
let speedy = {
  __proto__: hamster
};
let lazy = {
  __proto__: hamster
};
// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
*/

// Решение

let hamster = {
   eat(food) {
      this.stomach.push(food);
   }
};
let speedy = {
   stomach: [],
   __proto__: hamster
};
let lazy = {
   stomach: [],
   __proto__: hamster
};
// Желудок теперь для каждого хомяка свой, а не общий
// Каждый ест отдельно
speedy.eat("apple");
speedy.eat("carrot");
lazy.eat("bread");

alert(speedy.stomach);
alert(lazy.stomach);


/*#8 Задача
Каким будет результат выполнения этого кода?
let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}
(user.go)()

P.S. Здесь есть подвох :)
*/

// Решение

Error будет.Надо поставить ";"
let user = {
   name: "Джон",
   go: function () { alert(this.name) }
};
(user.go)()

Теперь выведет "Джон"



/*#9 Задача
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? 
Почему?
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};
let user = makeUser();
alert( user.ref.name ); // Каким будет результат?*/

Казалось, что undefined.Но при проверке ругается.

/*#10 Задача
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.

Например:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

// Решение

class Calculator {
   constructor(a, b) {
      this.a = a;
      this.b = b;
   }
   read() {
      this.a = +prompt('Введите первое значение');
      this.b = +prompt('Введите второе значение3');
   }
   sum() {
      return (this.a + this.b);
   }
   mul() {
      return (this.a * this.b);
   }
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());