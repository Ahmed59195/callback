"use strict";
console.log("Start");
let username = "Ahmed Ali";
console.log(username);
let age = 18;
if (age < 18) {
    console.log("you are not an adult");
}
else {
    console.log("you are an adult");
}
const bestFriends = ["Hamza", "Ali", "Raza", "Junaid"];
for (let i = 0; i < bestFriends.length; i++) {
    console.log(`${bestFriends[i]} is my best friend!`);
}
const car = {
    brand: "Toyota",
    model: "Corolla",
    isUsed: false,
    year: 2012,
};
console.log(car["brand"]);
console.log(car.model);
console.log("The End");
