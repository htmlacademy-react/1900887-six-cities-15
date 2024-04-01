import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL, SERVER_TIMEOUT } from '../const';
import { getToken } from '../services/token';
import { StatusCodes } from 'http-status-codes';
import { useAppDispatch } from '../app/hooks';
import { setError } from '../store/action';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: SERVER_TIMEOUT
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response, (error: AxiosError) => {
      const status = error.response?.status || 500;
      const dispatch = useAppDispatch();
      switch(status) {
        case StatusCodes.UNAUTHORIZED: {
          dispatch(setError(error.message));
        }
      }
    }
  );
  return api;
};
