import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { useState } from 'react';
import options from "./veg_sell_data"

const SearchDropdown = ({ options, onOptionClicked }) => {

  const dropdownStyles = {
    minWidth: "100%"
  }

  const handleChange = (option) => {
    onOptionClicked(option)
  };
  

  return (
    <div className='search-dropdown' style={dropdownStyles}>
        <Select 
          options={options} 
          placeholder="Select an option" 
          isSearchable 
          onChange={handleChange} 
          noOptionsMessage={() => "Nothing Found!!!!"}/>
    </div>
  )
}


export default SearchDropdown;
