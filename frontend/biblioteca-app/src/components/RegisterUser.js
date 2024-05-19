import React, { useState } from 'react';
import { registerUser } from '../api/api';
import '../styles/RegisterUser.css';

const RegisterUser = ({ onFixChange }) => {
    const [userData, setUserData] = useState({ 
        username: '', 
        nombre: '', 
        sexo: '', 
        correo: '', 
        fecha_nacimiento: '', 
        direccion: '', 
        contrasena: '' 
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(userData);
            setMessage('Usuario registrado exitosamente');
            setUserData({ 
                username: '', 
                nombre: '', 
                sexo: '', 
                correo: '', 
                fecha_nacimiento: '', 
                direccion: '', 
                contrasena: '' 
            });
            onFixChange(false); // Desactivar el modo "fijo"
        } catch (error) {
            alert('Error registrando usuario');
        }
    };

    return (
        <div className="register-user-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="Nombre de usuario"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="sexo"
                    value={userData.sexo}
                    onChange={handleChange}
                    placeholder="Sexo"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="email"
                    name="correo"
                    value={userData.correo}
                    onChange={handleChange}
                    placeholder="Correo"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="date"
                    name="fecha_nacimiento"
                    value={userData.fecha_nacimiento}
                    onChange={handleChange}
                    placeholder="Fecha de nacimiento"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="direccion"
                    value={userData.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <button type="submit">Registrar Usuario</button>
            </form>
            {message && <div className="register-message">{message}</div>}
        </div>
    );
};

export default RegisterUser;
