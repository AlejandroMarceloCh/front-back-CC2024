import React, { useEffect, useState } from 'react';
import { getAllLoans } from '../api/api';
import '../styles/LoanList.css';

const LoanList = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await getAllLoans();
                setLoans(response.data.prestamos);
            } catch (error) {
                alert('Error fetching loans');
            }
        };

        fetchLoans();
    }, []);

    return (
        <div className="loan-list-container">
            <table className="loan-table">
                <thead>
                    <tr>
                        <th>ID Préstamo</th>
                        <th>ID Libro</th>
                        <th>ID Usuario</th>
                        <th>Fecha Préstamo</th>
                        <th>Fecha Devolución</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <tr key={loan.id}>
                            <td>{loan.id}</td>
                            <td>{loan.libroId}</td>
                            <td>{loan.usuarioId}</td>
                            <td>{loan.fechaPrestamo}</td>
                            <td>{loan.fechaDevolucion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoanList;
