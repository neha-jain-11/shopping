import React from 'react';
import MyCheckbox from '../../../atoms/Checkbox.jsx';
import MyDropdown from '../../../atoms/Dropdown.jsx';
import './items.css';

const Items = (props) => {
  return (
    <div>
      <h4>Item Lists</h4>
      <table>
        <thead>
          <tr>
            <th className='cbox'><MyCheckbox id={`check-all`} /></th>
            <th>Name</th>
            <th>Price (per kg)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.list ? props.list.map((item, index) => (
            <tr key={index}>
              <td><MyCheckbox id={`check-${item.itemId}`} check={props.checkIdList.includes(item.itemId)} onChangeHandler={props.updateCheck} /></td>
              <td><span>{item.name}</span></td>
              <td><span className='count'>Rs {item.price}</span></td>
              <td><MyDropdown id={`drop-${item.itemId}`} value={item.quantity} onChangeHandler={props.updateOptionHandler} /></td>
            </tr>
          )) : <span>There are no items</span>}

        </tbody>
      </table>

      <div id='total'> Total price for your items: <span><b>Rs {props.totalPrice}</b></span> </div>
      <hr />
    </div>
  )
};

export default Items;