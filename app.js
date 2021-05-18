const btn = document.getElementsByClassName("btn");
const playerMove = document.getElementById("yourMove");
const computerMove = document.getElementById("computerMove");
const win = document.getElementById("win");
let pScore = 0;
let cScore = 0;
const restart = document.getElementById(reStart);

for (let btns of btn) {
  btns.addEventListener("click", function () {
    const playerChoise = btns.textContent;
    // console.log(playerChoise);
    playerMove.classList.add("playerAnimation");
    computerMove.classList.add("computerAnimation");

    // computer's move--------------
    const cMove = ["rock", "paper", "scissors"];
    const cIndex = Math.floor(Math.random() * 3);
    const computerHand = cMove[cIndex];
    // console.log(computerHand);

    setTimeout(() => {
      playerMove.classList.remove("playerAnimation");
      computerMove.classList.remove("computerAnimation");

      //   udate player img--------
      playerMove.src = `./assets/${this.textContent}.png`;

      //   update computer move-------------------------
      computerMove.src = `./assets/${computerHand}.png`;

      //   compairition-----------------------------
      compair(playerChoise, computerHand);
    }, 1500);
    playerMove.src = `./assets/rock.png`;
    computerMove.src = `./assets/rock.png`;
  });
}

function compair(playerChoise, computerHand) {
  if (playerChoise === computerHand) {
    win.innerHTML = `It is a tie`;
    return;
  }
  //   for rock-----------------------
  if (playerChoise === "rock") {
    if (computerHand === "scissors") {
      win.innerHTML = `Player wins`;
      pScore++;
      upDateScore();
      return;
    } else {
      win.innerHTML = `Computer wins`;
      cScore++;
      upDateScore();
      return;
    }
  }
  //   for paper-----------------------
  if (playerChoise === "paper") {
    if (computerHand === "rock") {
      win.innerHTML = `Player wins`;
      pScore++;
      upDateScore();
      return;
    } else {
      win.innerHTML = `Computer wins`;
      cScore++;
      upDateScore();
      return;
    }
  }

  //   for scissor-----------------------------
  if (playerChoise === "scissors") {
    if (computerHand === "paper") {
      win.innerHTML = `Player wins`;
      pScore++;
      upDateScore();
      return;
    } else {
      win.innerHTML = `Computer wins`;
      cScore++;
      upDateScore();
      return;
    }
  }
}

function upDateScore() {
  const playerScore = document.getElementById("playerScore");
  const computerScore = document.getElementById("computerScore");
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
}

// restart game---------------------------------

reStart.addEventListener("click", () => {
  window.location.reload();
});
