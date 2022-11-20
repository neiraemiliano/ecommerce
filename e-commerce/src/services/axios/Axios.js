import axios from 'axios';

const AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

AxiosInstance.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => Promise.reject(error),
);

AxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
