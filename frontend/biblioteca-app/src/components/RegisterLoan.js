import React, { useState } from 'react';
import { addPrestamo } from '../api/api';
import '../styles/RegisterLoan.css';

const RegisterLoan = ({ onFixChange }) => {
    const [loanData, setLoanData] = useState({ libroId: '', usuarioId: '', fechaPrestamo: '', fechaDevolucion: '' });
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
            setLoanData({ libroId: '', usuarioId: '', fechaPrestamo: '', fechaDevolucion: '' });
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
                    name="libroId"
                    value={loanData.libroId}
                    onChange={handleChange}
                    placeholder="ID del Libro"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="text"
                    name="usuarioId"
                    value={loanData.usuarioId}
                    onChange={handleChange}
                    placeholder="ID del Usuario"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="date"
                    name="fechaPrestamo"
                    value={loanData.fechaPrestamo}
                    onChange={handleChange}
                    placeholder="Fecha de Préstamo"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <input
                    type="date"
                    name="fechaDevolucion"
                    value={loanData.fechaDevolucion}
                    onChange={handleChange}
                    placeholder="Fecha de Devolución"
                    onFocus={() => onFixChange(true)} // Activar el modo "fijo"
                />
                <button type="submit">Registrar Préstamo</button>
            </form>
            {message && <div className="register-message">{message}</div>}
        </div>
    );
};

export default RegisterLoan;
