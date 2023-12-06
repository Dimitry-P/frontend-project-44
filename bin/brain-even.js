let number;
let answer = 0;
let getAnswer;
alert('Answer "yes" if the number is even, otherwise answer "no".');
function playGame() {
    do{
        number = Math.floor(Math.random () * (1000 - 1 + 1)) + 1
    alert(number);
    getAnswer = prompt("Question:");
    if(number % 2 === 0){
        if(getAnswer === "yes"){
            alert("correct");
            answer++;
        }else{
            alert("wrong");
        }
    }else{
        if(getAnswer === "no"){
            alert("correct");
            answer++;
        }else{
            alert("wrong");
        }
    }
    }while(answer !== 3);
    if(answer === 3){
        alert("Congratulations")
    }        
}     
playGame();
