const $users = document.querySelector("#users-list");

users
  .map((user) => {
    const {
      id,
      name,
      email,
      address: { city },
      phone,
      company: { name: company },
    } = user;

    return {
      id,
      name,
      email,
      city,
      phone,
      company,
    };
  })
  .forEach(({ id, name, email, city, phone, company }) => {
    $users.innerHTML += `<tr>
        <td>${id}</td>
         <td>${name}</td>
          <td>${email}</td>
           <td>${city}</td>
            <td>${phone}</td>
             <td>${company}</td>
             <td><a href="exo-page2.html?id=${id}">Voir</a></td>
    </tr>`;
  });
