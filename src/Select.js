/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Select = ({ list, change, name, value }) => {
  const options = list.map(item => (
    <option key={item}>{item}</option>
  ));

  return (
    <select name={name} className="form-control" onChange={change} value={value}>
      {options}
    </select>
  );
};

// Select.defaultProps = {
//   list:
// };

export default Select;
