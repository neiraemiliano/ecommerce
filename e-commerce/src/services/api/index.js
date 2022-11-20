import { post } from '../axios';

export const signin = async (data) => await post('/auth/login', data);
