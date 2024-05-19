import React, { useState } from 'react';
import { addPrestamo } from '../api/api';
import '../styles/RegisterLoan.css';

const RegisterLoan = ({ onFixChange }) => {
    const [loanData, setLoanData] = useState({
        libro_id: '',
        usuario_username: '',
        fecha_inicio: '',
        fecha_fin: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoanData({ ...loanData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPrestamo(loanData);
            setMessage('Préstamo registrado exitosamente');
            setLoanData({ libro_id: '', usuario_username: '', fecha_inicio: '', fecha_fin: '' });
            onFixChange(false); // Desactivar el modo "fijo"
        } catch (error) {
            alert('Error registrando préstamo');
        }
    };

    return (
        <div className="register-loan-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="libro_id"
                    value={loanData.libro_id}
                    onChange={handleChange}
                    placeholder="ID del Libro"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="usuario_username"
                    value={loanData.usuario_username}
                    onChange={handleChange}
                    placeholder="Nombre de Usuario"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="date"
                    name="fecha_inicio"
                    value={loanData.fecha_inicio}
                    onChange={handleChange}
                    placeholder="Fecha de Inicio"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="date"
                    name="fecha_fin"
                    value={loanData.fecha_fin}
                    onChange={handleChange}
                    placeholder="Fecha de Fin"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <button type="submit">Registrar Préstamo</button>
            </form>
            {message && <div className="register-message">{message}</div>}
        </div>
    );
};

export default RegisterLoan;
