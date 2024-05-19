import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/LoanList.css';

const LoanList = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await axios.get('http://34.203.174.121:8002/prestamos');
                console.log('Loans data:', response.data.prestamos); // Log para verificar datos
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
                        <th>Nombre de Usuario</th>
                        <th>ID Libro</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Fin</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <tr key={loan.id}>
                            <td>{loan.id}</td>
                            <td>{loan.usuario_username}</td>
                            <td>{loan.libro_id}</td>
                            <td>{loan.fecha_inicio}</td>
                            <td>{loan.fecha_fin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoanList;
