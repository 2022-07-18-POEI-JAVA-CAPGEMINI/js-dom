export function Row(user) {
  const {
    id,
    name,
    email,
    address: { city },
    phone,
    company: { name: company },
  } = user;
  return `<tr>
        <td>${id}</td>
         <td>${name}</td>
          <td>${email}</td>
           <td>${city}</td>
            <td>${phone}</td>
             <td>${company}</td>
             <td><a href="/pages/user-details.html?id=${id}">Voir</a></td>
    </tr>`;
}
