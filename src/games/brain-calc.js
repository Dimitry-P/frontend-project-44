#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {engine} from '../index.js';
import {result2} from '../index.js';
import {threeTimes} from '../index.js';

engine();
result2();
threeTimes(theGame)


function theGame(name){
console.log('What is the result of the expression?');
let question;
let result;

let operators = ["+", "-", "*"];
let firstNum = Math.floor(Math.random() * 1000);
let secondNum = Math.floor(Math.random() * 1000);
let operator = Math.floor(Math.random() * operators.length)
console.log("Question: " + firstNum + " " + operators[operator] + " " + secondNum);
if(operators[operator] === "+"){
     result = firstNum + secondNum;
}else if(operators[operator] === "-"){
    result = firstNum - secondNum;
}else if(operators[operator] === "*"){
     result = firstNum * secondNum;
}

question = readlineSync.question('Your answer: ');
if(question == result){
    console.log("correct");
    result2();
}else{
    console.log("'"+ question +"' " + "is wrong answer ;" + "(." + "Correct answer was " + "'" + result + "'");
    console.log("Let's try again, " + name + "!");
}
  

}

