var btnAddStudent = document.getElementById('btn-add-student');
var btnStatistics = document.getElementById('btn-statistics');
var listStudents = document.getElementById('students');
var table = document.getElementById('statistics');

//Compteur pour donner un identifiant unique à chaque étudiant·e
var studentId = 0;


//Traitement du formulaire d'ajout d'un étudiant
btnAddStudent.addEventListener('click', function (event) {

    //On empêche la soumission du formulaire (qui générerait une requête HTTP)
    event.preventDefault();

    //On récupère les données des inputs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const grade = document.getElementById('grade').value;

    //On crée un élément HTML pour stocker l'étudiant dans la liste
    const studentElement = document.createElement('li');
    studentElement.innerHTML = `${firstName} ${lastName} <span id='grade-${studentId}'>${grade}</span>`;

    //On ajoute l'étudiant à la liste
    listStudents.appendChild(studentElement);
    studentId = studentId + 1;
});

//Traitement du calcul des statistiques sur l'ensemble des notes
btnStatistics.addEventListener('click', function (event) {
    //On récupère toutes les notes

    //On récupère toutes les spans qui contiennent les notes avec un pattern CSS
    //(D'autres solutions sont possibles)
    let gradeElements = document.querySelectorAll('span[id^="grade"]');
    let grades = [];
    for (let i = 0; i < gradeElements.length; i++) {
        let grade = gradeElements[i].innerText;
        grades.push(parseFloat(grade))
    }

    //On affiche le tableau
    table.style.display = 'block';
    let meanGrade = mean(grades);

    //On indique la valeur moyenne dans le tableau récapitulatif
    document.querySelector('td#mean-grade').innerText = meanGrade.toFixed(2);
    //Faire la même chose pour la valeur médiane
});


/**
 * Retourne la valeur moyenne
 * @param {*} grades Collection de notes (nombres compris entre 0 et 20)
 * @returns 
 */
function mean(grades) {

    if (grades.length === 0)
        return "La moyenne n'est pas définie";

    let mean = 0;
    for (let i = 0; i < grades.length; i++) {
        mean += grades[i];
    }

    return mean / grades.length;
}


//A implémenter ! (déjà fait dans un autre exercice)
function median(grades){

}