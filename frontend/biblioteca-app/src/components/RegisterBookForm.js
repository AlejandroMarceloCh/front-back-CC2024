import React, { useState } from 'react';
import { registerBook } from '../api';

const RegisterBookForm = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bookData = { titulo, autor, descripcion, imagen };
            await registerBook(bookData);
            alert('Libro registrado exitosamente');
            setTitulo('');
            setAutor('');
            setDescripcion('');
            setImagen('');
        } catch (error) {
            console.error('Error registrando libro:', error);
            alert('Error registrando libro');
        }
    };

    return (
        <div>
            <h1>Registrar Libro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título"
                    required
                />
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    placeholder="Autor"
                    required
                />
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción"
                    required
                />
                <input
                    type="text"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    placeholder="URL de la imagen"
                    required
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default RegisterBookForm;
