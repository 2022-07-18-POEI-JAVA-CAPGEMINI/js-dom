const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

const $nameError = document.querySelector("#name_error");
const $emailError = document.querySelector("#email_error");
const $passwordError = document.querySelector("#password_error");

const $users = document.querySelector("#users");

const $registerForm = document.querySelector("form");

// Success
const $successText = document.querySelector("#success-message");

const fields = [$name, $email, $password];

$registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

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
});

const validator = {
  name: {
    required: true,
  },
  email: {
    required: true,
    isEmail: true,
  },
  password: {
    required: true,
    isStrong: true,
  },
};
