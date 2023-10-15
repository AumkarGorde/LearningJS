console.log('Traditional Function');
function add(a, b) {
    return a + b;
}

console.log('Arrow Function');
const addarr = (a, b) => a + b;

console.log('arrow function with implicit return');
const double = (x) => x * 2;

console.log('Benefits of Arrow Functions');
console.log('Shorter code');
 // Traditional function
 const traditionalFunc = function (x) {
    return x * x;
  };

  // Arrow function
  const arrowFunc = (x) => x * x;
  // Refer arrowfunction.js for more info on this keyword.
  
  console.log('No Binding of arguments:');

  // Traditional function
  function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  
  // Arrow function
  const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
