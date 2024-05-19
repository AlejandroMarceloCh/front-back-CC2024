import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/biblioteca">Biblioteca</Link>
            <Link to="/prestamos">Préstamos</Link>
            <Link to="/usuarios">Usuarios</Link>
        </nav>
    );
};

export default Navbar;
