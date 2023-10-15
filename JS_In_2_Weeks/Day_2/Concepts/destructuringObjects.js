console.log('-----Destructuring Objects------');
console.log('Object Property Assignment --->');
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName); // Output: 'John'
console.log(lastName); // Output: 'Doe'

console.log('Default Values ---> You can provide default values if a property is undefined in the object.')
const person2 = { firstName2: 'John' };
const { firstName2, lastName2 = 'Doe' } = person2;
console.log(firstName2); // Output: 'John'
console.log(lastName2); // Output: 'Doe'

console.log('Renaming Variables ---> You can also assign the extracted values to variables with different names.')
const person3 = { first: 'John', last: 'Doe' };
const { first: firstName3, last: lastName3 } = person3;
console.log(firstName3); // Output: 'John'
console.log(lastName3); // Output: 'Doe'
