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
const $todoList = document.querySelector("#todos");

let currentIndex = 0;

$addTodoButton.addEventListener("click", function () {
  //   console.log(todos[currentIndex]);
  if (currentIndex === todos.length - 1) {
    this.toggleAttribute("disabled");
    return;
  }
  const $todo = document.createElement("li");
  $todo.innerText = todos[currentIndex];
  $todoList.append($todo);
  currentIndex++;

  //   Arrêter l'ajout des todos quand on arrive à la fin de la liste
});
