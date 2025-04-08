import { getRandomNumber, runGame } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

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
  return getGreatestCommonDivisor(number1, number2);
}

function getQuestionAndRightAnswer() {
  const randomNumber1 = getRandomNumber(1, 200);
  const randomNumber2 = getRandomNumber(1, 200);
  const question = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = getRightAnswer(randomNumber1, randomNumber2);
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
