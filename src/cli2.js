import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
export default name;

var question;
console.log('Hello, ' + name + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

var match = 0;
func(question);
func(question);
func(question);
result();
function result(){
    if(match === 3){
        console.log('Congratulations, ' + name + '!')
    }
}

function func(question){
    var  number = Math.floor(Math.random() * 1000);
console.log("Question: " + number);
    question = readlineSync.question('Your answer: ');
    if(question !== "yes" && question !== "no" || question === ""){
        console.log(question + " is wrong answer;");
    }else if(number % 2 === 0 && number !== 0 && question === "yes"){
        console.log("Correct!");
        match++;
    }else if(number % 2 !== 0  && question === "no"){
        console.log("Correct!");
        match++;
    }else if(number % 2 === 0 && question === "no"){
        console.log( "no is wrong answer; (. Correct answer was 'yes'.");
        console.log("Let's try again, " + name)
    }else if(number % 2 !== 0 && question === "yes"){
        console.log("yes is wrong answer. (. Correct answer was 'no'.")
        console.log("Let's try again, " + name)
    } 
}

