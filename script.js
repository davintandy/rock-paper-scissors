function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = pickRandom(choices);

let getHumanChoice = prompt("Choose Rock, Paper, or Scissors");

let computerScore = 0;
let humanScore = 0;