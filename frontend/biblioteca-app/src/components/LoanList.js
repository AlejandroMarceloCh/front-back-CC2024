import React, { useState, useEffect } from 'react';
import { getAllLoans } from '../api';

const LoanList = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await getAllLoans();
                setLoans(response.data.prestamos);
            } catch (error) {
                console.error('Error fetching loans:', error);
                alert('Error fetching loans');
            }
        };
        fetchLoans();
    }, []);

    return (
        <div>
            <h1>Loans</h1>
            <ul>
                {loans.map((loan) => (
                    <li key={loan.id}>
                        Usuario: {loan.usuario_username}, Libro ID: {loan.libro_id}, Estado: {loan.estado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoanList;
