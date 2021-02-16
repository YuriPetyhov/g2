//Задача 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

const user = {
    name: "John"
  };
user.name = "Pete"; //работает, т.к. объявление объекта как константы защищает от изменения сам объект, а значения свойств можно менять


//Задача 2
let obj = {
	a: 1
}
//вариант через for
let newObj = {};
for (let key in obj) {
    newObj[key] = obj[key];
}
obj.a = 2;
console.log(newObj.a); //1
//вариант через Object.assign
let newObj = Object.assign({}, obj);
obj.a = 2;
console.log(newObj.a); //1


//Задача 3
let user = {
	name: 'Vasa',
	surname: 'Petrov'
}

let user_2 = {
	name: 'Kirill',
	surname: 'Vasiliev'
}

function hello() {
	alert(`Hello! I am ${this.name} ${this.surname}`);
}

user.hello = hello;
user_2.hello = hello;

user.hello(); // Должно вывести Vasa Petrov
user_2.hello(); //  Должно вывести Kirill Vasiliev