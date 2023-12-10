import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
export default name;
console.log('Hello, ' + name + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

var question;
var number;
var match = 0;
calc();
calc();
calc();
lastOne();
function lastOne(){
    if(match === 3){
      console.log('Congratulations, ' + name + '!')
    }
 }


function calc(){
number = Math.floor(Math.random() * 10);
console.log('Question: ' + number);
question = readlineSync.question("Your answer: ")

var result = isPrime(number);
if(result === true && question === "yes"){
    console.log("Correct!")
    match++;
}else if(result === true && question !== "yes"){
    console.log("'"+question+"'"+ " is wrong answer ;" + "("+". Correct answer was" + " '"+"yes"+"'");
    console.log("Let's try again, " + name + "!");
}else if(result === false && question === "no"){
    console.log("Correct!");
    match++;
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
