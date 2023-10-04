import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import "./search.css"


function SearchBar(props) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        
    }

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        props.onSearch(event.target.value);
    }

    return (
        <div className='row'>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-6">
                    <div class="form">
                        <i class="fa fa-search"></i>
                        <input type="text" value={searchText} onChange={handleSearch} class="form-control form-input my-0 py-0" placeholder="Search anything..."/>
                        <span class="left-pan"><i class="fa fa-microphone"></i></span>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default SearchBar;