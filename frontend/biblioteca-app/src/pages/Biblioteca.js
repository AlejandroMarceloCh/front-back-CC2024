import React, { useState } from 'react';
import LibraryOption from '../components/LibraryOption';
import BookList from '../components/BookList';
import BookSearch from '../components/BookSearch';
import RegisterBook from '../components/RegisterBook';
import '../styles/Biblioteca.css';

const Biblioteca = () => {
    const [fixedOption, setFixedOption] = useState(null);

    return (
        <div className="biblioteca-container">
            <h1>Biblioteca UTEC</h1>
            <div className="biblioteca-options">
                <LibraryOption
                    imageSrc="images/RegisterBook.jpg"
                    isFixed={fixedOption === 'register'}
                    onFixChange={(fix) => setFixedOption(fix ? 'register' : null)}
                >
                    <RegisterBook />
                </LibraryOption>
                <LibraryOption
                    imageSrc="images/BookByTitle.jpeg"
                    isFixed={fixedOption === 'search'}
                    onFixChange={(fix) => setFixedOption(fix ? 'search' : null)}
                >
                    <BookSearch />
                </LibraryOption>
                <LibraryOption
                    imageSrc="images/DisplayAllBooks.jpeg"
                    isFixed={fixedOption === 'list'}
                    onFixChange={(fix) => setFixedOption(fix ? 'list' : null)}
                >
                    <BookList />
                </LibraryOption>
            </div>
        </div>
    );
};

export default Biblioteca;
