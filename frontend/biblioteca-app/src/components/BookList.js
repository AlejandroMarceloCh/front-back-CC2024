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
        <div className="book-list-container">
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
                            <td className="book-title">{book.titulo}</td>
                            <td className="book-author">{book.autor}</td>
                            <td>{book.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
