// TP
//   1: Vider la liste(UL) quand on clique sur le bouton "clear"
//   2: Ajouter un bouton supprimer pour chaque todo.Quand on clique sur le bouton
//     supprimer, retirer le todo de la liste(UL).Quelques recherches sur internet
//   3: Au départ, le bouton clear doit être inactif.Il ne devient actif que lorsqu'on
//     affiche tous les elements du tableau "todos"

const todos = [
  "Text a friend I haven't talked to in a long time",
  "Plan a vacation I've always wanted to take",
  "Take cat on a walk",
  "Go to the gym",
  "Have a photo session with some friends",
  "Learn calligraphy",
  "Learn Express.js",
  "Plan a trip to another country",
  "Take a hike at a local park",
  "Bake pastries for me and neighbor",
  "Contribute code or a monetary donation to an open-source software project",
  "Watch a classic movie",
  "Do something nice for someone I care about",
];

const $addTodoButton = document.querySelector("#add");
const $clearButton = document.querySelector("#clear");
const $todoList = document.querySelector("#todos");

let currentIndex = 0;

$addTodoButton.addEventListener("click", function () {
  //   console.log(todos[currentIndex]);
  if (currentIndex === todos.length - 1) {
    this.toggleAttribute("disabled");
    $clearButton.toggleAttribute("disabled");
    return;
  }

  /**
   * 1.Creating elements
   */

  //1.a. Creating todo
  const $todo = document.createElement("li");
  $todo.innerText = todos[currentIndex];
  currentIndex++;

  // 1.b. Creating todo button
  const $deleteButton = document.createElement("button");
  $deleteButton.innerText = "x";

  /**
   * 2.Creating elements
   */

  // 2.a. Toggling complete and uncomplete todo
  $todo.addEventListener("click", function () {
    $todo.classList.toggle("completed");
  });

  // 2.b.
  $deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    this.parentElement.remove();
  });

  /**
   * 3. Adding elements to the DOM
   */

  // 3.a. Add todo on the DOM
  $todoList.append($todo);

  // 3.b. Add button on todo
  $todo.appendChild($deleteButton);
});

$clearButton.addEventListener("click", function () {
  $todoList.innerHTML = "";
  currentIndex = 0;
  this.toggleAttribute("disabled");
  $addTodoButton.toggleAttribute("disabled");
});
