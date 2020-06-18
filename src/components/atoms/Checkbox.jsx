import React from 'react';

const MyCheckbox = (props) => {
  return (
    <input type='checkbox' id={props.id} checked={props.check} onChange={props.onChangeHandler} />
  )
};

export default MyCheckbox;
