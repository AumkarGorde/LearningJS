/** Prerequiste -> Scope of the function depends where function is defined **/ 
// Global scope variable
let globalVariable = "I'm in the global scope";
function outerFunction() {
  // Outer function scope variable
  let outerVariable = "I'm in the outer function scope";
  function innerFunction() {
    // Inner function scope
    let innerVariable = "I'm in the inner function scope"; 
    // Access variables from the outer and global scopes
    console.log(innerVariable);    // Accesses the innerVariable
    console.log(outerVariable);    // Accesses the outerVariable
    console.log(globalVariable);   // Accesses the globalVariable
  }
  innerFunction();
}
outerFunction();
// Try to access innerVariable here - it will result in an error
//console.log(innerVariable); // ReferenceError: innerVariable is not defined
/** Prerequiste END-> Scope of the function depends where function is defined **/ 

/**Seenario 1 **/
console.log(`Seenario 1`);
console.log(this);

/* Definations
    #1. 'this' refers to the object that is currently calling the function.
    #2. Scope of the function depends where function is defined, but the value of 'this' keyword is determined by how function is called(runtime binding)
    #3. 
*/

/** Seenario 2**/
console.log(`Seenario 2`);
var age = 26;      // set it var instead of let, as it will refer to global scope
function displayAge(){
    console.log(this.age); // Output - 26
    console.log(this); // Output - window obj or global obj
}
displayAge();   // according to defination #1 global/window object is calling displayAge funation i.e window.disaplayAge();

/* Seenario 3 */
console.log(`Seenario 3`);
const person = {
    age:90,
    displayAge:displayAge, //asign seenario  2 display age function here
    nestedPerson : {      // nested OBJECT for person object
        age:100,
        displayAge:displayAge
    }
}
person.displayAge(); // according to defination #1 person is the current calling function so 'this' refers to person
person.nestedPerson.displayAge(); // according to defination #1 nestedPerson is the current calling function so 'this' refers to nestedPerson

/*Arrow Function */
console.log(`Seenario 4`);
const personSimple = {
    age: 129,
    greet1:function(){
        console.log('Greet 1', this.age);
        console.log('Greet 1', this);
        function greet2(){
            console.log('Greet 2', this.age);
            console.log('Greet 2', this);
        }
        greet2(); // Output is undefined as this refers to how function is called and not where it is called, here we are directly calling greet2 without binding this.
    }
}
personSimple.greet1();

console.log(`Seenario 5`);
const personArrow = {
    age: 129,
    greet1:function(){
        console.log('Greet 1', this.age);
        console.log('Greet 1', this);
        const greet2 = () => {
            console.log('Greet 2', this.age);
            console.log('Greet 2', this);
        }
        greet2(); // Output is 129
    }
}
personArrow.greet1(); // this in arrow function is based on the scope the Arrow function is defined within , 
                     //here arrow function is called within enclosing curly braces of greet1 so scope of arrow function is greet1
 
// arrow function do not have there own 'this' keyword

const foot = {
    size : 10,
    say: function(){
        console.log(this.size);
    }
}
foot.say();

const footArrow = {
    size : 10,
    say: () => {
        console.log(this.size);
    }
}
footArrow.say();