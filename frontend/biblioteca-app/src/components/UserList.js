import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://34.203.174.121:8003/usuarios');
                setUsers(response.data.usuarios);
            } catch (error) {
                alert('Error fetching users');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-list-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="user-name">{user.nombre}</td>
                            <td className="user-email">{user.correo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
