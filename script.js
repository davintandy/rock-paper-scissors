function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const choices = ["rock", "paper", "scissors"];
const getComputerChoice = pickRandom(choices);

let getHumanChoice = prompt("Choose Rock, Paper, or Scissors");

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`That's a tie! Both of you choose ${humanChoice}.`);
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
}

playRound(getHumanChoice, getComputerChoice);