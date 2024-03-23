import axios, { AxiosInstance } from 'axios';
import { BASE_URL, SERVER_TIMEOUT } from '../const';
import { getToken } from '../services/token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: SERVER_TIMEOUT
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
