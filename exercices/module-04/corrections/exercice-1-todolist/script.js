// Sélection des éléments
const taskInput = document.querySelector("#new-task");
const prioritySelect = document.querySelector("#priority");
const addTaskButton = document.querySelector("#add-task");
const clearTasksButton = document.querySelector("#clear-tasks");
const toggleCompletedButton = document.querySelector("#toggle-completed");
const sortTasksButton = document.querySelector("#sort-tasks");
const taskList = document.querySelector("#task-list");

// Fonction pour ajouter une tâche
addTaskButton.addEventListener("click", function(event){
    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.dataset.priority = prioritySelect.value;
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        
        const span = document.createElement("span");
        span.textContent = `${taskInput.value} (Priorité: ${prioritySelect.value})`;
        
        const moveTopButton = document.createElement("button");
        moveTopButton.textContent = "⬆";
        moveTopButton.classList.add("move-top");
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(moveTopButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Marquer une tâche comme complétée via la case à cocher
taskList.addEventListener("change", function(event){
    if (event.target.classList.contains("task-checkbox")) {
        event.target.parentElement.classList.toggle("completed", event.target.checked);
    }
});

// Déplacement d'une tâche en haut via le bouton dédié
taskList.addEventListener("click",  function(event){
    if (event.target.classList.contains("move-top")) {
        const taskItem = event.target.parentElement;
        taskList.prepend(taskItem);
    }
});

// Supprimer toutes les tâches
clearTasksButton.addEventListener("click",  function(event){
    taskList.innerHTML = "";
});

// Masquer/Afficher les tâches complétées
toggleCompletedButton.addEventListener("click", function(event){
    document.querySelectorAll(".completed").forEach(task => {
        task.classList.toggle("hidden");
    });
});

// Trier les tâches par priorité
sortTasksButton.addEventListener("click",  function(event){
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => b.dataset.priority - a.dataset.priority);
    tasks.forEach(task => taskList.appendChild(task));
});