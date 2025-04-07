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
  welcomeMessage,
} from '../index.js';

function getGreaterNumber(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function getSmallerNumber(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function getGreatestCommonDivisor(number1, number2) {
  if (number1 === number2) return number1;

  let greatestCommonDivisor;
  let remainder;
  let greaterNumber = getGreaterNumber(number1, number2);
  let smallerNumber = getSmallerNumber(number1, number2);

  do {
    remainder = greaterNumber - smallerNumber;
    if (remainder === 0) {
      greatestCommonDivisor = greaterNumber;
    }
    greaterNumber = getGreaterNumber(smallerNumber, remainder);
    smallerNumber = getSmallerNumber(smallerNumber, remainder);
  } while (remainder > 0);
  return greatestCommonDivisor;
}

function getRightAnswer(number1, number2) {
  const rightAnswer = getGreatestCommonDivisor(number1, number2);
  return rightAnswer;
}

function playGame() {
  let roundsCount = 3;
  let hasWon;
  welcomeUser(welcomeMessage);
  const usersName = askName();
  sayHello(usersName);
  explainRule('Find the greatest common divisor of given numbers.');
  while (roundsCount > 0) {
    const randomNumber1 = getRandomNumber(1, 200);
    const randomNumber2 = getRandomNumber(1, 200);
    askQuestion(`Question: ${randomNumber1} ${randomNumber2}`);
    const usersAnswer = getAnswer();
    const rightAnswer = getRightAnswer(randomNumber1, randomNumber2);
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
