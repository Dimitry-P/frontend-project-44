#!/usr/bin/env node
import readlineSync from 'readline-sync';




function RunGame(){
    this.question = 'Answer `yes` if the number is even, otherwise answer `no`.';
    this.init = function(name){
    let answer = false;
    let number = Math.floor(Math.random() * 1000); 
    console.log('Question: ' + number);
    let question = readlineSync.question('Your answer: ');
        if(question !== 'yes' && question !== 'no' || question === ''){
            if(number % 2 == 0){
                console.log(question + ` is wrong answer (. Correct answer was 'yes'.`);
                console.log(`Let's try again, ` + name);
            }else{
                console.log(question + ` is wrong answer (. Correct answer was 'no'.`);
                console.log(`Let's try again, ` + name);
            }
        }else if(number % 2 === 0 && number !== 0 && question === 'yes'){
            console.log('Correct!');
            answer = true;
        }else if(number % 2 !== 0  && question === 'no'){
            console.log('Correct!');
            answer = true;
        }else if(number % 2 === 0 && question === 'no'){
            console.log( `no is wrong answer; (. Correct answer was 'yes'.`);
            console.log(`Let's try again, ` + name);
        }else if(number % 2 !== 0 && question === 'yes'){
            console.log(`yes is wrong answer. (. Correct answer was 'no'.`);
            console.log(`Let's try again, ` + name);
        } 
        return answer;
    }  
}


export {RunGame};