import { getRandomNumber, runGame } from '../index.js';

const rule = 'What is the result of the expression?';

function calculate(number1, number2, sign) {
  if (sign === '+') {
    return number1 + number2;
  }
  if (sign === '-') {
    return number1 - number2;
  }
  return number1 * number2;
}

function getQuestionAndRightAnswer() {
  const signs = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${randomNumber1} ${sign} ${randomNumber2}`;
  const rightAnswer = calculate(randomNumber1, randomNumber2, sign);
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
