import React, {useContext} from 'react';

import { CountriesContext } from '../App.js';

import styled from 'styled-components';

const Button = styled.button`
  margin-top: 4%;
  padding: 10px;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  font-size: 1.5rem;
  cursor: pointer;
`

function BackButton() {
    const { reset } = useContext(CountriesContext)

	const handleClick = (event) => {
		event.preventDefault();
		reset();
	}

	return (
        <div>
            <Button type="button" onClick={handleClick}>Go Back</Button> 
        </div>
		
	)
}

export default BackButton;