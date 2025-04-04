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

export default getRightAnswer;
