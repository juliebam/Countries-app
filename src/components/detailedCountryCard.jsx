

import React  from 'react';

import BackButton from './BackButton.jsx';

import styled from 'styled-components';

const DetailedCard = styled.div`
  	
`

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
	




`

const FlagDetailedCard = styled.div`
	img {
		width: 400px;
		margin-top: 12%;
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

	& > nav > span {
		font-size: 1.5rem;
		font-weight: bold;
	}


	& >p:first-child {
		padding-top: 18%;
	}
`

const BorderContries = styled.div`
	padding-top: 1%;
	& > p > span {
		font-size: 1.5rem;
		font-weight: bold;
	}

	& > nav > span {
		font-size: 1.5rem;
		font-weight: bold;
	}

	& > nav > ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		> li {
			border: 1px solid grey;
			width: 200px;
			padding: 5px 10px;
			border-radius: 5%;
			text-align: center;
			
		}
	}

`


function DetailedCountryCard(props) {

	const { detailedCountry } = props;
	const { name, flags, population, region, subregion, capital, topLevelDomain, currencies, languages, borderWithFullNames} = detailedCountry;
	const { common, official, nativeName } = name;
	const { png, svg } = flags;

	const language = Object.values(languages);
	
	const countryNativeName = nativeName[Object.keys(nativeName)[0]]
	const nativeNameValue = Object.values(countryNativeName)[0];

	const currencyValues = Object.values(currencies)






	return (
	    <DetailedCard>
			<BackButton />
			<FlexContainer>
				<FlagDetailedCard>
					<img src={png} alt=""/>
				</FlagDetailedCard> 
				<InfoDetailedCard>
					<p>{common}</p>
					<p><span>Official Name:</span> {official} </p>
					<p><span>Native Name:</span> {nativeNameValue} </p>
					<p><span>Population:</span> {population}</p>
					<p><span>Region:</span> {region}</p>
					<p><span>Subregion:</span> {subregion}</p>
					<p><span>Capital:</span> {capital}</p>
				</InfoDetailedCard> 
				<AdditionalInfo>
					<p><span>Top Level Domain:</span> {topLevelDomain}</p>
					<nav><span>Currencies:</span> <ul>{currencyValues.map((value,index) => <li key={index}>{value.name}</li>)}</ul></nav>
					<nav><span>Languages:</span> <ul>{language.map((value, index) => <li key={index}>{value} </li>)}</ul></nav>
				</AdditionalInfo>
			</FlexContainer>
			<BorderContries>
				<nav><span>Border Countries:</span>
				    <ul>
					{
					borderWithFullNames.length === 0 ? <span>N/A</span> :
					borderWithFullNames.map((string, index) => <li key={index}>{string}</li>)
					}
					</ul>
				</nav>

			</BorderContries>
        </DetailedCard>
	)
}

export default DetailedCountryCard