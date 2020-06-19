import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Basket from './pages/basket/Basket.jsx';
import End from './pages/end/End.jsx';
import './app.css';

const App = () => (
  <div>
    <Router>
      <h2>Lets do some shopping</h2>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/checkout">Checkout</Link>
      <Switch>
        <Route path='/home'><Home /></Route>
        <Route path='/checkout'><Basket /></Route>
        <Route path='/end'><End /></Route>
      </Switch>

    </Router>
  </div>
);

export default App;