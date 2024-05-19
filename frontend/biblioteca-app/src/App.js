import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Biblioteca from './pages/Biblioteca';
import Prestamos from './pages/Prestamos'; // Asegúrate de tener esta página también
import Usuarios from './pages/Usuarios';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} /> {/* Crea un componente Home si no lo tienes */}
                <Route path="/biblioteca" component={Biblioteca} />
                <Route path="/prestamos" component={Prestamos} />
                <Route path="/usuarios" component={Usuarios} />
            </Switch>
        </Router>
    );
};

export default App;
