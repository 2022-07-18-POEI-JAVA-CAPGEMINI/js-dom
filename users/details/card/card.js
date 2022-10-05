export function Card({ id, name, email, company: { catchPhrase } }) {
  return `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://robohash.org/${id}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${name}</p>
        <p class="subtitle is-6">${email}</p>
      </div>
    </div>

    <div class="content">
      ${catchPhrase}.
    </div>
  </div>
</div>`;
}
