#!/usr/bin/env node
import { askName, sayHello } from '../src/cli.js';
import { welcomeUser } from '../src/index.js';

welcomeUser();
const usersName = askName();
sayHello(usersName);
