console.log('hello')

//Recuperer l'élément button du document (DOM)
let btn = document.getElementById('btn');

//Ajouter un écouteur d'évènement au click du bouton

// btn.addEventListener('click', function (event) {

//     let h2 = document.querySelector('h2');

//     //Si mon titre est en bleu (a la classe "blue")
//     if (h2.classList.contains('blue')) {
//         //Le passer en noir (retirer la classe bleue)
//         h2.classList.remove('blue');
//         //Modifier le texte du boutton en "Mettre le titre en bleu"
//         btn.textContent = "Mettre le titre en bleu"
//     } else {
//         //Si mon titre est en noir
//         //Le passer en bleu
//         h2.classList.add('blue');
//         //Modifier le texte du bouton en "mettre le titre en noir"
//         btn.textContent = "Mettre le titre en noir";
//     }
// });

btn.addEventListener('mousedown', function(event){

    let h2 = document.querySelector('h2');

    //toggle retourne vrai si la classe 'blue' est présente,
    //faux sinon
    let isBlue = h2.classList.toggle('blue');

    if(isBlue){
        btn.textContent = "Mettre le titre en noir";
    }else{
        btn.textContent = "Mettre le titre en bleu";
    }

    console.log(event)

});

//Récupérer le colorPicker dans le document
let colorPicker = document.querySelector('input[type="color"]');

//Mettre le bg color de la page a la couleur choisie

colorPicker.addEventListener('change', function(event){
    //Modifier la couleur d'arriere plan du body
    document.body.style.background = colorPicker.value;
});