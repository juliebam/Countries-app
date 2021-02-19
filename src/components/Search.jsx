import React, { useState, useContext } from 'react';
import { CountriesContext } from '../App.js';

function Search() {

    const [name, setName] = useState('')

    const { findCountry } = useContext(CountriesContext)

    const handleChange = (event) => setName(event.target.value)

    // const capitalize = () => {
    //     let capitalized = name[0].toUpperCase() + name.slice(1);
    //     setName(capitalized)
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        findCountry(name)
        setName('')
    }

	return (
		<form action="" className="search">
            <input type="text" value={name} onChange={handleChange} placeholder="search by country name"/>
            <button type="submit" onClick={handleSubmit
            }>
              Search</button>
        </form>
	)
}

export default Search