import React, { useState } from 'react';
import { registerUser } from '../api';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        nombre: '',
        sexo: '',
        correo: '',
        fecha_nacimiento: '',
        direccion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
            <input name="sexo" value={formData.sexo} onChange={handleChange} placeholder="Sexo" />
            <input name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo" />
            <input name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} placeholder="Fecha de Nacimiento" />
            <input name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Direccion" />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
