import { getRandomNumber, runGame } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}

function getQuestionAndRightAnswer() {
  const randomNumber = getRandomNumber(0, 200);
  const question = `${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
