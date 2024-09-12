import axios from "axios";

const api = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: { "Content-Type": "application/json" },
});

export default api;
