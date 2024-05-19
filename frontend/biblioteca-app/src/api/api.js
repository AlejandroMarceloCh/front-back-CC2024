import axios from 'axios';

// Configuración para la API de libros
const librosApi = axios.create({
    baseURL: 'http://34.203.174.121:8001'
});

// Configuración para la API de préstamos
const prestamosApi = axios.create({
    baseURL: 'http://34.203.174.121:8002'
});

// Configuración para la API de usuarios
const usuariosApi = axios.create({
    baseURL: 'http://34.203.174.121:8003'
});

// Funciones para la API de libros
export const getAllBooks = () => librosApi.get('/libros');
export const searchBooks = (query) => librosApi.get(`/libros/${query}`);
export const registerBook = (bookData) => librosApi.post('/libros', bookData);

// Funciones para la API de préstamos
export const addPrestamo = (prestamoData) => prestamosApi.post('/prestamos', prestamoData);
export const getAllLoans = () => prestamosApi.get('/prestamos');


// Funciones para la API de usuarios
export const registerUser = (userData) => usuariosApi.post('/usuarios', userData);   
export const getAllUsers = () => usuariosApi.get('/usuarios');