
// #1 Задача
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
let user = {};
// Добавьте свойство name со значением John.
let user = {};
user.name = 'John';
// Добавьте свойство surname со значением Smith.
let user = {};
user.name = 'John';
user.surname = 'Smith';
// Измените значение свойства name на Pete.
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
// Удалите свойство name из объекта.
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// #1.2
const user = {
   name: "John"
};

// это будет работать?
user.name = "Pete";
//? Да, будет работать, хоть и создали константу


// #2 Задача

let obj = {
   a: 1
}

let newObj = obj;

// сделайте так что бы obj.a = 2 не изменило newObj.a

let obj = {
   a: 1,
}

let newObj = {};

for (let key in obj) {
   newObj[key] = obj[key];
}

//#3 Задача Создайте универсальный метод (this) который вы будете передавать в обьект и он будет выводить имя и фамилию 

let user = {
   name: 'Vasa',
   surname: 'Petrov'
}

let user_2 = {
   name: 'Kirill',
   surname: 'Vasiliev'
}

// метод 

// function hello() {
// здесь ваш код
// }

// user.helo = helo;
// user_2.helo = helo;

// user.helo(); 
// Должно вывести Vasa Petrov
// user_2.helo(); 
//  Должно вывести Kirill 'Vasiliev'



let user = {
   name: 'Vasa',
   surname: 'Petrov'
};

let user_2 = {
   name: 'Kirill',
   surname: 'Vasiliev'
};

user.hello = function () {
   console.log(`${this.name} ${this.surname}`)
};
user.hello();

user_2.hello = function () {
   console.log(`${this.name} ${this.surname}`)
};
user_2.hello();