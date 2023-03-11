//Spread operator
//Eg:1-  In the example below two arrays are defined and they’re merged into one using the spread operator (…).
var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3);

//Eg:2- In this example, appending an element to a given iterable.
var array12 = [10, 20, 30, 40, 50];
var array21 = [...array12, 60];
console.log(array21);

//Eg:3- In this example, we will copy objects using the spread operator.
const obj = {
  firstname: "Bill",
  lastname: "Samuel",
};
const obj2 = { ...obj };
console.log(obj2);
// below 2 lines are doing same . So what is the adv of this ?
const a = obj;
console.log(a);

//=======================================================================================================================================

//Rest Operator
//reduce - returns the sum of all elements
// the rest parameter condenses multiple elements into a single element even when different numbers of parameters are passed into the functio
function average(...args) {
  console.log(args);
  var avg =
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length;
  return avg;
}
console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
console.log("average of numbers is : " + average(1, 2, 3));

//================================================================================================================================

//CallBack Function
//call something at some point for you.
const callBackBttn = document.getElementById("call-back");

const sumUp = function (callback, a, b) {
  var sum = a + b;
  return callback(`Sum is ${sum}`);
};

const showResult = function (msgText, displayText) {
  console.log(displayText + " called by callback");
  console.log(msgText);
};
callBackBttn.addEventListener("click", function () {
  sumUp(showResult.bind(this, `Its's ADD`), 10, 5);
});
