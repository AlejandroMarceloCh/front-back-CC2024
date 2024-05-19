import React from 'react';
import BookList from '../components/BookList';
import BookSearch from '../components/BookSearch';
import RegisterBook from '../components/RegisterBook';
import '../styles/Biblioteca.css';

const Biblioteca = () => {
    return (
        <div className="biblioteca-container">
            <h1>Biblioteca UTEC</h1>
            <div className="biblioteca-actions">
                <RegisterBook />
                <BookSearch />
                <BookList />
            </div>
        </div>
    );
};

export default Biblioteca;
