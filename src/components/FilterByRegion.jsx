import React, { useState, useContext, useEffect } from 'react';
import { CountriesContext } from '../App.js';

function FilterByRegion() {

    const [region, setRegion] = useState('')

    const { filterByRegion } = useContext(CountriesContext)

    const handleDropDownChange = (event) => {
        const regionValue = event.target.value;
        setRegion(regionValue)
        console.log(regionValue)

        // //if event.target.value is not empty ... do filterByRegion
        // if (regionValue) {
        //     event.preventDefault()
        //     // setRegion('')
        // }
    }
    
    useEffect (() => {
        filterByRegion(region)
        // setRegion('')
    }, [region])


//need to figure out how to reset the state after regions are filtered so that when another region is chosed it can find its respective countries

 
    //I think the issue is that filterByRegion fires before the state has a chance to update... and that's why the result is of counries with emptry string region.... 

    // how do I make sure the state is updated first?
    // I think I need to use useEffect here...
   

	return (
        <form action="" className="filterByRegion">
            <select id="regions" name="regions"
            onChange={handleDropDownChange}>
                <option value="N/A">Choose Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            {console.log(region)}
        </form>
	)
}

export default FilterByRegion