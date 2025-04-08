import { getRandomNumber, runGame } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}

function getRightAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function getQuestionAndRightAnswer() {
  const randomNumber = getRandomNumber(0, 200);
  const question = `${randomNumber}`;
  const rightAnswer = getRightAnswer(randomNumber);
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
