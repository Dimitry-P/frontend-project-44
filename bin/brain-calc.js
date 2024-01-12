#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {RunGame} from '../src/games/brain-calc.js';
import {threeTimes} from '../src/index.js';

threeTimes(new RunGame());
