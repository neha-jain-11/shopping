import React from 'react';
import MyCheckbox from '../../../atoms/Checkbox.jsx';
import MyDropdown from '../../../atoms/Dropdown.jsx';
import './items.css';

const Items = (props) => {
  console.log('props', props)
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
              <td><MyCheckbox id={`check-${item.name.toLowerCase()}`} /></td>
              {
                Object.keys(item).map((data, index) => (
                  <td key={index} className={data === 'price' ? 'count' : 'name'}>{
                    data === 'price' ? <span className='count'>Rs {item[data]}</span> : <span>{item[data]}</span>} </td>
                ))
              }
              <td><MyDropdown id={`drop-${item.name.toLowerCase()}`} /></td>
            </tr>
          )) : <span>There are no items</span>}

        </tbody>
      </table>
      {props.items ? props.items.map((iem, index) => (<li key={index}>{item}</li>)) : <span>There are no items</span>}
      <hr />
    </div>
  )
};

export default Items;