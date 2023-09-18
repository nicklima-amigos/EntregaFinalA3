import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : 'http://localhost:3000';

export const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL,
});
