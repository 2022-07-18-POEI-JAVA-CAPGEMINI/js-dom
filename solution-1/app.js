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

// Success
const $successText = document.querySelector("#success-message");

const fields = [$name, $email, $password];

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

  if ($email.value.length === 0) {
    $emailError.innerText = "L'email ne peut pas être vide";
  } else {
    $emailError.innerText = "";
  }

  if ($password.value.length < 8) {
    $passwordError.innerText =
      "Le mot de passe doit avoir au moin 8 caractères";
  } else {
    $passwordError.innerText = "";
  }

  const isFormValid = fields.every((field) => field.value.length > 0);

  if (isFormValid && $password.value.length >= 8) {
    const $userRow = document.createElement("tr");

    const $nameColumn = document.createElement("td");
    $nameColumn.innerText = $name.value;

    const $emailColumn = document.createElement("td");
    $emailColumn.innerText = $email.value;

    const $actionColumn = document.createElement("td");
    const $deleteButton = document.createElement("button");
    $deleteButton.innerText = "Supprimer";
    $deleteButton.addEventListener("click", function () {
      // $userRow.remove();
      this.parentElement.parentElement.remove();
    });

    $actionColumn.appendChild($deleteButton);
    $userRow.append($nameColumn, $emailColumn, $actionColumn);
    $users.appendChild($userRow);
    $registerForm.reset();
    $successText.classList.toggle("success");
    $successText.innerHTML = `Enregistrement ajouté avec succès. <i class="close-success">x</i>`;
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("close-success")) {
        e.target.parentElement.innerHTML = "";
      }
    });
    setTimeout(() => {
      $successText.innerText = "";
      $successText.classList.toggle("success");
    }, 5000);
    return;
  }

  // 1. Ne pas ajouter d'enregistrements dans le tableaux tant que tous les champs ne sont pas remplis
  // 2. Terminer la validation du formulaire(email, mot de passe)
  // 3. Le mot de passe doit avoir au moins 8 caractères
  // 4. Ajouter un bouton pour chaque ligne qui permet supprimer la ligne
});
