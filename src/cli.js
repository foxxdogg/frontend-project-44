import readlineSync from 'readline-sync';

function askNameAndSayHello() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { askNameAndSayHello };
