const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Django",
  "Express.js",
  "Meteor",
];

// const technos = document.querySelectorAll("li");

// Afficher toute la liste
// console.log(technos);

// Accéder au premier element de la liste
// console.log(technos[0]);

// O(n)
// for (let element of technos) {
//   const randomIndex = Math.floor(Math.random() * framworks.length);
//   const framwork = framworks[randomIndex];
//   framworks.splice(randomIndex, 1);
//   element.innerText = framwork;
// }

//tb = 1 2 3 4 5 6 7 8 9 10

// 0 1 2 3 4 5 6 7 8 9

//tb.splice(4,1) => 5 est supprimé O(n)

// tb.push() : constante => O(1)
// tb.pop()  : constante => O(1)
// tb.shift() : linéaire => O(n)
// tb.unshift(valeur) => O(n)

// Pour la classe frontend, afficher les données avec le prefexe front:

// Front : HTML
// Front : CSS
// Front : Javascrip
//...
// const frontend = document.querySelectorAll(".frontend");
// for (let element of frontend) {
//   const oldText = element.innerText;
//   element.innerText = `Frontend : ${oldText}`;
// }
// Pour la classe server-side, afficher les données avec le prefexe front:
// Backend : Nest
//..
// const backend = document.querySelectorAll(".server-side");
// for (let element of backend) {
//   const oldText = element.innerText;
//   element.innerText = `Backend :  ${oldText}`;
// }

// Pour la classe server-side, afficher les données avec le prefexe front:
// Database : PostreSQL
// const database = document.querySelectorAll(".database");
// for (let element of database) {
//   const oldText = element.innerText;
//   element.innerText = `Database :  ${oldText}`;
// }

function addPrefix(className) {
  const list = document.querySelectorAll(`.${className}`);
  for (let element of list) {
    const oldText = element.innerText;
    element.innerText = `${capitalize(className)} :  ${oldText}`;
  }
}

function capitalize(str = "") {
  const splittedWord = str.split(/[-_]/);
  const capitalizedArr = [];
  for (let word of splittedWord) {
    capitalizedArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizedArr.join(" ");
}

// Execution test
["frontend", "server-side", "database"].forEach((className) => {
  addPrefix(className);
});
