import axios from "axios";

const API = axios.create({
  baseURL: "https://mapa.desenvolvedor.cloud/apiapp/api/",
  timeout: 10000,
});
export default API;
