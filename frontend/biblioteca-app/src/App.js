import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import RegisterBookForm from './components/RegisterBookForm'; 
import Books from './pages/Books';
import UserList from './components/UserList';
import LoanList from './components/LoanList';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/books" component={Books} />
                <Route path="/users" component={UserList} /> 
                <Route path="/register-book" component={RegisterBookForm} />
            </Switch>
        </Router>
    );
};

export default App;
