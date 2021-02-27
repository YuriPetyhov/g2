//Задача 1
/*Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней 
days.*/

//Задача 1 - реализация через конструктор объектов для одного работника
function Worker (n, s, r, d) {
    this.name = n,
    this.surname = s,
    this.rate = r,
    this.days = d,
    this.getSalary = function () {
        return d * r;
    } 
};

let worker = new Worker ('Иван', 'Иванов', 245, 28);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());


//Задача 1 - реализация через конструктор объектов для создания списка работников
function Worker (n, s, r, d) {
    this.name = n,
    this.surname = s,
    this.rate = r,
    this.days = d,
    this.getSalary = function () {
        return this.salary = Math.floor(d * r);
     } 
};

let names = ['Иван', 'Петр', 'Александр', 'Сергей', 'Алексей', 'Николай', 'Владимир', 'Павел', 'Иннокентий', 'Евгений'];
let surnames = ['Иванов', 'Петров', 'Сидоров', 'Сергеев', 'Андреев', 'Егоров', 'Николаев'];
let rates = [245.00, 348.50, 420.10, 145.20, 310.40, 580.00, 470.80, 290.30, 605.00];
let days = [20, 21, 22, 23, 24, 25, 26];

let pickRandomName = (names) => names[Math.floor(Math.random() * names.length)];
let pickRandomSurname = (surnames) => surnames[Math.floor(Math.random() * surnames.length)];
let pickRandomRate = (rates) => rates[Math.floor(Math.random() * rates.length)];
let pickRandomDay = (days) => days[Math.floor(Math.random() * days.length)];

let workers = [];

for(let i = 0; i < 10; i++) {
    n = pickRandomName(names);
    s = pickRandomSurname(surnames);
    r = pickRandomRate(rates);
    d = pickRandomDay(days);
    let worker = new Worker (n, s, r, d);
    worker.getSalary();
    workers.push(worker);
}

console.log(workers);


//Задача 1 - реализация через классы для одного рабочего
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker = new Worker ('Иван', 'Иванов', 350, 28);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());


//Задача 1 - реализация через классы для создания списка работников
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days
    }

    getSalary() {
        this.salary = Math.floor(this.rate * this.days);
    }
}

let names = ['Иван', 'Петр', 'Александр', 'Сергей', 'Алексей', 'Николай', 'Владимир', 'Павел', 'Иннокентий', 'Евгений'];
let surnames = ['Иванов', 'Петров', 'Сидоров', 'Сергеев', 'Андреев', 'Егоров', 'Николаев'];
let rates = [245.00, 348.50, 420.10, 145.20, 310.40, 580.00, 470.80, 290.30, 605.00];
let days = [20, 21, 22, 23, 24, 25, 26];

let pickRandomName = (names) => names[Math.floor(Math.random() * names.length)];
let pickRandomSurname = (surnames) => surnames[Math.floor(Math.random() * surnames.length)];
let pickRandomRate = (rates) => rates[Math.floor(Math.random() * rates.length)];
let pickRandomDay = (days) => days[Math.floor(Math.random() * days.length)];

let workers = [];

for(let i = 0; i < 10; i++) {
    n = pickRandomName(names);
    s = pickRandomSurname(surnames);
    r = pickRandomRate(rates);
    d = pickRandomDay(days);
    let worker = new Worker (n, s, r, d);
    worker.getSalary();
    workers.push(worker);
}

console.log(workers); 



//Задача 2
/*Модифицируйте класс Worker из предыдущей задачи следующим образом: 
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.*/

//Задача 2 - реализация через конструктор объектов для одного работника
function Worker (n, s, r, d) {
    this._name = n,
    this._surname = s,
    this._rate = r,
    this._days = d,

    this.getSalary = function() {
        return Math.floor(this._days * this._rate);
    },

    this.getName = function() {
        return this._name;
    },

    this.getSurname = function() {
        return this._surname;
    },

    this.getRate = function() {
        return this._rate;
    },

    this.getDays = function() {
        return this._days;
    },

    this.setName = function(value) {
        this._name = value;
    },

    this.setSurname = function(value) {
        this._surname = value;
    },

    this.setRate = function(value) {
        this._rate = value;
    },

    this.setDays = function(value) {
        this._days = value;
    }
};

let worker = new Worker ('Иван', 'Иванов', 350, 30);
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getSalary());

worker.setName('Петр');
worker.setSurname('Петров');
worker.setDays(10);
worker.setRate(300);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getSalary());


