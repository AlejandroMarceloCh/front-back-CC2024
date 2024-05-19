import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/biblioteca" className="nav-link">Biblioteca</Link>
            <Link to="/prestamos" className="nav-link">Préstamos</Link>
            <Link to="/usuarios" className="nav-link">Usuarios</Link>
        </nav>
    );
};

export default Navbar;
