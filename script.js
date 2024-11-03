let cpu = ["rock", "paper", "scissors"];
//the computer is going to choose a random index from the array, 0-2
function computerChoice() {
    //its going to choose a random number
    let num = Math.floor(Math.random() * 3);
    return cpu[num];
}

let userScore = 0;
let cpuScore = 0;
let tieScore = 0;

let buttons = document.querySelectorAll('.choice button');
let userScoreTracker = document.getElementById('yourScore');
let computerScoreTracker = document.getElementById('computerScore');
let tieScoreTracker = document.getElementById('tieScore');
let restart = document.querySelector('.restart button');


function chooseFighter(userPick) {
    let computerPick = computerChoice();
    if (userPick === computerPick) {
        tieScore++;
        document.getElementById("message").innerText = `TIE! Computer chose ${computerPick}`;
    } else if (userPick === "rock" && computerPick === "scissors"){
        userScore++;
        document.getElementById("message").innerText = `YOU WON😃! Computer chose ${computerPick}`;
        
    } else if (userPick === "scissors" && computerPick === "paper"){
        userScore++;
        document.getElementById("message").innerText = `YOU WON😃! Computer chose ${computerPick}`;
    } else if (userPick === "paper" && computerPick === "rock"){
        userScore++;
        document.getElementById("message").innerText = `YOU WON😃! Computer chose ${computerPick}`;
    } else {
        cpuScore++;
        document.getElementById("message").innerText = `YOU LOSE! Computer chose ${computerPick}`;
    }
updatedScores();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let userPick = button.id;
        chooseFighter(userPick);
    })
})

//changes the score to the new updated one
function updatedScores() {
    userScoreTracker.textContent = userScore;
    computerScoreTracker.textContent = cpuScore;
    tieScoreTracker.textContent = tieScore;
}   
//makes the game restart and go back to zero
function restartGame() {
    userScore = 0;
    cpuScore = 0;
    tieScore = 0;
    document.getElementById("message").innerText = "";
    updatedScores();

}

restart.addEventListener('click', restartGame);

