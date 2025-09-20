import axios from "axios";
// import { TOKEN } from "../const";

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2NjOTliYTUzZWFiNTUxODlkZGY2MzA5MDA1NzZkZCIsIm5iZiI6MTc1NTUyNTk3MC43Nywic3ViIjoiNjhhMzMzNTIwYTMzMmZkYjA0ZTk0ZmU2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7PQHrXWl6KSZfjpj0nENIMa4dT28ah5Ymn5LYkbbMC4'

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
