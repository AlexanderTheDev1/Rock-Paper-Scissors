console.log("Welcome");
//R,P,S = Rock,Paper,Scissors
/*If player inputs R,P or S pc must select randomly R,P or S*/
let rock = "Rock".toLowerCase();
let paper = "Paper".toLowerCase();
let scissors = "Scissors".toLowerCase();
let getHumanChoice = prompt("Write Rock, Paper, or Scissors");
let computerChoice;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log("Human Selected " + getHumanChoice + "!");
        console.log("Computer Selected Rock!");
        return rock;
    } else if (randomNumber === 1) {
        console.log("Human Selected " + getHumanChoice + "!");
        console.log("Computer Selected Paper!");
        return paper;
    } else {
        console.log("Human Selected " + getHumanChoice + "!");
        console.log("Computer Selected Scissors!");
        return scissors;
    }
};
if (getHumanChoice) {
    getHumanChoice = getHumanChoice.toLowerCase();
    if (getHumanChoice == rock || getHumanChoice == paper || getHumanChoice == scissors) {
        computerChoice = getComputerChoice();
        //for player
        if (getHumanChoice == rock && computerChoice == scissors) {
            console.log(getHumanChoice + " vs " + computerChoice + " : Human Wins!");
        } else if (getHumanChoice == paper && computerChoice == rock) {
            console.log(getHumanChoice + " vs " + computerChoice + " : Human Wins!");
        } else if (getHumanChoice == scissors && computerChoice == paper) {
            console.log(getHumanChoice + " vs " + computerChoice + " : Human Wins!");
            //for computer
        } else if (computerChoice == rock && getHumanChoice == scissors) {
            console.log(computerChoice + " vs " + getHumanChoice + " : Computer Wins!");
        } else if (computerChoice == paper && getHumanChoice == rock) {
            console.log(computerChoice + " vs " + getHumanChoice + " : Computer Wins!");
        } else if (computerChoice == scissors && getHumanChoice == paper) {
            console.log(computerChoice + " vs " + getHumanChoice + " : Computer Wins!");
        } else if (getHumanChoice == computerChoice) {
            console.log(computerChoice + " vs " + getHumanChoice + " : Tie!");
        }
    } else {
        console.log("Invalid choice");
    }
} else {
    console.log("No choice provided");
}