//Задача 2 - реализация через конструктор объектов для создания списка работников
let names = ['Иван', 'Петр', 'Александр', 'Сергей', 'Алексей', 'Николай', 'Владимир', 'Павел', 'Иннокентий', 'Евгений'];
let surnames = ['Иванов', 'Петров', 'Сидоров', 'Сергеев', 'Андреев', 'Егоров', 'Николаев'];
let rates = [245.00, 348.50, 420.10, 145.20, 310.40, 580.00, 470.80, 290.30, 605.00];
let days = [20, 21, 22, 23, 24, 25, 26];

function Worker () {
    this.setName = function ()  {
        this._name = names[Math.floor(Math.random() * names.length)];
    },
    this.setSurname = function () {
        this._surname = surnames[Math.floor(Math.random() * surnames.length)];
    },
    this.setRate = function () {
        this._rate = rates[Math.floor(Math.random() * rates.length)];
    },
    this.setDays = function () {
        this._days = days[Math.floor(Math.random() * days.length)];
    },
    this.setSalary = function () {
        this._salary = Math.floor(this._days * this._rate);
    } 
};

let workers = [];

for(let i = 0; i < 10; i++) {
    let worker = new Worker();
    worker.setName();
    worker.setSurname();
    worker.setRate();
    worker.setDays();
    worker.setSalary();
    workers.push(worker);
}

console.log(workers);


//Задача 2 - реализация через классы для одного рабочего
class Worker {
    constructor(name, surname, rate, days) {
        this._name = name,
        this._surname = surname,
        this._rate = rate,
        this._days = days
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getSalary() {
        return Math.floor(this._rate * this._days);
    }

    setName(value) {
        this._name = value;
    }

    setSurname(value) {
        this._surname = value;
    }

    setRate(value) {
        this._rate = value;
    }

    setDays(value) {
        this._days = value;  
    }
}

let worker = new Worker ('Иван', 'Иванов', 350, 28);
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getSalary());

worker.setName('Петр');
worker.setSurname('Петров');
worker.setDays(10);
worker.setRate(300);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getSalary());


//Задача 2 - реализация через классы для создания списка работников
let names = ['Иван', 'Петр', 'Александр', 'Сергей', 'Алексей', 'Николай', 'Владимир', 'Павел', 'Иннокентий', 'Евгений'];
let surnames = ['Иванов', 'Петров', 'Сидоров', 'Сергеев', 'Андреев', 'Егоров', 'Николаев'];
let rates = [245.00, 348.50, 420.10, 145.20, 310.40, 580.00, 470.80, 290.30, 605.00];
let days = [20, 21, 22, 23, 24, 25, 26];

class Worker {
    constructor(name, surname, rate, days, salary) {
        this._name = name,
        this._surname = surname,
        this._rate = rate,
        this._days = days
        this._salary = salary
    }

    setName(value) {
        this._name = names[Math.floor(Math.random() * names.length)];
    }

    setSurname(value) {
        this._surname = surnames[Math.floor(Math.random() * surnames.length)];
    }

    setRate(value) {
        this._rate = rates[Math.floor(Math.random() * rates.length)];
    }

    setDays(value) {
        this._days = days[Math.floor(Math.random() * days.length)];
    }

    setSalary(value) {
        this._salary = Math.floor(this._rate * this._days);
    }
}

let workers = [];

for(let i = 0; i < 10; i++) {
    let worker = new Worker ();
    worker.setName(names);
    worker.setSurname(surnames);
    worker.setRate(rates);
    worker.setDays(days);
    worker.setSalary();
    workers.push(worker);
}

console.log(workers); 



//Задача 3
/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной, 
и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
    
    constructor(str) {
        this.str = str;
    }
    
    reverse() {
        this.str = prompt('Напишите что-нибудь', '');

        this.reversedString = this.str[this.str.length - 1];
        for(let i = 2; i <= this.str.length; i++) {
            this.reversedString += this.str[this.str.length - i];
        }
        alert(this.reversedString);
    }

    ucFirst() {
        this.str = prompt('Введите слово', '');
        this.upperFrstLetter = this.str[0].toUpperCase();
        for(let i = 1; i <= this.str.length - 1; i++) {
            this.upperFrstLetter += this.str[i];
        }
        alert(this.upperFrstLetter);
    }

    ucWords() {
        this.str = prompt('Введите строку', '');
        this.upperFrstLetterWords = this.str[0].toUpperCase();
        for(let i = 1; i <= this.str.length - 1; i++) {
            if(this.str[i - 1] === ' ') {
                this.upperFrstLetterWords += this.str[i].toUpperCase();
                    continue;
            }
            this.upperFrstLetterWords += this.str[i];
        }
        alert(this.upperFrstLetterWords);
    }
}

let string = new MyString();
string.reverse();
string.ucFirst();
string.ucWords();



