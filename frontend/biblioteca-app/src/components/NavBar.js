import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/register-book">Register Book</Link></li>
                <li><Link to="/loans">Loans</Link></li>  {/* Añade esta línea */}
            </ul>
        </nav>
    );
};

export default NavBar;
