import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
   Unauthorized = 401,
}

type UnauthorizedCallback = () => void;

export const createAPI = (onUnautorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnautorized();
      }

      return Promise.reject(error);
    },
  );

  return api;
};

// eslint-disable-next-line no-console
console.log(createAPI);

