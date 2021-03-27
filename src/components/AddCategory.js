import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setCategories(categories => ([ inputValue, ...categories ]));
    setInputValue('');
  };

  return (<form onSubmit={handleSubmit}>
    <h1>{ inputValue }</h1>
    <input
      type='text'
      value={inputValue}
      onChange={handleInputChange}>
    </input>
  </form>)
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
