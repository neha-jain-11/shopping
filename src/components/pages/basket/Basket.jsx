import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import View from './view/View.jsx';
import { getTotalPrice } from '../../../utils/util'
import './basket.css';

export const checkoutData = [
  {
    "itemId": "001",
    "name": "Apple",
    "price": 120,
    "quantity": 2
  },
  {
    "itemId": "002",
    "name": "Orange",
    "price": 100,
    "quantity": 2
  },
  {
    "itemId": "003",
    "name": "Paneer",
    "price": 150,
    "quantity": 1
  },
  {
    "itemId": "004",
    "name": "Curd",
    "price": "20",
    "quantity": 1
  }, {
    "itemId": "005",
    "name": "Toor Dal",
    "price": 60,
    "quantity": 2
  }, {
    "itemId": "006",
    "name": "Masoor Dal",
    "price": 90,
    "quantity": 3
  }
];

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      dataItems: checkoutData,
      totalPrice: getTotalPrice(checkoutData),
      status: {
        delete: false,
        edit: false
      }
    }
    this.save = this.save.bind(this);
    this.getAction = this.getAction.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  getAction(event) {
    if (event.target.value === 'delete') {
      this.setState({ status: { delete: true, edit: false } });
    } else if (event.target.value === 'edit') {
      this.setState({ status: { delete: false, edit: true } });
    } else {
      this.setState({ status: { delete: false, edit: false } });
    }
  }

  updateCheck(event) {
    console.log(event.target.id);
    const selectedItemId = event.target.id.split('-')[1];
    const dataItems = this.state.dataItems;
    const itemIndex = dataItems.findIndex((i) => i.itemId === selectedItemId);
    dataItems.splice(itemIndex, 1);
    this.setState({ dataItems, totalPrice: getTotalPrice(dataItems) });
  }

  save() {
    //ajax call to save data
    this.props.history.push('/end');
  }

  render() {
    return (
      <div>
        <div className='basket'>Your BASKET</div>
        <View totalPrice={this.state.totalPrice} list={this.state.dataItems} getAction={this.getAction} status={this.state.status} updateCheck={this.updateCheck} />
        <div className='checkout-a'><a onClick={this.save}>SAVE</a></div>
      </div>
    );
  }
}

export default withRouter(Basket);
