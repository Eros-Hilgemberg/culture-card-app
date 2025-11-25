import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.111:8000/api/",
  timeout: 10000,
});
export default API;
