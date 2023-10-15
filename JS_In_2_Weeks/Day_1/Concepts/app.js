const ref = counterFunction(); /*This pattern allows you to maintain state across function calls and is often used when 
                                you need to encapsulate data and behavior while preventing it from being reset each time a function is invoked.*/
function counterFunction() {
    let counter = 0;
    let counterTwo = 100;
    let msg = 'Success !!';
    function increment(){
        return counter++;
    }
    function incrementTwo(){
        return counterTwo++;
    }
    return {
        increment,
        incrementTwo
    }
}

function callCounter(){
    const element = document.getElementById('displayForZero');
    element.textContent = ref.increment();
    //console.log(ref.msg); // this will be undefined as we have not added this in the return part of closure
}

function callCounterTwo(){
    const element = document.getElementById('displayFor100');
    element.textContent = ref.incrementTwo();
    //console.log(ref.msg); // this will be undefined as we have not added this in the return part of closure
}

/***********************Clousure with parameter**************************************************************/

function greet(greetings){
    function innerFun(name){
        return `Hello ${name} !! ${greetings}`;
    }
    return{
        innerFun
    }
}

function greeting(){
    let greetref = greet('How are you ?');
    const inputelement = document.getElementById('greet');
    const outputelement = document.getElementById('displayForgreet');
    outputelement.textContent = greetref.innerFun(inputelement.value);
}


/******************************Multiple closure******************************************************************** */

function outer() {
    let outerVar = "I am from outer!";
  
    return function middle() {
        let middleVar = "I am from middle!";
  
        return function inner() {
            let innerVar = "I am from inner!";
            console.log(outerVar, middleVar, innerVar);
        };
    };
  }
  
  function Nested(){
    const middleFunction = outer(); // Create a closure with middle function
    const innerFunction = middleFunction(); // Create a closure with inner function
    innerFunction(); // Output: I am from outer! I am from middle! I am from inner!
  }

  const globalVar = "I'm global"; // Global scope

  function outerFunction() {
    const outerVar = "I'm in the outer function"; // Outer function scope
  
    function innerFunction() {
      const innerVar = "I'm in the inner function"; // Inner function scope
      console.log(innerVar); // Resolves to the innerVar in the inner function scope
      console.log(outerVar); // Resolves to the outerVar in the outer function scope
      console.log(globalVar); // Resolves to the globalVar in the global scope
    }
  
    innerFunction();
  }
  
  outerFunction();
  console.log(globalVar); // Resolves to the globalVar in the global scope

  
const x = 10;
function exampleFunction() {
  const x = 20;
}

exampleFunction();
console.log(x); // This will print 10, the outer 'x' is accessible again

console.log('-----------------------------------------Explain *this* in various context-------------------------------------------------');
console.log(`this in Global Context given below`);
console.log(this);

console.log(`this in Function Context given below`);
function checkFunThis() {
    console.log(this);
  }
checkFunThis(); // In a browser, this refers to the window object.
  
console.log(`this in Constructor Functions given below`);
function Person(name) {
    this.name = name;
}
const john = new Person("John");
console.log(john.name); // 'this' refers to the 'john' object.
 
console.log(`this in Event Handlers given below`);
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log(this); // 'this' refers to the button element.
});

console.log(`this in Arrow functions given below`);
const person = {
    name: "Alice",
    sayHello: () => {
      console.log(`Hello, ${this.name}!`);
    }
  };
  person.sayHello(); // 'this' refers to the 'window' object.

  const obja = {
    name: "Alice",
    regularFunction: function() {
      console.log(`Hello from ${this.name}`);
    },
    arrowFunction: () => {
      console.log(`Hello from ${this.name}`);
    }
  };
  
  const sayHelloRegular = obja.regularFunction;
  const sayHelloArrow = obja.arrowFunction;
  
  obja.regularFunction(); // 'this' refers to 'obj', outputs "Hello from Alice"
  sayHelloRegular(); // 'this' refers to the global object (window in a browser), outputs "Hello from undefined"
  
  obja.arrowFunction(); // 'this' refers to 'obj', outputs "Hello from"
  sayHelloArrow(); // 'this' still refers to 'obj', outputs "Hello from"
  
  
  console.log(`this in callback functions given below`);
  function handleClick() {
    console.log(this);
  }
  const button1 = document.getElementById("myButton1");
  button1.addEventListener("click", handleClick); // 'this' refers to the button element.
  
  console.log(`this in Method Chaining given below`);
  const calculator = {
    value: 10,
    add(num) {
      this.value += num;
      return this; // Return 'this' to enable method chaining.
    },
    subtract(num) {
      this.value -= num;
      return this;
    }
  };
  
  const result = calculator.add(5).subtract(2);
  console.log(result.value); // 3
  
  console.log(`this in Asynchronous Code given below`);
  const obj = {
    value: "I am an object",
    printValue() {
      setTimeout(function () {
        console.log(this.value); // 'this' refers to the global object (window or global). this will print undefined as value is not in global
      }, 1000);
    }
  };

  obj.printValue();