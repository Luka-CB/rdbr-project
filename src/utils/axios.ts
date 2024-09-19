import axios from "axios";

const api = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 9d0bcaff-bff7-46e7-b7c8-c7a0135dfd78",
  },
});

export default api;
