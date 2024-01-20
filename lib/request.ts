import axios, { InternalAxiosRequestConfig } from 'axios';
import localForage from 'localforage';
import { getBaseURL } from './utils';
const isBrowser = typeof window !== 'undefined';

const request = axios.create({
  baseURL: getBaseURL(),
  // timeout: 10000,
});

request.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    if (isBrowser) {
      let Authorization = (await localForage.getItem(
        'Authorization',
      )) as string;
      if (Authorization) request.headers.Authorization = Authorization;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const code = error.response?.data?.code;
    switch (code) {
      default:
        break;
    }
    return Promise.reject(error);
  },
);

export default request;
