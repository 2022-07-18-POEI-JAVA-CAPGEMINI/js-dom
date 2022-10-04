const $users = document.querySelector("#users-list");

users.forEach((user) => {
  const {
    id,
    name,
    email,
    address: { city },
    phone,
    company: { name: company },
  } = user;
  $users.innerHTML += `<tr>
        <td>${id}</td>
         <td>${name}</td>
          <td>${email}</td>
           <td>${city}</td>
            <td>${phone}</td>
             <td>${company}</td>
             <td><a href="user-details.html?id=${id}">Voir</a></td>
    </tr>`;
});
