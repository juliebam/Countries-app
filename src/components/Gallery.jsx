
import React, {useContext, useState} from 'react';

import { CountriesContext } from '../App.js'

import CountryCard from "./CountryCard.jsx"

import FilterByRegion from './FilterByRegion.jsx';

import Search from "./Search.jsx"

import styled from 'styled-components';

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchElements = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 2%;
  margin-top: 4%;
  max-width: 1200px;
`

const CountryCardGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding:15px;
`

// const {buttonOff, setButtonOff} = useState(false);

function Gallery() {

	const { filteredCountries }  = useContext( CountriesContext );

	return (
	    <GalleryDiv>
			<SearchElements>
				<Search />
				<FilterByRegion />
			</SearchElements>

			<CountryCardGallery>
				{
					filteredCountries.map((country, i) => 
						<CountryCard country={country} key={i} />
					)
				}
			</CountryCardGallery>
        </GalleryDiv>
	)
}

export default Gallery