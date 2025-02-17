import axios from "axios";

export const totalApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL1,
  params: { date: "2023-01-30" },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_APP_HOST1,
  },
});

export const detailApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL2,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_APP_HOST2,
  },
});
