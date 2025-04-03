import readlineSync from 'readline-sync';

function askName() {
  return readlineSync.question('May I have your name? ');
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

export { askName, sayHello };
