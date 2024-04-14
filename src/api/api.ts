import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL, SERVER_TIMEOUT } from '../const';
import { getToken } from '../services';
import { StatusCodes } from 'http-status-codes';
import { proccessErrorHandle } from '../services/proccessErrorHandle';

type TErrorType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

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

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<TErrorType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        proccessErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );
  return api;
};
