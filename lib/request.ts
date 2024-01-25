import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { getBaseURL, isBrowser } from './utils';

const request = axios.create({
  baseURL: getBaseURL(),
  // timeout: 10000,
});

request.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    let Authorization;
    if (isBrowser) {
      Authorization = Cookies.get('Authorization');
    } else if (process.env.OUTPUT !== 'export') {
      const { cookies } = await import('next/headers');
      Authorization = cookies().get('Authorization')?.value;
    }
    if (Authorization) request.headers.Authorization = Authorization;
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
