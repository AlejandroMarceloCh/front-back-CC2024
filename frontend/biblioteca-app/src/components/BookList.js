import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [showBooks, setShowBooks] = useState(false);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://34.203.174.121:8001/libros');
            setBooks(response.data.libros);
            setShowBooks(true);
        } catch (error) {
            alert('Error fetching books');
        }
    };

    return (
        <div className="book-list-container">
            <button className="fetch-books-button" onClick={fetchBooks}>
                Mostrar Libros
            </button>
            {showBooks && (
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
            )}
        </div>
    );
};

export default BookList;
