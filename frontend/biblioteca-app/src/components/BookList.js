import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://3.90.116.170:8001/libros');
                setBooks(response.data.libros);
            } catch (error) {
                alert('Error fetching books');
            }
        };

        fetchBooks();
    }, []);

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>{book.titulo}</li>
            ))}
        </ul>
    );
};

export default BookList;
