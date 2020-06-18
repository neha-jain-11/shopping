import React, { Component } from 'react';
import Filters from './filters/Filters.jsx';
import Items from './items/Items.jsx';
import Checkout from './checkout/Checkout.jsx';
import './home.css';

export const data = [
  {
    "itemId": "001",
    "name": "Apple",
    "price": "120"
  },
  {
    "itemId": "002",
    "name": "Orange",
    "price": "100"
  },
  {
    "itemId": "003",
    "name": "Paneer",
    "price": "150"
  },
  {
    "itemId": "004",
    "name": "Curd",
    "price": "20"
  }, {
    "itemId": "005",
    "name": "Toor Dal",
    "price": "60"
  }, {
    "itemId": "006",
    "name": "Masoor Dal",
    "price": "90"
  }
];

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataItems: data.map((item) => ({ ...item, ...{ quantity: 0 } })),
      checkIdList: [],
      totalPrice: 0
    }
    this.updateCheck = this.updateCheck.bind(this);
    this.updateOptionHandler = this.updateOptionHandler.bind(this);
  }

  getTotalPrice(data) {
    return data.reduce((price, o) => (price + (o.price * o.quantity)), 0);
  }

  updateCheck(event) {
    const checked = event.target.checked;
    const selectedItemId = event.target.id.split('-')[1];
    let itemData = this.state.dataItems;
    let checkList = this.state.checkIdList;
    const itemIndex = itemData.findIndex((i) => i.itemId === selectedItemId);
    if (checked) {
      checkList.push(selectedItemId);
      itemData[itemIndex].quantity = 1;
    } else {
      checkList.splice(checkList.indexOf(selectedItemId), 1);
      itemData[itemIndex].quantity = 0;
    }

    this.setState({
      dataItems: itemData,
      checkIdList: checkList,
      totalPrice: this.getTotalPrice(itemData)
    });
  }

  updateOptionHandler(event) {
    let quantity = Number(event.target.value);
    const selectedItemId = event.target.id.split('-')[1];
    let itemData = this.state.dataItems;
    let checkList = this.state.checkIdList;
    const itemIndex = itemData.findIndex((i) => i.itemId === selectedItemId);

    itemData[itemIndex] = { ...itemData[itemIndex], ...{ quantity } };

    if (quantity === 0) {
      checkList.splice(itemIndex, 1);
    } else {
      (checkList).push(selectedItemId);
    }
    this.setState({
      dataItems: itemData,
      checkIdList: checkList,
      totalPrice: this.getTotalPrice(itemData)
    });
  }

  checkout() {
    console.log('check me out !!!!');

  }

  render() {
    return (
      <div>
        <div className='home'>Welcome Home</div>
        <Filters />
        <Items totalPrice={this.state.totalPrice} list={this.state.dataItems} checkIdList={this.state.checkIdList} updateOptionHandler={this.updateOptionHandler} updateCheck={this.updateCheck} />
        <Checkout checkout={this.checkout} />
      </div>

    );
  }
}

export default Home;
