// Создайте универсальный метод (this) который вы будете передавать в обьект и он будет выводить имя и фамилию

let user = {
    name: 'Vasya',
    surname: 'Petrov'
}
let user2 = {
    name: 'Kirill',
    surname: 'Vasiliev'
}
user.hello = function () {
    console.log(`${this.name} ${this.surname}`)
}
user2.hello = function () {
    console.log(`${this.name} ${this.surname}`)
}
user.hello();
user2.hello()