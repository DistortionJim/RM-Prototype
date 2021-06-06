// const person = {
//     name: "Alex",
//     age: 23,
//     greet: function () {
//         console.log("Greet");
//     }
// }

const person = new Object({
    name: "Alex",
    age: 23,
    greet: function () {
        console.log("Greet");
    }
});

Object.prototype.sayHello = function () {
    console.log("Hello");
}

const rose = Object.create(person);
rose.name = "Rose";

const str = new String("Some string..");
const num = new Number(777);
