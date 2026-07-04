function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return pickRandom(choices);
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You choose ${humanChoice}`);
    console.log(`Computer choose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`That's a tie! Both of you choose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore = computerScore + 1;
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore = humanScore + 1;
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}

playGame();