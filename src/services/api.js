import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-q0u8.onrender.com",
});
