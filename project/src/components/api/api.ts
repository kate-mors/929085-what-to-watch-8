import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
//import {getToken} from '../../utils/token';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

// enum HttpCode {
//    Unauthorized = 401,
// }

//type UnauthorizedCallback = () => void;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      Promise.reject(error);
    },
  );

  return api;
};
