/* CONST behaviour
The below code gives syntax error
function example() {
    const x = 10;
    if (true) {
        const x = 20; 
    }
	const x = 9;
    console.log(x); 
}
but this is fine
function example() {
    const x = 10;
    if (true) {
        const x = 20; 
    }
    console.log(x); //Output 10
}
this gives error
function example() {
    console.log(x)
    const x = 10;
    if (true) {
        const x = 20; 
    }
    console.log(x); //Output 10
}
*/

function demovar(){
    console.log(`Variable is declared after this call, now the value of variable is : ${a}. This explains point 2`);
    var a = 10;
    console.log(`Variable is declared before this call, now the value of variable is : ${a} This explains point 2`);
    const numberInput = document.getElementById('numberforvar');
    var number = parseInt(numberInput.value);
    if(true){
        var number = 100;
    }
    const resultElement = document.getElementById('resultvar');
    resultElement.textContent = `Your input is changed to ${number}`; 
}

function demolet(){
    //console.log(`Variable is declared after this call, now the value of variable is : ${a}. This explains point 2`); // this line gives error
    let a = 10;
    console.log(`Variable is declared before this call, now the value of variable is : ${a} This explains point 2`);
    const numberInput = document.getElementById('numberforlet');
    let number = parseInt(numberInput.value);
    if(true){
        let number = 100;
    }
    const resultElement = document.getElementById('resultlet');
    resultElement.textContent = `Your input remains same ${number}`; 
}

function calculateFactorial() {
    // Get the user-entered number
    const numberInput = document.getElementById('number');
    const number = parseInt(numberInput.value);

    // Check if the input is a valid positive number
    if (isNaN(number) || number < 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    // Calculate the factorial using a for loop
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The factorial of ${number} is ${factorial}.`;
}

function calculateFibonacci(){
    //Get value from Ui
    const numberInput = document.getElementById('fibnumber');
    const number = parseInt(numberInput.value);
    let resultElement = document.getElementById('resultfib');

    if(number > 10){
        resultElement.textContent = `For now number should be less than 10`;
        return;
    }

    //Logic to generate fibonacii series
    let a = 0; let b = 1; let temp = 0;
    const arr = [a,b];
    for(let i = 0; i < number - 2; i++){
        temp = a + b;
        arr.push(temp);
        a = b;
        b = temp;
    }

    //Display result 
    resultElement.textContent =  `The series for ${number} is ${arr.join(' ')}`;
}