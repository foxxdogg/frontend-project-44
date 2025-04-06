import readlineSync from 'readline-sync';

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
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
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function sayCorrect() {
  console.log('Correct!');
}

function sayWrong(answer, rightAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`,
  );
}

function congratulateUser(usersName) {
  console.log(`Congratulations, ${usersName}!`);
}

function isUserRight(answer, rightAnswer) {
  return answer.toString() === rightAnswer.toString();
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
};
