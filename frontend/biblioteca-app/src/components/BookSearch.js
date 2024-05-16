import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://3.90.116.170/libros/${query}`);
            setResults(response.data.libros);
        } catch (error) {
            alert('Error searching books');
        }
    };

    return (
        <div>
            <input type="text" placeholder="Search for books" onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((book) => (
                    <li key={book.id}>{book.titulo}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookSearch;
