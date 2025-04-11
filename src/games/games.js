import readlineSync from 'readline-sync';
import { welcomeMessage } from '../index.js';

function runGame() {
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default runGame;
