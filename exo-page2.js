const urlParams = new URLSearchParams(location.search);
const id = parseInt(urlParams.get("id"));


const user = users.find((user) => user.id === id);

const $details = document.querySelector("#details");

$details.innerHTML = `
<h1>${user.name}</h1>
<p>${user.email}</p>
<p>${user.phone}</p>
`;
