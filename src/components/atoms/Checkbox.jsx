import React from 'react';

const MyCheckbox = (props) => {
  return (
    <input type='checkbox' id={props.id} checked={props.check} />
  )
};

export default MyCheckbox;
