import React from 'react';
import NavBar from '../components/NavBar';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';

const Books = () => {
    return (
        <div>
            <NavBar />
            <h1>Books</h1>
            <BookSearch />
            <BookList />
        </div>
    );
};

export default Books;
