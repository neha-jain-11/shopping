import React from 'react';

const MyDropdown = (props) => (
  <select id={props.id}>
    {Array.from(Array(11).keys()).map((opt, index) => (
      <option key={index}>{opt}</option>
    ))
    }
  </select>
);

export default MyDropdown;
