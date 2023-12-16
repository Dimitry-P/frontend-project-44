#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {functionForGame} from './games/brain-even.js'

let name;
function engine(){
    let question;
    let match = 0;
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    for(let i = 0; i < 3; i+=1){
        functionForGame(name)
    }
}

let match = 0;
function result2(){
    match += 1;
    if(match === 3){
        console.log('Congratulations, ' + name + '!')
    }
}

    
export {engine};
export {result2};









