import React from 'react';
import Filters from './filters/Filters.jsx';
import Items from './items/Items.jsx';
import Checkout from './checkout/Checkout.jsx';
import './home.css';

export const data = [
  {
    "name": "Apple",
    "price": "120"
  },
  {
    "name": "Orange",
    "price": "100"
  },
  {
    "name": "Paneer",
    "price": "150"
  },
  {
    "name": "Curd",
    "price": "20"
  }, {
    "name": "Toor Dal",
    "price": "60"
  }, {
    "name": "Masoor Dal",
    "price": "90"
  }
];

const Home = () => (
  <div>
    <div className='home'>Welcome Home</div>
    <Filters />
    <Items list={data} />
    <Checkout />
  </div>

);

export default Home;
