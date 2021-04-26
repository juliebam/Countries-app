import React from 'react';

import styled from 'styled-components';

const HeaderDiv = styled.div`
   background-color: white;
   padding: 2%;
   box-shadow: 0 3px 2px -2px gray;
`

function Header() {

	return (
		<HeaderDiv>
            <h1>Where in the world?</h1>
		</HeaderDiv>
	)
}

export default Header