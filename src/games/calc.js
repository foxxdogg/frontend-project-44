import { askName, sayHello } from '../cli.js';
import {
  welcomeUser,
  explainRule,
  getRandomNumber,
  askQuestion,
  getAnswer,
  isUserRight,
  sayCorrect,
  sayWrong,
  congratulateUser,
} from '../index.js';

function getRandomSign(signs) {
  return signs[getRandomNumber(signs.length - 1)];
}

function sum(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}
function calculate(number1, number2, sign) {
  if (sign === '+') {
    return sum(number1, number2);
  }
  if (sign === '-') {
    return subtract(number1, number2);
  }
  return multiply(number1, number2);
}

function getRightAnswer(number1, number2, sign) {
  const rightAnswer = calculate(number1, number2, sign);
  return rightAnswer;
}

function playGame() {
  const rule = 'What is the result of the expression?';
  const signs = ['+', '-', '*'];
  const maxRandomNumber = 10;
  let roundsCount = 3;
  let hasWon;
  welcomeUser();
  const usersName = askName();
  sayHello(usersName);
  explainRule(rule);
  while (roundsCount > 0) {
    const randomNumber1 = getRandomNumber(maxRandomNumber);
    const randomNumber2 = getRandomNumber(maxRandomNumber);
    const sign = getRandomSign(signs);
    askQuestion(`Question: ${randomNumber1} ${sign} ${randomNumber2}`);
    const usersAnswer = getAnswer();
    const rightAnswer = getRightAnswer(randomNumber1, randomNumber2, sign);
    hasWon = isUserRight(usersAnswer, rightAnswer);
    if (hasWon) {
      sayCorrect();
      roundsCount -= 1;
    } else {
      sayWrong(usersAnswer, rightAnswer, usersName);
      roundsCount = 0;
    }
  }
  if (hasWon) {
    congratulateUser(usersName);
  }
}

export default playGame;
