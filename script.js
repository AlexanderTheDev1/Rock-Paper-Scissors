console.log("Welcome");
// R,P,S = Rock,Paper,Scissors
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return rock;
    } else if (randomNumber === 1) {
        return paper;
    } else {
        return scissors;
    }
};

const getHumanChoice = () => {
    return prompt("Write Rock, Paper, or Scissors").toLowerCase();
};

const playRound = (humanChoice, computerChoice) => {
    console.log(`Human Selected: ${humanChoice}`);
    console.log(`Computer Selected: ${computerChoice}`);
    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) { 
        // PLAYER
        if (humanChoice === rock && computerChoice === scissors) {
            console.log(`${humanChoice} vs ${computerChoice} : Human Wins!`);
            return "human";
        } else if (humanChoice === paper && computerChoice === rock) {
            console.log(`${humanChoice} vs ${computerChoice} : Human Wins!`);
            return "human";
        } else if (humanChoice === scissors && computerChoice === paper) {
            console.log(`${humanChoice} vs ${computerChoice} : Human Wins!`);
            return "human";
        // COMPUTER
        } else if (computerChoice === rock && humanChoice === scissors) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return "computer";
        } else if (computerChoice === paper && humanChoice === rock) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return "computer";
        } else if (computerChoice === scissors && humanChoice === paper) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return "computer";
        } else if (humanChoice === computerChoice) {
            console.log(`${computerChoice} vs ${humanChoice} : Tie!`);
            return "tie";
        }
    } else {
        console.log("Invalid choice");
        return "invalid";
    }
};

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }
    
    console.log(`Final Human Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
};

playGame();