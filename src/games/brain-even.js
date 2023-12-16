#!/usr/bin/env node


import readlineSync from 'readline-sync';
import {engine} from '../index.js';
import {result2} from '../index.js';

engine(functionForGame);


function functionForGame(name){
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
 let question;
    let  number = Math.floor(Math.random() * 1000);
console.log("Question: " + number);
    question = readlineSync.question('Your answer: ');
    if(question !== "yes" && question !== "no" || question === ""){
        if(number % 2 == 0){
            console.log(question + " is wrong answer (. Correct answer was 'yes'.")
            console.log("Let's try again, " + name)
        }else{
            console.log(question + " is wrong answer (. Correct answer was 'no'.")
            console.log("Let's try again, " + name)
        }
        
    }else if(number % 2 === 0 && number !== 0 && question === "yes"){
        console.log("Correct!");
        
        result2()
    }else if(number % 2 !== 0  && question === "no"){
        console.log("Correct!");
        
        result2()
    }else if(number % 2 === 0 && question === "no"){
        console.log( "no is wrong answer; (. Correct answer was 'yes'.");
        console.log("Let's try again, " + name)
    }else if(number % 2 !== 0 && question === "yes"){
        console.log("yes is wrong answer. (. Correct answer was 'no'.")
        console.log("Let's try again, " + name)
    } 

}



export {functionForGame}
