import React, { useState } from 'react';
import { registerBook } from '../api/api';
import '../styles/RegisterBook.css';

const RegisterBook = ({ onFixChange }) => {
    const [bookData, setBookData] = useState({ titulo: '', autor: '', descripcion: '', imagen: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerBook(bookData);
            setMessage('Libro registrado exitosamente');
            setBookData({ titulo: '', autor: '', descripcion: '', imagen: '' });
            onFixChange(false); // Desactivar el modo "fijo"
        } catch (error) {
            alert('Error registrando libro');
        }
    };

    return (
        <div className="register-book-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="titulo"
                    value={bookData.titulo}
                    onChange={handleChange}
                    placeholder="Título"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="autor"
                    value={bookData.autor}
                    onChange={handleChange}
                    placeholder="Autor"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <textarea
                    name="descripcion"
                    value={bookData.descripcion}
                    onChange={handleChange}
                    placeholder="Descripción"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="imagen"
                    value={bookData.imagen}
                    onChange={handleChange}
                    placeholder="URL de la imagen"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <button type="submit">Registrar Libro</button>
            </form>
            {message && <div className="register-message">{message}</div>}
        </div>
    );
};

export default RegisterBook;
