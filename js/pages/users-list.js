import { Row } from "../components/row.js";
import { users } from "../users.js";

const $users = document.querySelector("#users-list");

users.forEach((user) => {
  $users.innerHTML += Row(user);
});
