
import readlineSync from 'readline-sync';



let name;
let match = true; 
function threeTimes(theGame){
    console.log('Welcome to the Brain Games! Program name: ' + theGame.program);
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    for(let i = 0; i < 3; i++){
        if(!theGame.init(name)){
            match = false;
        }
    }
    if(match){
        console.log("Congratulations, " + name + "!") ;
    }
    
}

  

export {threeTimes};  










