import { Api } from "../services/axios.js";
import { getParam } from "../utils/get-params.js";
import { Card } from "./card/card.js";

const main = document.querySelector("main");

const id = getParam("id");

Api.get(`/${id}`).then((response) => {
  const user = response.data;
  main.innerHTML = Card(user);
});
