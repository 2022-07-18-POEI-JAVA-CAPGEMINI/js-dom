const technos = document.querySelectorAll(".tech");

for (let tech of technos) {
  tech.addEventListener("click", function () {
    // alert(`Vous avez cliqué sur ${this.innerText}`);
    // alert(`Vous avez cliqué sur ${tech.innerText}`);
    // console.log(tech.classList);//Lister toutes les classes d'un eelement

    // Si la classe existe, on la retire
    // Sinon, on la rajoute
    // if (tech.classList.contains("clicked")) {
    //   tech.classList.remove("clicked");
    // } else {
    //   tech.classList.add("clicked");
    // }
    // toggle(tech, "clicked");
    tech.classList.toggle("clicked");
  });
}

// function toggle(element, className) {
//   if (element.classList.contains(className)) {
//     element.classList.remove(className);
//   } else {
//     element.classList.add(className);
//   }
// }
