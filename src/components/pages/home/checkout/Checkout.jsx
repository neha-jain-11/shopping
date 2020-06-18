import React from 'react';
import './checkout.css';

const Checkout = (props) => (
  <div id='checkout-container'>
    <div id='checkout-a'><a onClick={props.checkout}>CHECKOUT</a></div>
    {/* <input id='checkout' type='button' value='CHECKOUT' onClick={props.checkout} /> for redirect we need button*/}
  </div>
);

export default Checkout;