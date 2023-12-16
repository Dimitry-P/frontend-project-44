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
    let number;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    // if(match === 3){
    //   console.log('Congratulations, ' + name + '!')
    // }

number = Math.floor(Math.random() * 10);
console.log('Question: ' + number);
question = readlineSync.question("Your answer: ")

let result = isPrime(number);
if(result === true && question === "yes"){
    console.log("Correct!")
    result2()
}else if(result === true && question !== "yes"){
    console.log("'"+question+"'"+ " is wrong answer ;" + "("+". Correct answer was" + " '"+"yes"+"'");
    console.log("Let's try again, " + name + "!");
}else if(result === false && question === "no"){
    console.log("Correct!");
    result2()
}else if(result === false && question !== "no"){
    console.log("'"+question+"'"+ " is wrong answer ;" + "("+". Correct answer was" + " '"+"no"+"'");
    console.log("Let's try again, " + name + "!");
}


function isPrime(number){
    if(number === 0){
        return false;
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false;
    }
    return number !== 1;
}
    

}