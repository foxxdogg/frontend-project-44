import readlineSync from 'readline-sync';

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

export {
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
};
