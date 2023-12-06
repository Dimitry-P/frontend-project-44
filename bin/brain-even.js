let number;
let answer = 0;
let getAnswer;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function playGame() {
    do{
        number = Math.floor(Math.random () * (1000 - 1 + 1)) + 1
    console.log(number);
    console.log("Question:");
    if(number % 2 === 0){
        if(getAnswer === "yes"){
            console.log("correct");
            answer++;
        }else{
            console.log("wrong");
        }
    }else{
        if(getAnswer === "no"){
            console.log("correct");
            answer++;
        }else{
            console.log("wrong");
        }
    }
    }while(answer !== 3);
    if(answer === 3){
        console.log("Congratulations")
    }        
}     
playGame();
