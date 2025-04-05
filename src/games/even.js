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

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function getRightAnswer(number) {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
}

function playGame() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const minRandomNumber = 0;
  const maxRandomNumber = 100;
  let roundsCount = 3;
  let hasWon;
  welcomeUser();
  const usersName = askName();
  sayHello(usersName);
  explainRule(rule);
  while (roundsCount > 0) {
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
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
