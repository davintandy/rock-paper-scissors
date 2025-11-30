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

function playRound(humanChoice, computerChoice) {
    let result = null

    if (humanChoice === computerChoice) {
        result = "Draw"
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        result = "Lose"
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        result = "Win"
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result = "Win"
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        result = "Lose"
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        result = "Lose"
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result = "Win"
    }

    if (result === "Draw") {
        console.log(
            `Draw! Both have ${humanChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`
        )
    } else if (result === "Win") {
        humanScore = humanScore + 1
        console.log(
            `You win! ${humanChoice} beats ${computerChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`
        )
    } else if (result === "Lose") {
        computerScore = computerScore + 1
        console.log(
            `You lose! ${computerChoice} beats ${humanChoice}
Your score: ${humanScore}
Computer score: ${computerScore}`
        )
    } else {
        console.log(`Error, no result found between ${humanChoice} and ${computerChoice}`)
    }
}

function playGame() {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}

playGame()