import React, { useState } from 'react';
import LibraryOption from '../components/LibraryOption';
import BookList from '../components/BookList';
import BookSearch from '../components/BookSearch';
import RegisterBook from '../components/RegisterBook';
import '../styles/Biblioteca.css';

const Biblioteca = () => {
    const [fixedOption, setFixedOption] = useState(null);

    const handleFlip = (option) => {
        setFixedOption(fixedOption === option ? null : option);
    };

    return (
        <div className="biblioteca-container">
            <h1>Biblioteca UTEC</h1>
            <div className="biblioteca-options">
                <LibraryOption
                    imageSrc="/images/RegisterBook.jpg"
                    flipped={fixedOption === 'register'}
                    onFlip={() => handleFlip('register')}
                >
                    <RegisterBook onFixChange={(fix) => setFixedOption(fix ? 'register' : null)} />
                </LibraryOption>
                <LibraryOption
                    imageSrc="/images/BookByTitle.jpeg"
                    flipped={fixedOption === 'search'}
                    onFlip={() => handleFlip('search')}
                >
                    <BookSearch onFixChange={(fix) => setFixedOption(fix ? 'search' : null)} />
                </LibraryOption>
                <LibraryOption
                    imageSrc="/images/DisplayBooks.jpeg"
                    flipped={fixedOption === 'list'}
                    onFlip={() => handleFlip('list')}
                >
                    <BookList />
                </LibraryOption>
            </div>
        </div>
    );
};

export default Biblioteca;
