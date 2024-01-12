#!/usr/bin/env node
import readlineSync from 'readline-sync';




function RunGame(){
    this.question = 'What is the result of the expression?';
    this.program = 'brain-calc';
    this.init = function(name){
        let answer = false;
        let question;
        let result;
        let operators = ['+', '-', '*'];
        let firstNum = Math.floor(Math.random() * 1000);
        let secondNum = Math.floor(Math.random() * 1000);
        let operator = Math.floor(Math.random() * operators.length);
        console.log(`Question: ` + firstNum + ` ` + operators[operator] + ` ` + secondNum);
        if(operators[operator] === '+'){
            result = firstNum + secondNum;
        }else if(operators[operator] === '-'){
            result = firstNum - secondNum;
        }else if(operators[operator] === '*'){
            result = firstNum * secondNum;
        }

        question = readlineSync.question('Your answer: ');
        if(question == result){
            console.log('correct');
            answer = true;
        }else{
            console.log(`'`+ question +`' ` + `is wrong answer ;` + `(.` + `Correct answer was ` + `'` + result + `'`);
            console.log(`Let's try again, ` + name + `!`);
        }
        return answer;  
    }
}


export {RunGame};