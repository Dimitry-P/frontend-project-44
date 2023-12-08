import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
export default name;

var question;
console.log('Hello, ' + name + '!');
console.log('Find the greatest common divisor of given numbers.');

var question;
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
var firstNum = Math.floor(Math.random() * 1000);
var secondNum = Math.floor(Math.random() * 1000);
console.log("Question: " + firstNum + " " + secondNum);
question = readlineSync.question('Your answer: ');
var array = [];
var array2 = [];
for(let i = 1; i <= firstNum; i++){
    if(firstNum % i === 0){
        array.push(i);
    }
    
}
console.log(array);
for(let i = 1; i <= secondNum; i++){
    if(secondNum % i === 0){
        array2.push(i);
    }  
}
console.log(array2);

var array3 = []
for(let r = 0; r < 50; r++){
    if(array.includes(array2[r])){
        array3.push(array2[r]);
    }
}
console.log(array3);
console.log(array3[array3.length - 1]);



if( array3[array3.length - 1] == question){
    console.log("Correct!");
    match++;
}else{
    console.log("'"+question+"'"+ " is wrong answer ;" + "("+". Correct answer was" + "'"+array3[array3.length - 1]+"'");
    console.log("Let's try again, " + name + "!");
}
}