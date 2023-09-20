"use strict";
let num1 = 6;
let num2 = 6;

function sum(num1, num2) {
    let operation = num1 + num2;
    return operation;
}
let rest = (num1, num2) => {
    let rest = num1 - num2;
    return rest;
};
let div = (num1, num2) =>  num1 / num2 ;

console.log(sum(num1, num2));
console.log(rest(num1, num2));
console.log(div(num1, num2));
