function getGreaterNumber(number1, number2) {
  const greaterNumber = number1 > number2 ? number1 : number2;
  return greaterNumber;
}

function getSmallerNumber(number1, number2) {
  const smallerNumber = number1 < number2 ? number1 : number2;
  return smallerNumber;
}

function findGreatestCommonDivisor(number1, number2) {
  let greatestCommonDivisor;
  let remainder = 0;
  if (number1 - number2 === 0) {
    greatestCommonDivisor = number1;
    return greatestCommonDivisor;
  }
  let greaterNumber = getGreaterNumber(number1, number2);
  let smallerNumber = getSmallerNumber(number1, number2);
  do {
    remainder = greaterNumber - smallerNumber;
    if (remainder === 0) {
      greatestCommonDivisor = greaterNumber;
    }
    greaterNumber = getGreaterNumber(smallerNumber, remainder);
    smallerNumber = getSmallerNumber(smallerNumber, remainder);
  } while (remainder > 0);
  return greatestCommonDivisor;
}

const GCD = findGreatestCommonDivisor(150, 1500);
console.log(GCD);
