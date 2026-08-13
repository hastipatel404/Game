let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    const playerChoice = userChoice;
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("Player wins!");
        playerScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }   

}


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        console.log("Choice was selected: " + userChoice);
        playGame(userChoice);
})});
