function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = pickRandom(choices);

console.log(getComputerChoice)