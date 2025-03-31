#!/usr/bin/env node
import { askName, sayHello } from '../src/cli.js';

greet('Welcome to the Brain Games!');
askName();
sayHello();

function greet(greeting) {
  console.log(greeting);
}
