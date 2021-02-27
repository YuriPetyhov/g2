'use strict'


// Напишите код, выполнив задание из каждого
// пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
let user = {};
user.name = 'John';
user.surmame = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);









// Создайте универсальный метод (this)
// который вы будете передавать в обьект
// и он будет выводить имя и фамилию
let user2 = {
   name: 'Fedja',
   age: 23,
   surname: 'Chuvachkov'
};

let user3 = {
   name: 'Egor',
   age: 65,
   surname: 'Starikovski'
};

user2.hi = function() {
   console.log(user2.name, user2.age, user2.surname);
}


user3.hil = function() {
   console.log(user3['name'], user3['age'], user3['surname']);
}


user2.hi();
user3.hil();
console.log(`Hi, ${user2.name}! Did you have ${user2.age} years old?`);






// let obj = {
// 	a: 1
// }
// let newObj = obj;
// сделайте так что бы obj.a = 2
// не изменило newObj.a
let tictoc = {
   a: 59,
   f: 8455
}

let newTictoc = Object.assign({}, tictoc);
tictoc.a = 'hgfjhgf'; // тут
console.log(newTictoc);