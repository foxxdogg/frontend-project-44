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
  getRandomIndex,
  welcomeMessage,
} from '../index.js';

function getProgression(firstNum, step, length) {
  const progression = [firstNum];
  for (let index = 0; index < length - 1; index += 1) {
    progression[index + 1] = progression[index] + step;
  }
  return progression;
}

function hideRightAnswer(array, index) {
  array.splice(index, 1, '..');
  return array;
}

function getRightAnswer(array, index) {
  const rightAnswer = array[index];
  return rightAnswer;
}

function playGame() {
  let roundsCount = 3;
  let hasWon;
  welcomeUser(welcomeMessage);
  const usersName = askName();
  sayHello(usersName);
  explainRule('What number is missing in the progression?');
  while (roundsCount > 0) {
    const progression = getProgression(getRandomNumber(1, 100), getRandomNumber(1, 10), 10);
    const randomIndex = getRandomIndex(progression);
    const rightAnswer = getRightAnswer(progression, randomIndex);
    hideRightAnswer(progression, randomIndex);
    const question = progression.join(' ');
    askQuestion(`Question: ${question}`);
    const usersAnswer = getAnswer();
    hasWon = isUserRight(usersAnswer, rightAnswer);
    if (hasWon) {
      sayCorrect();
      roundsCount -= 1;
    } else {
      sayWrong(usersAnswer, rightAnswer, usersName);
      roundsCount = 0;
    }
  }
  if (hasWon) congratulateUser(usersName);
}

export default playGame;
