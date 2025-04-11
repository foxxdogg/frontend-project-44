import { getRandomNumber, runGame } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function checkDivisors(number) {
  for (let i = 5; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeNumber(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else if (number === 2 || number === 3) {
    isPrime = true;
  } else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
  } else {
    isPrime = checkDivisors(number);
  }
  return isPrime;
}

function getQuestionAndRightAnswer() {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const rightAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
