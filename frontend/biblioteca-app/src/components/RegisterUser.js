import React, { useState } from 'react';
import { registerUser } from '../api/api';
import '../styles/RegisterUser.css';

const RegisterUser = ({ onFixChange }) => {
    const [userData, setUserData] = useState({ nombre: '', correo: '', contrasena: '' });
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
            setUserData({ nombre: '', correo: '', contrasena: '' });
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
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
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
                    type="password"
                    name="contrasena"
                    value={userData.contrasena}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <button type="submit">Registrar Usuario</button>
            </form>
            {message && <div className="register-message">{message}</div>}
        </div>
    );
};

export default RegisterUser;
