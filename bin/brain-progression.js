


import readlineSync from 'readline-sync';

import {threeTimes} from '../src/index.js';



threeTimes(new TheGame())



function TheGame(){
    this.program = "brain-progression";
    this.init = function(name){
    let answer = false;
    console.log('What number is missing in the progression?');
let firstNum = Math.floor(Math.random() * 100);
let secondNum = Math.floor(Math.random() * 10);
let arrayNew = [];
for(let i = 0; i<10; i++){
    firstNum = firstNum  + secondNum;
    arrayNew.push(firstNum);
}
let array3 = [];
array3.push(arrayNew[secondNum])

arrayNew[secondNum] = '..';  
console.log("Question: " + arrayNew.join(' '));
let question = readlineSync.question('Your answer: ');
if(question == Number(array3)){
    console.log("correct!");
    answer = true;
}else{
    console.log("'"+ question +"' " + "is wrong answer ;" + "(." + "Correct answer was " + "'" + Number(array3) + "'");
    console.log("Let's try again, " + name + "!");
}
return answer;
}  
}