//Задача 4
/*Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail, который параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие 
 методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона*/

 class Validator {
    constructor(str) {
        this.str = str;
    }

    checkSpace() {
        if(this.str.indexOf(' ') !== -1) 
        alert('Строка не должна содержать пробелы!');
    }

    checkUnallowedSymbols() {
        let uaSymbols = ['!','"', '\'', '№', ';', '%', ':', '?', '*', '#', '$', '^', '&', '=', '+', '\\', '\|', '\/', '<', '>', '{', '}', '[', ']', '(', ')'];      
        outer: for(let i = 0; i <= this.str.length - 1; i++) {
            for(let j = 0; j <= uaSymbols.length - 1; j++) {
                if(this.str.indexOf(uaSymbols[j]) !== -1) {
                    alert('Строка содержит недопустимые символы!');
                    break outer;
              }
              else continue;
            }
        }
    }
   
    isEmail() {
        this.str = prompt('Введите e-mail', '');

        this.checkSpace(this.str); //проверяем, что строка не содержит пробелов
        this.checkUnallowedSymbols(this.str); //проверяем, что строка не содержит спецсимволов
        
        this.count = 0;
        this.mailNum = this.str.indexOf('@');
            while(this.mailNum !== -1) {
                this.count++;
                this.mailNum = this.str.indexOf('@', this.mailNum + 1);
            } //проверяем количество @ в строке

        if((this.count !== 1) || (this.str.indexOf('@') === 0) || (this.str.indexOf('@') > this.str.length - 6)) {
            alert('Неправильный формат e-mail'); //если количество @ в строке > 1, или @ находится в начале строки, или @ находится в конце строки так, что не остается min количества символов для домена
        } else if(this.str.indexOf('.') <= this.str.length - 3 && this.str.indexOf('.') > this.str.indexOf('@') + 1) {
            alert('OK!'); //проверяем, что на домен после . остаётся min два символа и что между @ и . есть min символ
        } else {
            alert('Введен неверный формат домена!');
        }
    }

    isDomain() {
        this.str = prompt('Введите домен в формате \'name.domain\', имя домена не может содержать пробелы и спецсимволы !"№;%:?*#$^&{}][()', '');
        
        this.checkSpace(this.str); //проверяем, что строка не содержит пробелов
        this.checkUnallowedSymbols(this.str); //проверяем, что строка не содержит спецсимволов

            if(this.str.indexOf('.') <= this.str.length - 3 && this.str.indexOf('.') >= this.str.length - 6) {
                alert('OK!'); //проверяем длину domain - min два символа и max пять
            } else {
                alert('Введен неверный формат домена!');
            }
        }

    isYear() {
        this.year = +this.str.slice(6, 10); //проверяем, что год - это число больше 0
        if((isNaN(this.year)) || (this.year <= 0)) {
            alert('Неверно введен год');
        }
    }

    isMonth() {
        this.month = +this.str.slice(3, 5); //проверяем, что месяц - это число от 1 до 12
        if((isNaN(this.month)) || (this.month <= 0) || (this.month > 12)) {
            alert('Неверно введен месяц');
        }
    }

    isDay() {
        this.day = +this.str.slice(0, 2); //проверяем, что день - это число от 1 до 31
            if((isNaN(this.day)) || (this.day <= 0) || (this.day >= 32)) {
                alert('Вы уверены, что правильно ввели день?');
            } else {
                switch(this.month) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        if((this.day >= 0) && (this.day <=31)) alert('OK!');
                        else alert('Вы уверены, что правильно ввели день?');
                        break;

                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        if((this.day >= 0) && (this.day <=30)) alert('OK!');
                        else alert('Вы уверены, что правильно ввели день?');
                        break;

                    case 2:
                        if((this.day >= 0) && (this.day <=28)) alert('OK!');
                        else alert('Вы уверены, что правильно ввели день?');
                        break;
                }
            }
        }
    
    isDate() {
    this.str = prompt('Введите дату в формате ДД.ММ.ГГГГ', 'ДД.ММ.ГГГГ');

        if((this.str.length !== 10) || (this.str.indexOf('.') !== 2) || (this.str.lastIndexOf('.') !== 5)) {
            alert('Проверьте правильность формата введенной даты!'); //проверяем, что строка введена в нужном формате
        } 
        
        this.isYear(this.str);
        this.isMonth(this.str);
        this.isDay(this.str);
    }

    isPhone() {
        this.str = prompt('Введите номер телефона в формате +375(29)XXX-XX-XX', '+375(29)XXX-XX-XX');

        if((this.str.length !== 17) || (this.str.slice(0, 8) !== '+375(29)') ||
            (this.str.indexOf('-') !== 11) || (this.str.lastIndexOf('-') !== 14)) {
            alert('Упс! Что-то не так с форматом номера телефона'); //проверяем, что номер введен в нужном формате
        } else {
            this.number = +this.str.slice(8, 11) + +this.str.slice(12, 14) + +this.str.slice(15, 17); //проверяем, что номер телефона введен в числовом формате
            if((isNaN(this.number)) || (this.nember <= 0)) {
                alert('Вы уверены, что правильно ввели номер телефона?');
            } else {
                alert('OK!');
            }
        }
    }
}

