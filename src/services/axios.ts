import axios from "axios";

// Instância do axios
export const api = axios.create({
  baseURL: "https://api.github.com",
});
