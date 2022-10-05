const $usersList = document.querySelector("#users-list");

axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //   console.log(response.data);
  const users = response.data;
  for (let user of users) {
    const $row = document.createElement("tr");

    const $idColumn = createColumn(user.id);

    const $nameColumn = createColumn(user.name);

    const $emailColumn = createColumn(user.email);

    const $cityColumn = createColumn(user.address.city);

    const $phoneColumn = createColumn(user.phone);

    const $companyNameColumn = createColumn(user.company.name);
  }
});

function createColumn(value) {
  const $column = document.createElement("td");
  $column.innerText = value;
  return $column;
}
