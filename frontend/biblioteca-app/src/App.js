import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Biblioteca from './pages/Biblioteca';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/biblioteca">Biblioteca</Link>
                    <Link to="/prestamos">Préstamos</Link>
                    <Link to="/usuarios">Usuarios</Link>
                </nav>
                <Switch>
                    <Route path="/" exact component={() => <h1>Bienvenido a la Biblioteca UTEC</h1>} />
                    <Route path="/biblioteca" component={Biblioteca} />
                    {/* Aquí irán las otras rutas de Préstamos y Usuarios */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