let validator = new Validator();
validator.isEmail();
validator.isDomain();
validator.isDate();
validator.isPhone();



//Задача 5
/*В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода?*/
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};
alert( rabbit.jumps ); // (1) возвращается значение true, т.к. в первую очередь проверяются свойства объекта rabbit;
delete rabbit.jumps;
alert( rabbit.jumps ); // (2) возвращается значение null, т.к. свойство jumps объекта rabbit было удалено, след-но возвращается свойство, наследуемое от прототипа (в данном случае это animal)
delete animal.jumps;
alert( rabbit.jumps ); // (3) возвращается значение undefined, т.к. свойство jumps прототипа animal также было удалено



//Задача 6
/*Задача состоит из двух частей. У нас есть объекты.
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: 
pockets > bed > table > head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).*/
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
console.log(pockets.pillow);
console.log(table.glasses);

/*Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их.
Первый раз быстрее получить значение glasses через head.glasses (прямой поиск), т.к. для pockets.glasses будет цепочка поиска pockets > bed > table > head.
Дальше - без разницы, т.к. движок запомнит, где было найдено свойство glasses (в head) и будет обращаться к нему напрямую, минуя цепочку поиска*/



//Задача 7
/*Объект rabbit наследует от объекта animal.
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?*/
let animal = {
  eat() {
    this.full = true;
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.eat();
/*свойство full получит объект rabbit, т.к. значение this вычисляется во время выполнения кода, при этом в this записывается объект "перед точкой",
т.е. тот, который вызывается с данным методом. В нашем случае это rabbit*/   



//Задача 8
/*У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?*/
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
/*У ленивого хомяка есть еда, т.к. он вместе с шустрым хомяком наследует свойство stomach и метод eat от общего объекта hamster.
Чтобы наедался только шустрый хомяк можно убрать наследование  __proto__: hamster для ленивого хомяка (тогда при вызов alert( lazy.stomach ); вернет undefined).
Но при этом ленивый хомяк будет всегда голодный, т.к. метод eat(food) для него станет недоступным :(
Лучший вариант не заморить ленивого хомяка голодом - сделать каждому хомяку свой живот stomach, т.к. в исходном коде они оба наследуют его от прототипа (что странненько).*/
//исправляем код:
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
speedy.eat("big apple");
alert( speedy.stomach ); // шустрый хомяк слопал big apple
alert( lazy.stomach ); // ленивый хомяк остался голодным :(
lazy.eat("grape");
alert( lazy.stomach ); //теперь наелся и ленивый хомяк



//Задача 9
/*Каким будет результат выполнения этого кода?*/
let user = {
  name: "Джон",
  go: function() { alert(this.name) }
};
(user.go)() //ошибка, т.к. отсутствует точка с запятой перед (user.go)()
/* подвох в том, что в первую очередь обращаешь внимание на (user.go)() и решаешь, что здесь лишние скобки и вызов метода для объекта user должен выглядеть как user.go()
И да, действительно, код с user.go() срабатывает и без точки с запятой после объявления объекта :)
И вот здесь возникает нюанс. 
Почему с (user.go)() не срабатывает без точки с запятой перед ней, я (с помощью lear.javascript) разобралась.
Но вот почему код с user.go() срабатывает даже без ; после объекта user - правильно ли я понимаю, что в таком вот коде:
let user = {
name: "Джон",
go: function() { alert(this.name) }
}
user.go() 
происходит инициализация объекта user {}, а потом всё же вызов метода go() этого объекта?*/



//Задача 10
/*Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?*/
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};
let user = makeUser();
alert( user.ref.name ); /* Результат - ошибка, т.к само по себе ключевое слово this не содержит значения и вызывается в контексте объекта;
при попытке присвоить свойству значение this (как в данном случае ref: this), this принимает значение undefined*/



//Задача 11
/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.*/

function Calculator () {
    this.read = function () {
        this.num1 = +prompt('Введите первое число', ''),
        this.num2 = +prompt('Введите второе число', '')
    },
    this.sum = function () {
        return this.num1 + this.num2;
    },
    this.mul = function () {
        return this.num1 * this.num2;
    }
};

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );