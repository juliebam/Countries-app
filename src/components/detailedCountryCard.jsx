

import React  from 'react';

import BackButton from './BackButton.jsx';

import styled from 'styled-components';

const DetailedCard = styled.div`
  	
`

const FlagDetailedCard = styled.div`
	img {
		width: 300px;
		margin-top: 4%;
	}
`

const InfoDetailedCard = styled.div`
	& > p:first-child {
		font-weight: bold;
		font-size: 2.2rem;
	}

	& > p > span {
		font-size: 1.5rem;
		font-weight: bold;
	}
`
const AdditionalInfo = styled.div`
	padding-top: 1%;
	& > p > span {
		font-size: 1.5rem;
		font-weight: bold;
	}

	& > p > ul {
		list-style: none;
		> li {
			
		}
	}
`


function DetailedCountryCard(props) {
	// console.log(props)

	const { detailedCountry } = props;
	const { nativeName, name, flag, population, region, subregion, capital, topLevelDomain, currencies, languages, borderWithFullNames} = detailedCountry;
	// console.log(detailedCountry)
	
	const currency = currencies.map(currency => currency.name)
	// console.log(currency)
	
	const language = languages.map(language => language.name)
	// console.log(countryNamesFromCode)

	// const popNumber = population.toLocaleString();
	// console.log(popNumber)


	return (
	    <DetailedCard>
			<BackButton />
			 <FlagDetailedCard>
				<img src={flag} alt=""/>
			</FlagDetailedCard> 
			 <InfoDetailedCard>
				<p>{name}</p>
				<p><span>Native Name:</span> {nativeName} </p>
				<p><span>Population:</span> {population}</p>
				<p><span>Region:</span> {region}</p>
				<p><span>Subregion:</span> {subregion}</p>
				<p><span>Capital:</span> {capital}</p>
			 </InfoDetailedCard> 
			 <AdditionalInfo>
				<p><span>Top Level Domain:</span> {topLevelDomain}</p>
				<p><span>Currencies:</span> {currency.map((string) => <ul><li>{string} </li></ul>)}</p>
				<p><span>Languages:</span> {language.map(string => <ul><li>{string} </li></ul>)}</p>
				<p><span>Border Countries:</span> {
				borderWithFullNames.length === 0 ? <span>N/A</span> :
				borderWithFullNames.map(string => <ul><li>{string} </li></ul>)}</p>
			 </AdditionalInfo>
        </DetailedCard>
	)
}

export default DetailedCountryCard