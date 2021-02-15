// сделайте так что бы obj.a = 2 не изменило newObj.a

let obj = {
    a: 1
}
let newObj = {};

for (let key in obj) {
    newObj[key] = obj[key]
};
obj.a = 2;
console.log(obj);
console.log(newObj)


