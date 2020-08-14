import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.scss';

function Search(props) {

    const [searchTerm, setSearchTerm] = useState(props.value);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const search = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    }

    return (
        <form className="search-form" onSubmit={search}>
            <input type="text" name="search-term" placeholder={props.placeholder} onChange={handleChange} value={searchTerm} />
            <button className="icon-button" onClick={search}>
                <FontAwesomeIcon icon={faSearch} className="icon" />hľadať
            </button>
        </form>
    );

}

export default Search;