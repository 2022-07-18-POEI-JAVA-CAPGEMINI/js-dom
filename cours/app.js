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

const technos = document.querySelector(".technos");

technos.innerHTML = "";

for (let framwork of framworks) {
  //   technos.innerHTML += `<li>${framwork}</li>`;
  technos.innerHTML = technos.innerHTML + `<li>${framwork}</li>`;
}
