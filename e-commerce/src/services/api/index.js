import { get, post } from '../axios';

export const signin = async (data) => await post('/auth/login', data);

export const fetchProducts = async () => await get('/productos');
