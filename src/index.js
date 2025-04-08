import readlineSync from 'readline-sync';
import { askName, sayHello } from './cli.js';

const welcomeMessage = 'Welcome to the Brain Games!';

function welcomeUser(welcome) {
  console.log(welcome);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function explainRule(rule) {
  console.log(rule);
}

function askQuestion(question) {
  console.log(question);
}

function getAnswer() {
  return readlineSync.question('Your answer: ');
}

function sayCorrect() {
  console.log('Correct!');
}

function sayWrong(userAnswer, rightAnswer, userName) {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
  );
}

function congratulateUser(userName) {
  console.log(`Congratulations, ${userName}!`);
}

function isUserRight(userAnswer, rightAnswer) {
  return userAnswer.toString() === rightAnswer.toString();
}

function getRandomIndex(array) {
  return getRandomNumber(0, array.length - 1);
}

function runGame(rule, getQuestionAndRightAnswer) {
  let roundsCount = 3;
  let hasWon;
  welcomeUser(welcomeMessage);
  const userName = askName();
  sayHello(userName);
  explainRule(rule);
  while (roundsCount > 0) {
    const { question, rightAnswer } = getQuestionAndRightAnswer();
    askQuestion(`Question: ${question}`);
    const userAnswer = getAnswer();
    hasWon = isUserRight(userAnswer, rightAnswer);
    if (hasWon) {
      sayCorrect();
      roundsCount -= 1;
    } else {
      sayWrong(userAnswer, rightAnswer, userName);
      roundsCount = 0;
    }
  }
  if (hasWon) {
    congratulateUser(userName);
  }
}

export {
  welcomeUser,
  welcomeMessage,
  getRandomNumber,
  runGame,
  getRandomIndex,
};
