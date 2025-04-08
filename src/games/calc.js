import { getRandomNumber, runGame, getRandomIndex } from '../index.js';

const rule = 'What is the result of the expression?';

function getRandomSign(array) {
  return array[getRandomIndex(array)];
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
  return calculate(number1, number2, sign);
}

function getQuestionAndRightAnswer() {
  const signs = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const sign = getRandomSign(signs);
  const question = `${randomNumber1} ${sign} ${randomNumber2}`;
  const rightAnswer = getRightAnswer(randomNumber1, randomNumber2, sign);
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
