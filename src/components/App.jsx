import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './home/Home.jsx';
import './app.css';

const App = () => (
  <Router>
    <h2>Lets do some shopping</h2>
    <Route path='/'><Home /></Route>
  </Router>
);

export default App;