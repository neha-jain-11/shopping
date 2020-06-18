import React from 'react';
import MyCheckbox from '../../../atoms/Checkbox.jsx'
import './view.css';
const View = (props) => (
  <div>
    <span>{JSON.stringify(props.status)}</span>
    <label>ACTIONS</label>
    <select id='drop-actions' onChange={props.getAction}><option value=''>SELECT</option><option value='delete'>DELETE</option><option value='edit'>EDIT</option></select>
    <br />
    {props.totalPrice === 0 ? <div id='view-total'><span>There are no items in the Basket</span></div> :
      <div>
        <table>
          <thead>
            <tr>
              {props.status.delete && <th></th>}
              <th>Name</th>
              <th>Price (per kg)</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.list ? props.list.map((item, index) => (
              <tr key={index}>
                {props.status.delete && <td><MyCheckbox id={`checkview-${item.itemId}`} check={false} onChangeHandler={props.updateCheck} /></td>}
                <td><span>{item.name}</span></td>
                <td><span className='count'>Rs {item.price}</span></td>
                <td><span>{item.quantity}</span></td>
                <td><span>Rs {Number(item.quantity) * Number(item.price)}</span></td>
              </tr>
            )) : <span>There are no items in the Basket</span>}

          </tbody>
        </table>
        <div id='total'> Total price for your items: <span><b>Rs {props.totalPrice}</b></span></div>
      </div>
    }

  </div >
);

export default View;