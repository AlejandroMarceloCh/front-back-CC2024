import React, { useState } from 'react';
import { searchBooks } from '../api/api';
import '../styles/BookSearch.css';

const BookSearch = ({ onFixChange }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await searchBooks(query);
            setBooks(response.data.libros);
        } catch (error) {
            alert('Error buscando libros');
        }
    };

    return (
        <div className="book-search-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar libros por título"
                onFocus={() => onFixChange(true)} // Activar el modo "fijo"
            />
            <button onClick={handleSearch}>Buscar</button>
            <ul className="book-search-results">
                {books.map((book) => (
                    <li key={book.id}>
                        <span className="book-title">{book.titulo}</span>
                        <span className="book-author">by {book.autor}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookSearch;
