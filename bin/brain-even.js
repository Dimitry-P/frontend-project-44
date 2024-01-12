#!/usr/bin/env node


import readlineSync from 'readline-sync';
import {RunGame} from '../src/games/brain-even.js';
import {threeTimes} from '../src/index.js';



let runGame = new RunGame();

threeTimes(runGame);




