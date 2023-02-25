const ROCK = "ROCK";
const PAPER = "PAPER";
const SISSORS = "SISSORS";

const startGameBtn = document.getElementById("start-game-btn");

const getUserInput = function () {
  var userInput = prompt("Choose your choice !!").toUpperCase();
  if (userInput !== ROCK && userInput !== SISSORS && userInput !== PAPER) {
    alert(`You entered invalid choice. Default choice is ROCK`);
    return;
  }
  return userInput;
};

const getComputerChoice = function () {
  var secret = Math.random();
  if (secret < 0.37) {
    return ROCK;
  } else if (secret < 0.67) {
    return PAPER;
  } else {
    return SISSORS;
  }
};

//Example of default parameter used when input is undefined
const generateResult = function (uChoice = ROCK, cChoice) {
  if (uChoice === cChoice) {
    return `You choose ${uChoice} and computer choose ${cChoice}.So it's a Draw`;
  } else if (
    (uChoice === PAPER && cChoice === ROCK) ||
    (uChoice === SISSORS && cChoice === PAPER) ||
    (uChoice === ROCK && cChoice === SISSORS)
  ) {
    return `You choose ${uChoice} and computer choose ${cChoice}.So You WIN !!!!`;
  } else {
    return `You choose ${uChoice} and computer choose ${cChoice}.So You LOOSE !!!!`;
  }
};

const start = function () {
  console.log("Game is starting...");
  var uChoice = getUserInput();
  var cChoice = getComputerChoice();
  var result = generateResult(uChoice, cChoice);
  alert(result);
};

startGameBtn.addEventListener("click", start);
