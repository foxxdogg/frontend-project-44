#!/usr/bin/env node
import { askName, sayHello } from '../src/cli.js';
import getRightAnswer from '../src/games/even.js';
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
} from '../../../../../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
let roundsCount = 3;
let hasWon;
welcomeUser();
const usersName = askName();
sayHello(usersName);
explainRule(rule);
while (roundsCount > 0) {
  const randomNumber = getRandomNumber();
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
