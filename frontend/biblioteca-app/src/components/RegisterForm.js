import React, { useState } from 'react';
import { registerUser } from '../api';
import '../styles/UserRegistration.css';

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        nombre: '',
        sexo: '',
        correo: '',
        fecha_nacimiento: '',
        direccion: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div className="user-registration">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </label>
                <label>
                    Sexo:
                    <input type="text" name="sexo" value={formData.sexo} onChange={handleChange} />
                </label>
                <label>
                    Correo:
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
                </label>
                <label>
                    Fecha de Nacimiento:
                    <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
                </label>
                <label>
                    Dirección:
                    <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
