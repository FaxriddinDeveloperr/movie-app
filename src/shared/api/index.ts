import axios from "axios";
import { BASE_URL, TOKEN } from "../const";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const authApi = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  config.headers["Cache-Control"] = "no-cache";
  return config;
});
