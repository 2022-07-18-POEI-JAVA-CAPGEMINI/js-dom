import { users } from "../users.js";
import { getParam } from "../utils/get-param.js";

const id = parseInt(getParam("id"));

const user = users.find((user) => user.id === id);

const $details = document.querySelector("#details");

$details.innerHTML = `
<h1>${user.name}</h1>
<p>${user.email}</p>
<p>${user.phone}</p>
`;
