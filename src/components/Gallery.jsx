
import React, {useContext} from 'react';

import { CountriesContext } from '../App.js'

import CountryCard from "./CountryCard.jsx"

function Gallery() {

	const countries = useContext( CountriesContext );

	return (
	    <div className="gallery">
			{
				countries.map((country, i) => 
					<CountryCard country={country} key={i} />
				)
			}
        </div>
	)
}

export default Gallery