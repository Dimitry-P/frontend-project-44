#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {RunGame} from '../src/games/brain-gcd.js';
import {threeTimes} from '../src/index.js';

threeTimes(new RunGame());
