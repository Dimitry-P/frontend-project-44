
import readlineSync from 'readline-sync';



let name;
let match = 0;
function threeTimes(name){
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
   
    match += 1;
    if(match > 3){
        console.log('Congratulations, ' + name + '!')
    }
}

  

export {threeTimes};  










