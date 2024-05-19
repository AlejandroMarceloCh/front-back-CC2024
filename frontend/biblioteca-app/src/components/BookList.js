import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../api/api';
import '../styles/BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

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

    return (
        <table className="book-table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Año</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.titulo}</td>
                        <td>{book.autor}</td>
                        <td>{book.ano}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookList;
