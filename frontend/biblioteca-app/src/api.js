import axios from 'axios';

const api = axios.create({
    baseURL: '3.90.116.170'
});

export const registerUser = (userData) => api.post('/usuarios', userData);
export const searchBooks = (query) => api.get(`/libros/${query}`);
export const getAllBooks = () => api.get('/libros');
