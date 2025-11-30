let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    const random = Math.random()

    if (random <= 1/3) {
        return "Rock"
    } else if (random <= 2/3) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Choose Rock, Paper, or Scissors?").toLowerCase()

    switch(choice) {
        case "rock":
            return "Rock"
        case "paper":
            return "Paper"
        case "scissors":
            return "Scissors"
        default:
            return "Invalid input"
    }
}

console.log(getHumanChoice())