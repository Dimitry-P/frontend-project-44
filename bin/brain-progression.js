import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
export default name;

var question;
console.log('Hello, ' + name + '!');
console.log('What number is missing in the progression?');

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

var firstNum = Math.floor(Math.random() * 100);
var secondNum = Math.floor(Math.random() * 10);
var arrayNew = [];
for(let i = 0; i<10; i++){
    firstNum = firstNum  + secondNum;
    arrayNew.push(firstNum);
}
var array3 = [];
array3.push(arrayNew[secondNum])

arrayNew[secondNum] = '..';  
console.log("Question: " + arrayNew.join(' '));
question = readlineSync.question('Your answer: ');
if(question == Number(array3)){
    console.log("correct!");
    match++;
}else{
    console.log("'"+ question +"' " + "is wrong answer ;" + "(." + "Correct answer was " + "'" + Number(array3) + "'");
    console.log("Let's try again, " + name + "!");
}
}  
