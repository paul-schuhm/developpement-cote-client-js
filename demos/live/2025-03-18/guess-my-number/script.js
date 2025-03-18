//Etat du jeu
const gameState = {
    numberToGuess: randomNumber(),
    nbOfTries: 0
};


//Retourne un entier aléatoire compris entre 0 et 100 (exclus)
function randomNumber() {
    return Math.floor(Math.random() * 100);
}

//Récupérer les écrans
const screenNewGame = document.getElementById('screen_new_game');
const screenGame = document.getElementById('screen_game');
const screenGameOver = document.getElementById('screen_gameover');

//Boutons
const btnNewGame = document.getElementById('btn_new_game');
const btnGuess = document.getElementById('btn_guess');
const btnReplay = document.getElementById('btn_replay');



//Nouvelle partie
btnNewGame.addEventListener('click', function (event) {
    //Cacher l 'ecran screenNewGame
    screenNewGame.classList.toggle('hidden');
    //Afficher l'ecran screenGame
    screenGame.classList.toggle('hidden');
});

//Proposer un nombre
btnGuess.addEventListener('click', function (event) {

    //Incrémenter le nombre de tentatives
    gameState.nbOfTries++;

    const guess = document.getElementById('guess').value;
    //Comparer avec le nombre à trouver

    //Gagné, passer sur la page de fin de jeu
    if (guess == gameState.numberToGuess) {
        screenGame.classList.toggle('hidden');
        screenGameOver.classList.toggle('hidden');

        //Il me faut le pseudo, le nomnbre de tentatives et le nombre à trouver
        const pseudo = document.getElementById('pseudo').value.trim();
        const pMessage = document.querySelector('div#screen_gameover p');

        pMessage.textContent = `Bravo ${pseudo} ! Le nombre à trouver était bien ${gameState.numberToGuess}. Vous avez trouvé en ${gameState.nbOfTries} tentatives.`
    } else {
        //Perdu
        const pHint = document.getElementById('hint');
        //Afficher un indice
        pHint.textContent = guess < gameState.numberToGuess ? "Le nombre à devenir est plus grand !" : "Le nombre à devenir est plus petit !";
    }

});

//Rejouer une partie
btnReplay.addEventListener('click', function (event) {

    //Afficher ecran game, masquer ecran gameover
    screenGameOver.classList.toggle('hidden');
    screenGame.classList.toggle('hidden');

    //Réinitialise le jeu : tirer un nouveau nombre, réinitialiser le nombre de tentatives à 0
    gameState.numberToGuess = randomNumber();
    gameState.nbOfTries = 0;

});