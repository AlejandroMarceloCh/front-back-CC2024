import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/biblioteca" activeClassName="active">Biblioteca</NavLink>
            <NavLink to="/prestamos" activeClassName="active">Préstamos</NavLink>
            <NavLink to="/usuarios" activeClassName="active">Usuarios</NavLink>
        </nav>
    );
};

export default Navbar;
