//Réagir au remplissage d'un input (perte du focus sur l'input)

//Récupérer l'élement message

let pMessage = document.getElementById("message");

//Réagir a la saisie clavier ? input
//Récupérer l'élément
let inputText = document.getElementById("first_name");
inputText.addEventListener('input', function (event) {
    //Récupérer la valeur contenue dans un input
    console.log(inputText.value)
});

let inputNumber = document.getElementById('age');
inputNumber.addEventListener('change', function (event) {
    let age = inputNumber.value;
    pMessage.textContent = `Vous avez ${age} ans !`; 
})

//Réagir au select (nouveau choix)

let select = document.getElementById("spe");
select.addEventListener('change', function(event){
    //Afficher la valeur selectionnée
    console.log(select.value);
});


//Réagir au fait qu'une checkbox soit cochée ou non
let checkboxJS = document.getElementById("js");

checkboxJS.addEventListener('change', function(event){
    console.log('Checkbox a changé');
    console.log(checkboxJS.checked)
});


