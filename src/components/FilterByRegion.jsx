import React, { useState, useContext, useEffect } from 'react';
import { CountriesContext } from '../App.js';


import styled from 'styled-components';

const RegionBar = styled.form`
    & > select {
        padding: 5px;
        & > option::value {
            padding: 5px;
            text-align: center;
        }
    }
`

function FilterByRegion() {

    const [region, setRegion] = useState('')

    const { filterByRegion } = useContext(CountriesContext)


    const handleDropDownChange = (event) => {
        const regionValue = event.target.value;
        setRegion(regionValue)
        console.log(regionValue)
    }
    
    useEffect (() => {
        filterByRegion(region)
    }, [region])

	return (
        <RegionBar>
            <select id="regions" name="regions"
            onChange={handleDropDownChange}>
                <option value="N/A">Choose Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            {/* {console.log(region)} */}
        </RegionBar>
	)
}

export default FilterByRegion