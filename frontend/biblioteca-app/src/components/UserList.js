import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.data.usuarios);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Registered Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.nombre}</td>
                            <td>{user.sexo}</td>
                            <td>{user.correo}</td>
                            <td>{user.fecha_nacimiento}</td>
                            <td>{user.direccion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
