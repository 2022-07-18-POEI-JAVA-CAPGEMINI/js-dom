const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

const $registerForm = document.querySelector("form");

$registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Nom : ${$name.value}`);
  console.log(`Email : ${$email.value}`);
  console.log(`Password : ${$password.value}`);
});
