import React, { useState, useEffect } from 'react';
import { getAllBooks, searchBooks } from '../api';

const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getAllBooks();
                setBooks(response.data.libros);
            } catch (error) {
                alert('Error fetching books');
            }
        };
        fetchBooks();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await searchBooks(searchTerm);
            setBooks(response.data.libros);
        } catch (error) {
            alert('Error fetching books');
        }
    };

    return (
        <div>
            <h1>Books</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for books"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.titulo} by {book.autor}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookSearch;
