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
  // console.log(`Nom : ${$name.value}`);
  // console.log(`Email : ${$email.value}`);
  // console.log(`Password : ${$password.value}`);

  if ($name.value.length === 0) {
    $nameError.innerText = "Le nom ne peut pas être vide";
  } else {
    $nameError.innerText = "";
  }

  const $userRow = document.createElement("tr");
  const $nameColumn = document.createElement("td");
  $nameColumn.innerText = $name.value;

  const $emailColumn = document.createElement("td");
  $emailColumn.innerText = $email.value;

  $userRow.append($nameColumn, $emailColumn);
  $users.appendChild($userRow);

  // 1. Ne pas ajouter d'enregistrements dans le tableaux tant que tous les champs ne sont pas remplis
  // 2. Terminer la validation du formulaire(email, mot de passe)
  // 3. Le mot de passe doit avoir au moins 8 caractères
  // 4. Ajouter un bouton pour chaque ligne qui permet supprimer la ligne
});
