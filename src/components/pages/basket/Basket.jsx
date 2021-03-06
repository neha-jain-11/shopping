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
      dataItems: [...checkoutData],
      totalPrice: getTotalPrice(checkoutData),
      status: {
        delete: false,
        edit: false
      }
    };
    console.log('hehehhehe checkoutData', checkoutData, this.state.dataItems);
    this.save = this.save.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.getAction = this.getAction.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.updateOptionHandler = this.updateOptionHandler.bind(this);
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

  updateOptionHandler(event) {
    let quantity = Number(event.target.value);
    const selectedItemId = event.target.id.split('-')[1];
    let itemData = this.state.dataItems;
    const itemIndex = itemData.findIndex((i) => i.itemId === selectedItemId);



    if (quantity === 0) {
      itemData.splice(itemIndex, 1);
    } else {
      itemData[itemIndex] = { ...itemData[itemIndex], ...{ quantity } };
    }
    this.setState({
      dataItems: itemData,
      totalPrice: getTotalPrice(itemData)
    });
  }

  save() {
    //ajax call to save data
    this.props.history.push('/end');
  }

  saveEdit() {
    this.setState({
      status: { delete: false, edit: false }
    });
  }

  render() {
    return (
      <div>
        <div className='basket'>Your BASKET</div>
        <View totalPrice={this.state.totalPrice} list={this.state.dataItems}
          getAction={this.getAction} status={this.state.status} updateCheck={this.updateCheck} updateOptionHandler={this.updateOptionHandler}
        />
        <div className='checkout-a'><a onClick={this.save}>SAVE</a></div>
        <br /><br />
        <div className='checkout-a'><a onClick={this.saveEdit}>SAVE EDIT</a></div>
      </div>
    );
  }
}

export default withRouter(Basket);
