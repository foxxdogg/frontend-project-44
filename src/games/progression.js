import { getRandomNumber, runGame } from '../index.js';

const rule = 'What number is missing in the progression?';

function getProgression(firstNum, step, length) {
  const progression = [firstNum];
  for (let index = 0; index < length - 1; index += 1) {
    progression[index + 1] = progression[index] + step;
  }
  return progression;
}

function getQuestionAndRightAnswer() {
  const progression = getProgression(
    getRandomNumber(1, 100),
    getRandomNumber(1, 10),
    10,
  );
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[randomIndex];
  progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
