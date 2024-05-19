import React, { useState } from 'react';
import LibraryOption from '../components/LibraryOption';
import UserList from '../components/UserList';
import RegisterUser from '../components/RegisterUser';
import '../styles/Usuarios.css';

const Usuarios = () => {
    const [fixedOption, setFixedOption] = useState(null);

    const handleFlip = (option) => {
        setFixedOption(fixedOption === option ? null : option);
    };

    return (
        <div className="usuarios-container">
            <h1>Gestión de Usuarios</h1>
            <div className="usuarios-options">
                <LibraryOption
                    imageSrc="images/RegisterUser.jpeg"
                    flipped={fixedOption === 'registerUser'}
                    onFlip={() => handleFlip('registerUser')}
                >
                    <RegisterUser onFixChange={(fix) => setFixedOption(fix ? 'registerUser' : null)} />
                </LibraryOption>
                <LibraryOption
                    imageSrc="/images/DisplayUsers.jpeg"
                    flipped={fixedOption === 'listUsers'}
                    onFlip={() => handleFlip('listUsers')}
                >
                    <UserList />
                </LibraryOption>
            </div>
        </div>
    );
};

export default Usuarios;
