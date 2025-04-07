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

function checkDivisors(number) {
  for (let i = 5; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isTwoOrThree(number) {
  if (number === 2 || number === 3) {
    return true;
  }
  return false;
}

function isPrimeNumber(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else if (isTwoOrThree(number)) {
    isPrime = true;
  } else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
  } else {
    isPrime = checkDivisors(number);
  }
  return isPrime;
}

function getRightAnswer(number) {
  const rightAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return rightAnswer;
}

function playGame() {
  let roundsCount = 3;
  let hasWon;
  welcomeUser(welcomeMessage);
  const usersName = askName();
  sayHello(usersName);
  explainRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (roundsCount > 0) {
    const randomNumber = getRandomNumber(0, 100);
    askQuestion(`Question: ${randomNumber}`);
    const usersAnswer = getAnswer();
    const rightAnswer = getRightAnswer(randomNumber);
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
