import React, { useState, useContext } from 'react';
import { CountriesContext } from '../App.js';

import styled from 'styled-components';

const SearchBar = styled.form`
  & > input {
      padding: 5px;
      width: 120%;
  }

  & > button {
      display: none;
  }
`

function Search() {

    const [name, setName] = useState('')

    const { findCountry } = useContext(CountriesContext)

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        findCountry(name)
        setName('')
    }

	return (
		<SearchBar>
            <input type="text" value={name} onChange={handleChange} placeholder=" Search by country name"/>
            <button type="submit" onClick={handleSubmit}>Search
            </button>
        </SearchBar>
	)
}

export default Search