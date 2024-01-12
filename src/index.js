
import readlineSync from 'readline-sync';

let name;
let match = true; 
function threeTimes(runGame){
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ` + name + `!`);
    for(let i = 0; i < 3; i++){
        console.log(runGame.question);
        if(!runGame.init(name)){
            match = false;
            break;
        }
    }
    if(match){
        console.log(`Congratulations, ` + name + `!`);
    }
}

export {threeTimes};  










