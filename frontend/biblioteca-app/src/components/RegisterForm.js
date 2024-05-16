import React, { useState } from 'react';
import axios from 'axios';

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
            await axios.post('http://3.90.116.170:8003/usuarios', formData); //tengo que ver la manera de tener la maquina virtual con ip elastica para poder conectarme a ella//listo
            alert('User registered successfully!');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input type="text" name="sexo" placeholder="Sexo" onChange={handleChange} />
            <input type="email" name="correo" placeholder="Correo" onChange={handleChange} />
            <input type="date" name="fecha_nacimiento" placeholder="Fecha de Nacimiento" onChange={handleChange} />
            <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
