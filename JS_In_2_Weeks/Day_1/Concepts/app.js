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

//   function outer() {
//     let outerVar = "I am from outer!";
  
//         function middle() {
//             let middleVar = "I am from middle!";
//         };
  
//      function inner() {
//         let innerVar = "I am from inner!";
//         console.log(outerVar, middleVar, innerVar);
//       };
//       return {
//         middle,
//         inner
//       }
    
//   }