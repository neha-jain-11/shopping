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
      selectedItems: [],
      dataItems: data.map((item) => ({ ...item, ...{ quantity: 0 } })),
      checkIdList: []
    }
    this.updateCheck = this.updateCheck.bind(this);
    this.updateOptionHandler = this.updateOptionHandler.bind(this);
  }

  updateCheck(event) {
    debugger;
    // const selectedItemId = event.target.id.split('-')[1];
    // // let itemData = this.state.selectedItems;
    // let checkList = this.state.checkIdList;

    // this.setState({
    //   // selectedItems: itemData,
    //   checkIdList: checkList
    // });
  }

  updateOptionHandler(event) {
    let quantity = Number(event.target.value);
    const selectedItemId = event.target.id.split('-')[1];
    let itemData = this.state.selectedItems;
    let checkList = this.state.checkIdList;
    const itemIndex = itemData.findIndex((i) => i.itemId === selectedItemId);
    if (itemIndex > -1) {
      if (quantity === 0) {
        itemData.splice(itemIndex, 1);
        checkList.splice(itemIndex, 1);
      } else {
        itemData[itemIndex].quantity = quantity;
      }
    } else {
      const item = this.state.dataItems.find((i) => i.itemId === selectedItemId);
      if (item) {
        const update = { ...item, ...{ quantity } };
        (itemData).push(update);
        (checkList).push(update.itemId);
      }
    }
    this.setState({
      selectedItems: itemData,
      checkIdList: checkList
    });
  }

  render() {
    return (
      <div>
        <div className='home'>Welcome Home</div>
        <Filters />
        <Items list={this.state.dataItems} checkIdList={this.state.checkIdList} updateOptionHandler={this.updateOptionHandler} />
        <Checkout />
      </div>

    );
  }
}

export default Home;
