#!/usr/bin/env node
import { askName, sayHello } from '../src/cli.js';

function greet(greeting) {
  console.log(greeting);
}
greet('Welcome to the Brain Games!');
askName();
sayHello();
