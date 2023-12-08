import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
export default name;

var question;
console.log('Hello, ' + name + '!');
console.log('What is the result of the expression?');

var match = 0;
calc();
calc();
calc();
result();
function result(){
    if(match === 3){
        console.log('Congratulations, ' + name + '!')
    }
}


function calc(){
var operators = ["+", "-", "*"];
var firstNum = Math.floor(Math.random() * 1000);
var secondNum = Math.floor(Math.random() * 1000);
var operator = Math.floor(Math.random() * operators.length)
console.log("Question: " + firstNum + " " + operators[operator] + " " + secondNum);
if(operators[operator] === "+"){
    var result = firstNum + secondNum;
}else if(operators[operator] === "-"){
    var result = firstNum - secondNum;
}else if(operators[operator] === "*"){
    var result = firstNum * secondNum;
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
