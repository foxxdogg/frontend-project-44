import readlineSync from 'readline-sync';

let name;

function askName() {
  name = readlineSync.question('May I have your name? ');
}

function sayHello() {
  console.log(`Hello, ${name}!`);
}

export { askName, sayHello };
