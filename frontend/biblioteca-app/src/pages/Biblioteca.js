import React from 'react';
import LibraryOption from '../components/LibraryOption';
import BookList from '../components/BookList';
import BookSearch from '../components/BookSearch';
import RegisterBook from '../components/RegisterBook';
import '../styles/Biblioteca.css';

const Biblioteca = () => {
    return (
        <div className="biblioteca-container">
            <h1>Biblioteca UTEC</h1>
            <div className="biblioteca-options">
                <LibraryOption imageSrc="ruta/aqui/pon/tu/imagen1.png">
                    <RegisterBook />
                </LibraryOption>
                <LibraryOption imageSrc="ruta/aqui/pon/tu/imagen2.png">
                    <BookSearch />
                </LibraryOption>
                <LibraryOption imageSrc="ruta/aqui/pon/tu/imagen3.png">
                    <BookList />
                </LibraryOption>
            </div>
        </div>
    );
};

export default Biblioteca;
