import React, { useState, useContext } from 'react';
import { CountriesContext } from '../App.js';

function FilterByRegion() {

    const [region, setRegion] = useState('')

    const { filterByRegion } = useContext(CountriesContext)

    const handleChange = (event) => {
        event.preventDefault();
        setRegion(event.target.value)
        filterByRegion(region)
    }

	return (
        <form action="" className="filterByRegion">
            <select id="regions" name="regions" onChange={handleChange}>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
	)
}

export default FilterByRegion