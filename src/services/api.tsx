import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.104:8000/api/",
});
export default API;
