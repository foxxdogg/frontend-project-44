import readlineSync from 'readline-sync';

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
}

function getRandomNumber() {
  return Math.trunc(Math.random() * 100);
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
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

function getRightAnswer(number) {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
}

function isUserRight(answer, rightAnswer) {
  return answer === rightAnswer;
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

export {
  welcomeUser,
  explainRule,
  getRandomNumber,
  askQuestion,
  getAnswer,
  getRightAnswer,
  isUserRight,
  sayCorrect,
  sayWrong,
  congratulateUser,
};
