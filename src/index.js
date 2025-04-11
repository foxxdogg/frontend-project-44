import readlineSync from 'readline-sync';

const welcomeMessage = 'Welcome to the Brain Games!';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runGame(rule, getQuestionAndRightAnswer) {
  let roundsCount = 3;
  let hasWon;
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  while (roundsCount > 0) {
    const { question, rightAnswer } = getQuestionAndRightAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    hasWon = userAnswer.toString() === rightAnswer.toString();
    if (hasWon) {
      console.log('Correct!');
      roundsCount -= 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
      roundsCount = 0;
    }
  }
  if (hasWon) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export { welcomeMessage, getRandomNumber, runGame };
