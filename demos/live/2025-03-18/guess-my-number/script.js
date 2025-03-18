const btnNewGame = document.getElementById("btn_new_game");
const screenNewGame = document.getElementById("first_screen");
const screenGame = document.getElementById("second_screen");
const screenGameOver = document.getElementById("third_screen");
const btnGuess = document.getElementById("btn_guess");
const btnStartNewGame = document.getElementById("btn_another_game");

const game = {
  nbOfTries: 0,
  numberToGuess: 1 // randomNumber(),
};

function randomNumber(){
    return Math.ceil(Math.random() * 100);
}

function showGameScreen(){
    screenGame.classList.toggle('hidden', false);
}
function hideGameOverScreen(){
    screenGameOver.classList.toggle('hidden', true);
}

function resetGameState() {
  //Reset game state
  game.numberToGuess = 1; //randomNumber();
  game.nbOfTries = 0;
}

btnStartNewGame.addEventListener("click", function (event) {
  resetGameState();
  hideGameOverScreen();
  showGameScreen();
});

btnNewGame.addEventListener("click", function (event) {
  screenNewGame.classList.toggle("hidden");
  screenGame.classList.toggle("hidden");
  btnGuess.addEventListener("click", function (event) {
    game.nbOfTries++;
    const guess = document.getElementById("guess").value.trim();
    if (guess == game.numberToGuess) {
      screenGame.classList.toggle("hidden");
      screenGameOver.classList.toggle("hidden");
      const pseudo = document.getElementById('pseudo').value.trim(); 
      const gameOverMessage = document.getElementById("game_over_message");
      gameOverMessage.textContent = `Bravo ${pseudo}, le nombre à trouver était bien ${game.numberToGuess}. Vous l'avez trouvé en ${game.nbOfTries} tentative(s) !`;
    } else {
      const hint = document.getElementById("hint");
      const message =
        guess < game.numberToGuess ? "Plus grand ! " : "Plus petit !";
      hint.textContent = message;
    }
  });
});
