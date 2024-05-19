import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import Prestamos from './pages/Prestamos';
import Usuarios from './pages/Usuarios';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/biblioteca" component={Biblioteca} />
                <Route path="/prestamos" component={Prestamos} />
                <Route path="/usuarios" component={Usuarios} />
            </Switch>
        </Router>
    );
};

export default App;
