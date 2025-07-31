var userScore = document.querySelector("#player-score");
var computerScore = document.querySelector("#computer-score");

var userScoreCount = 0;
var computerScoreCount = 0;


const choices = document.querySelectorAll(".choice");
const resultText = document.querySelector("#result-text");


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.id; 
        const computerChoice = playGame(userChoice);


        if(userChoice === computerChoice){
            // alert("It's a tie!");
            resultText.innerText = " It's a tie!";
            resultText.style.backgroundColor = "yellow";
            resultText.style.color = "black";
            console.log("It's a tie!");
        }
        else if(userChoice === "rock" && computerChoice === "scissors" ||
                userChoice === "paper" && computerChoice === "rock" ||
                userChoice === "scissors" && computerChoice === "paper"){
                    userScore.innerText = ++userScoreCount;
                    resultText.innerText = "You win!";
                    resultText.style.backgroundColor = "green"; // Change text color to green
                    resultText.style.color = "white";
                    console.log("You win!");
                }
        else{
            computerScore.innerText = ++computerScoreCount;
            resultText.innerText = "You lose!";
            resultText.style.backgroundColor = "red";
            resultText.style.color = "white";
            console.log("You lose!");
        }

    });
});



const playGame = (userChoice) => {
    console.log("choice is clicked =", userChoice);

    //Generate computer choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice is =", computerChoice);
    return computerChoice;
}


const generateComputerChoice = () => {
    //rock paper scissor
    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}