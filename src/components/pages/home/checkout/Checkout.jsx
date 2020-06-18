import React from 'react';
import './checkout.css';

const Checkout = (props) => (
  <div id='checkout-container'>
    <input id='checkout' type='button' value='CHECKOUT' onClick={props.checkout} />
  </div>
);

export default Checkout;