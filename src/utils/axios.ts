import axios from "axios";

const api = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 9d10663f-307b-4e93-af8f-0ad29e2a5867",
  },
});

export default api;
