import axios from "axios";
import { BASE_URL, AUTH_BASE_URL, TOKEN } from "../const";

// TMDB API
export const api = axios.create({
  baseURL: BASE_URL,
});

// Backend API
export const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
});

// Token faqat TMDB uchun kerak
api.interceptors.request.use((config) => {
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  config.headers["Cache-Control"] = "no-cache";
  return config;
});
