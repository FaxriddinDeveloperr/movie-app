import axios from "axios";
import { TOKEN } from "../const";

// TMDB API
export const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/', // => https://api.themoviedb.org/3/
});

// Backend API
export const authApi = axios.create({
  baseURL: 'https://backend-user-zz0o.onrender.com/', // => https://backend-user-zz0o.onrender.com/
});

// Token faqat TMDB uchun ishlatiladi
api.interceptors.request.use((config) => {
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  config.headers["Cache-Control"] = "no-cache";
  return config;
});
