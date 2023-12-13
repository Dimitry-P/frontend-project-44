import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');


let question;
console.log('Hello, ' + name + '!');
console.log('What is the result of the expression?');

let result = 0;
let match = 0;
calc();
calc();
calc();
result2();
function result2(){
    if(match === 3){
        console.log('Congratulations, ' + name + '!')
    }
}


function calc(){
let operators = ["+", "-", "*"];
let firstNum = Math.floor(Math.random() * 1000);
let secondNum = Math.floor(Math.random() * 1000);
let operator = Math.floor(Math.random() * operators.length)
console.log("Question: " + firstNum + " " + operators[operator] + " " + secondNum);
if(operators[operator] === "+"){
     result = firstNum + secondNum;
}else if(operators[operator] === "-"){
    result = firstNum - secondNum;
}else if(operators[operator] === "*"){
     result = firstNum * secondNum;
}

question = readlineSync.question('Your answer: ');
if(question == result){
    console.log("correct");
    match++;
}else{
    console.log("'"+ question +"' " + "is wrong answer ;" + "(." + "Correct answer was " + "'" + result + "'");
    console.log("Let's try again, " + name + "!");
}
}  
