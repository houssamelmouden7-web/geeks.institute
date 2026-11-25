const _ = require("lodash");
const math = require("./math.js");

const sumResult = math.add(10, 20);
const multResult = math.multiply(5, 6);

const numbers = [10, 20, 30, 40];
const lodashSum = _.sum(numbers);
const lodashMax = _.max(numbers);

console.log("Custom Add (10 + 20):", sumResult);
console.log("Custom Multiply (5 * 6):", multResult);
console.log("Lodash Sum:", lodashSum);
console.log("Lodash Max:", lodashMax);