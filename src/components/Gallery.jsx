
import React, {useContext} from 'react';

import { CountriesContext } from '../App.js'

import CountryCard from "./CountryCard.jsx"

import Search from "./Search.jsx"

function Gallery() {

	const {countries}  = useContext( CountriesContext );

	console.log(countries)

	return (
	    <div className="gallery">
			<Search />
			{
				countries.map((country, i) => 
					<CountryCard country={country} key={i} />
				)
			}
        </div>
	)
}

export default Gallery