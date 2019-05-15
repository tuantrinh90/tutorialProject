import axios from 'axios';
import { BASE_API_URL }  from '../service/Config';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});
