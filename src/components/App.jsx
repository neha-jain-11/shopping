import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Filters from './pages/home/filters/Filters.jsx';
import './app.css';

const App = () => (
  <Router>
    <h2>Lets do some shopping</h2>
    <Link to="/home">Home</Link>
    <Link to="/Checkout">Checkout</Link>
    <Route path='/home'><Home /></Route>
    <Route path='/Checkout'><Filters /></Route>
    <Route path='/'><Home /></Route>
  </Router>
);

export default App;