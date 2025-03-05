alert("Welcome");
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
    alert(`Human Selected: ${humanChoice}
Computer Selected: ${computerChoice}`);
 
    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) { 
        // PLAYER
        if (humanChoice === rock && computerChoice === scissors) {
            alert(`${humanChoice} vs ${computerChoice}
Human Wins!`);
            return "human";
        } else if (humanChoice === paper && computerChoice === rock) {
            alert(`${humanChoice} vs ${computerChoice}
Human Wins!`);
            return "human";
        } else if (humanChoice === scissors && computerChoice === paper) {
            alert(`${humanChoice} vs ${computerChoice}
Human Wins!`);
            return "human";
        // COMPUTER
        } else if (computerChoice === rock && humanChoice === scissors) {
            alert(`${computerChoice} vs ${humanChoice}
Computer Wins!`);
            return "computer";
        } else if (computerChoice === paper && humanChoice === rock) {
            alert(`${computerChoice} vs ${humanChoice}
Computer Wins!`);
            return "computer";
        } else if (computerChoice === scissors && humanChoice === paper) {
            alert(`${computerChoice} vs ${humanChoice}
Computer Wins!`);
            return "computer";
        } else if (humanChoice === computerChoice) {
            alert(`${computerChoice} vs ${humanChoice}
              Tie!`);
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
        alert(`Current Score: 
Human: ${humanScore} 
Computer: ${computerScore}`);
    }
    
    alert(`Final Score: 
Human: ${humanScore} 
Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        alert("Human wins the game!");
    } else if (computerScore > humanScore) {
        alert("Computer wins the game!");
    } else {
        alert("The game is a tie!");
    }
};

playGame();