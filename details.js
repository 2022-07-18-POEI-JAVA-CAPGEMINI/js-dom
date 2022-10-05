import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0/esm/axios.min.js";

function getParam(param) {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get(param);
}

const main = document.querySelector("main");

const id = getParam("id");

axios
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => {
    const user = response.data;
    main.innerHTML = `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://robohash.org/${user.id}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${user.name}</p>
        <p class="subtitle is-6">${user.email}</p>
      </div>
    </div>

    <div class="content">
      ${user.company.catchPhrase}.
    </div>
  </div>
</div>`;
  });
