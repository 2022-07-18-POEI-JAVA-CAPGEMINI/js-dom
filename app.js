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

// Generate random heading
const titles = ["Welcome", "Goodbye", "Good morning", "Blablabla"];
const styles = ["style1", "style2", "style3"];
const mainTitle = document.querySelector("h1");

const titleGenerateButton = document.querySelector("button");

titleGenerateButton.addEventListener("click", function (e) {
  console.log(e);
  const randomIndexTitle = generateRandomIndex(titles.length);
  const randomIndexStyles = generateRandomIndex(styles.length);
  mainTitle.innerText = titles[randomIndexTitle];

  for (let style of styles) {
    if (mainTitle.classList.contains(style)) {
      mainTitle.classList.remove(style);
    }
  }
  mainTitle.classList.add(styles[randomIndexStyles]);
});

function generateRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// let count = 0;
// document.addEventListener("mousemove", function (event) {
//     count++;
//   console.log("x : ", event.clientX);
//   console.log("y : ", event.clientY);
//     console.log(count);
// });

// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   console.log("Context menu open");
// });
