//Les champs du formulaire
const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

// Les paragraphes pour afficher les erreurs
const $nameError = document.querySelector("#name_error");
const $emailError = document.querySelector("#email_error");
const $passwordError = document.querySelector("#password_error");

//tbody
const $users = document.querySelector("#users");

// Le formulaire
const $registerForm = document.querySelector("form");

$registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Nom : ${$name.value}`);
  console.log(`Email : ${$email.value}`);
  console.log(`Password : ${$password.value}`);
});
