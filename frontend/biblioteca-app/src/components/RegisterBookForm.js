import React, { useState } from 'react';
import { registerUser } from '../api';
import '../styles/UserRegistration.css';

const UserRegistration = () => {
    const [userData, setUserData] = useState({
        username: '',
        nombre: '',
        sexo: '',
        correo: '',
        fecha_nacimiento: '',
        direccion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(userData);
            alert('User registered successfully!');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div className="user-registration">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
                <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="sexo"
                    value={userData.sexo}
                    onChange={handleChange}
                    placeholder="Gender"
                    required
                />
                <input
                    type="email"
                    name="correo"
                    value={userData.correo}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="date"
                    name="fecha_nacimiento"
                    value={userData.fecha_nacimiento}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="direccion"
                    value={userData.direccion}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
