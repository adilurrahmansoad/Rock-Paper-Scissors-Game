let userPoint = 0;
let compPoint = 0;

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const pym = document.querySelector("#pym")

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    pym.style.backgroundColor = "#1b263b";
    pym.style.width = "23rem";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWInner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userPoint++;
        userScore.innerText = userPoint;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        pym.style.backgroundColor = "green";
        pym.style.width = "25rem";
    } else {
        compPoint++;
        compScore.innerText = compPoint;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        pym.style.backgroundColor = "red";
        pym.style.width = "25rem";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWInner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

