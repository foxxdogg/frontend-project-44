#!/usr/bin/env node
import { askName, sayHello } from '../src/cli.js';
import { welcomeUser, welcomeMessage } from '../src/index.js';

welcomeUser(welcomeMessage);
const userName = askName();
sayHello(userName);
