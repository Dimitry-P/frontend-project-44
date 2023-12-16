#!/usr/bin/env node
import readlineSync from 'readline-sync';


let name;
let match = 0;
function engine(){
    
    let question;
   
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}

function result2(){
    match += 1;
    if(match > 3){
        console.log('Congratulations, ' + name + '!')
    }
}


function threeTimes(theGame){
    for(let i = 0; i < 3; i+=1){
        theGame();
    }
}

  

export {threeTimes};  
export {engine};
export {result2};









