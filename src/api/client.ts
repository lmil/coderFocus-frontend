import axios from "axios";

export const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: log request in development
if (import.meta.env.DEV) {
  api.interceptors.request.use((config) => {
    console.log("## API Request: ", config.method?.toUpperCase(), config.url);
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.log("## API Response: ", response.config.url, response.status);
      return response;
    },
    (error) => {
      console.error("## API Error: ", error.config?.url, error.message);
      return Promise.reject(error);
    },
  );
}
