import { getRandomNumber, getRandomIndex, runGame } from '../index.js';

const rule = 'What number is missing in the progression?';

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
  return array[index];
}

function getQuestionAndRightAnswer() {
  const progression = getProgression(
    getRandomNumber(1, 100),
    getRandomNumber(1, 10),
    10,
  );
  const randomIndex = getRandomIndex(progression);
  const rightAnswer = getRightAnswer(progression, randomIndex);
  hideRightAnswer(progression, randomIndex);
  const question = progression.join(' ');
  return { question, rightAnswer };
}

export default () => runGame(rule, getQuestionAndRightAnswer);
