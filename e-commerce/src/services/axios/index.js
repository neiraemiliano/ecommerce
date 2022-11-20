import AxiosInstance from './Axios';

const METHODS = ['get', 'put', 'post', 'patch', 'delete'];

const httpMethods = METHODS.map(
  (method) =>
    (url, data = {}) =>
      AxiosInstance.request({
        url,
        method,
        data,
      }),
);

export const [get, put, post, patch, del] = httpMethods;
