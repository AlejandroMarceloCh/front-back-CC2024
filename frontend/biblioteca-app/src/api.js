import axios from 'axios';

// Configuración para la API de libros
const librosApi = axios.create({
    baseURL: 'http://3.90.116.170:8001'
});

// Configuración para la API de préstamos
const prestamosApi = axios.create({
    baseURL: 'http://3.90.116.170:8002'
});

// Configuración para la API de usuarios
const usuariosApi = axios.create({
    baseURL: 'http://3.90.116.170:8003'
});

// Funciones para la API de libros
export const getAllBooks = () => librosApi.get('/libros');
export const searchBooks = (query) => librosApi.get(`/libros/${query}`);

// Funciones para la API de préstamos
export const addPrestamo = (prestamoData) => prestamosApi.post('/prestamos', prestamoData);

// Funciones para la API de usuarios
export const registerUser = (userData) => usuariosApi.post('/usuarios', userData);
