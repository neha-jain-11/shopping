import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Basket from "./pages/basket/Basket.jsx";
import End from "./pages/end/End.jsx";
import Test from "./pages/test/Test.jsx";
import "./app.css";

const App = () => (
  <div>
    <Router>
      <h2>Lets do some shopping</h2>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/checkout">Checkout</Link>
      <br />
      <br />
      <Link to="/test">Test</Link>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/checkout">
          <Basket />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/end">
          <End />
        </Route>
      </Switch>
    </Router>
  </div>
);

var x = 10;
console.log("hello", x);
export default App;
