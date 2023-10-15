console.log('-----Destructuring Arrays------');
console.log('Array Element Assignment ----> You can extract values from an array by using a similar syntax to object destructuring.');
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2

console.log(`Skipping Elements ----> You can skip elements by omitting them using a comma.`)
const numbers1 = [1, 2, 3, 4, 5];
const [first1, , third1] = numbers1;
console.log(first1); // Output: 1
console.log(third1); // Output: 3

console.log(`Rest Elements ----> You can use the rest element to capture the remaining elements of an array into a new array.`);
const numbers3 = [1, 2, 3, 4, 5];
const [first3, ...rest] = numbers3;
console.log(first3); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
