
// import React from 'react';
import React, { useContext } from 'react';
import { CountriesContext } from '../App.js';
import styled from 'styled-components';

const CountryCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 2%;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  flex-basis: 0;
  margin: 15px;
`

const FlagImage = styled.img`
	width: 262px;
	height: 205px;
  	border-radius: 10px 10px 0 0;
  	object-fit: cover;
`


const CardInfo= styled.div`
	padding: 20px;
`

const CardInfoName= styled.p`
	font-weight: bold;
`

const CardInfoDetails= styled.div`
	padding-bottom: 10px;
	& > p {
		margin:0;
		padding:0;
	}

	& > p > span {
		font-weight: bold;
	}
`


function CountryCard(props) {

	const { country } = props;
	const { name, flags, population, region, capital} = country;
	const { common } = name;
	const { png } = flags;


	// console.log(props)

	const { showDetailedCountryCard } = useContext(CountriesContext)

	const handleClick = (event) => {
		event.preventDefault();
		const countryName = country.name;
		const countryCommonName = countryName.common;
		showDetailedCountryCard(countryCommonName);

	}



	return (
		<CountryCardStyle onClick={handleClick}>
			<FlagImage src={png} alt=""/>
			<CardInfo>
				<CardInfoName>{common}</CardInfoName>
				<CardInfoDetails>
					<p><span>Population:</span> {population}</p>
					<p><span>Region: </span> {region}</p>
					<p><span>Capital: </span> {capital}</p>
				</CardInfoDetails>
			</CardInfo>
		</CountryCardStyle>
	)
}

export default CountryCard