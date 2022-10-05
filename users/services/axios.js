import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0/esm/axios.min.js";
import { BASE_URL } from "../constantes.js";

export const Api = axios.create({
  baseURL: BASE_URL,
});
