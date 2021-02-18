
import React from 'react';

function CountryCard(props) {
	const { country } = props;
	const { name, flag, population, region, capital} = country;

	return (
		<div className="CountryCard">
			<img src={flag} alt=""/>
			<p>{name}</p>
			<p>{population}</p>
			<p>{region}</p>
			<p>{capital}</p>
		</div>
	)
}

export default CountryCard