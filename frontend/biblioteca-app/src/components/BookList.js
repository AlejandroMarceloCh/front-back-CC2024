import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://34.203.174.121:8001/libros');
                setBooks(response.data.libros);
            } catch (error) {
                alert('Error fetching books');
            }
        };

        fetchBooks();
    }, []);

    return (
        <ul className="book-list">
            {books.map((book) => (
                <li key={book.id}>
                    <span className="book-title">{book.titulo}</span>
                    <span className="book-author">by {book.autor}</span>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
