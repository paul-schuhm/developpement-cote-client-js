//Récupérer les éléments HTML de la page qui me seront utiles (DOM)
var btnAddStudent = document.getElementById('btn-add-student');
var ulStudents = document.getElementById('students');


//Ajouter un écouteur d'évènement 'click' sur le bouton
btnAddStudent.addEventListener('click', function (event) {

    //Pour empecher l'émission d'une requete HTTP (comportement par défaut du navigateur)
    event.preventDefault();
    //Code déclenché quand le bouton 'Ajouter à la liste' est clické

    //Récupérer les données fournies via les inputs du formulaire (prénom, nom, note)
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const grade = document.getElementById('grade');

    //Créer un objet de type Student (voir la fonction constructeur)
    const student = new Student(
        firstNameElement.value,
        lastNameElement.value,
        grade.value
    );

    const studentElement = document.createElement('li');

    //Le symbole 'backtick' (`) ALT+OPT+/ sur macOS
    studentElement.innerHTML = `${student.firstName} ${student.lastName} <span>${student.grade}</span>`;

    ulStudents.appendChild(studentElement);
});

//Créer un modèle d'étudiant·e

//Fonction constructeur : fonction qui construit un objet et le retourne
function Student(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

