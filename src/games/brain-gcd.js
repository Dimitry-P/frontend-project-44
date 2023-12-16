#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {engine} from '../index.js';
import {result2} from '../index.js';
import {threeTimes} from '../index.js';

engine();
result2();
threeTimes(theGame)


function theGame(name){
    let question;

    console.log('Find the greatest common divisor of given numbers.');
let firstNum = Math.floor(Math.random() * 1000);
let secondNum = Math.floor(Math.random() * 1000);
console.log("Question: " + firstNum + " " + secondNum);
question = readlineSync.question('Your answer: ');
let array = [];
let array2 = [];
for(let i = 1; i <= firstNum; i++){
    if(firstNum % i === 0){
        array.push(i);
    }
    
}
console.log(array);
for(let i = 1; i <= secondNum; i++){
    if(secondNum % i === 0){
        array2.push(i);
    }  
}
console.log(array2);

let array3 = []
for(let r = 0; r < 50; r++){
    if(array.includes(array2[r])){
        array3.push(array2[r]);
    }
}
console.log(array3);
console.log(array3[array3.length - 1]);



if( array3[array3.length - 1] == question){
    console.log("Correct!");
    result2()
}else{
    console.log("'"+question+"'"+ " is wrong answer ;" + "("+". Correct answer was" + "'"+array3[array3.length - 1]+"'");
    console.log("Let's try again, " + name + "!");
}
}