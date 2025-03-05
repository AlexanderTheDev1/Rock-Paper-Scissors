console.log("Welcome");
//R,P,S = Rock,Paper,Scissors
/*If player inputs R,P or S pc must select randomly R,P or S*/
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let humanChoice = prompt("Write Rock, Paper, or Scissors").toLowerCase();
let computerChoice;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log("Human Selected " + humanChoice + "!");
        console.log("Computer Selected Rock!");
        return rock;
    } else if (randomNumber === 1) {
        console.log("Human Selected " + humanChoice + "!");
        console.log("Computer Selected Paper!");
        return paper;
    } else {
        console.log("Human Selected " + humanChoice + "!");
        console.log("Computer Selected Scissors!");
        return scissors;
    }
};
const getHumanChoice = () => {
    computerChoice = getComputerChoice();
    if (humanChoice === rock || humanChoice === paper || humanChoice === scissors) { 
        //PLAYER
        if (humanChoice === rock && computerChoice === scissors) {
            console.log(`${humanChoice} vs ${computerChoice}  : Human Wins!`);
            return humanScore++;
        } else if (humanChoice === paper && computerChoice === rock) {
            console.log(`${humanChoice} vs ${computerChoice}  : Human Wins!`);
            return humanScore++;
        } else if (humanChoice === scissors && computerChoice === paper) {
            console.log(`${humanChoice} vs ${computerChoice}  : Human Wins!`);
            return humanScore++;
        //COMPUTER
        } else if (computerChoice === rock && humanChoice === scissors) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return computerScore++;
        } else if (computerChoice === paper && humanChoice === rock) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return computerScore++;
        } else if (computerChoice === scissors && humanChoice === paper) {
            console.log(`${computerChoice} vs ${humanChoice} : Computer Wins!`);
            return computerScore++;
        } else if (humanChoice === computerChoice) {
            console.log(`${computerChoice} vs ${humanChoice}  : Tie!`);
            return;
        }
    } else {
        console.log("Invalid choice");
    }
} 
getHumanChoice();
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);


const playRound = (humanChoice, computerChoice) => {
}