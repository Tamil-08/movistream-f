import axios from "axios";

const api = axios.create({
  baseURL: "https://movistream-b.onrender.com",
});

export default api;
