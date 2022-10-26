
import React, { useEffect, useState, createContext } from 'react';

import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import DetailedCountryCard from "./components/detailedCountryCard.jsx";
import countryData from './countryData.json'

import { Normalize } from 'styled-normalize'
import GlobalStyle from './globalStyles.js';
import styled from 'styled-components';



const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
 
`

export const CountriesContext = createContext()


function App() {
  
  const [ countries, setCountries ] = useState([])

  const [ filteredCountries, setFilteredCountries] = useState([]);

  const [ detailedCountry, setDetailedCountry] = useState(null);


  const findCountry = (name) => {
    setFilteredCountries((prevState) => {
      const singleCountry = prevState.filter((country) => {
        let nameOfCountry = country.name;
        let result = nameOfCountry.common
        .toUpperCase()
        .localeCompare(name.toUpperCase());
        if (result === 0) {
        }
        return result === 0;
      });
      
      return singleCountry;
    });
  }
  

  const filterByRegion = (region) => {

    if (region && region !== "N/A") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    } else {
      setFilteredCountries(countries)
    }
  }

  
  const showDetailedCountryCard = (countryName) => {
    const countryWithName = countries.filter((country) => country.name.common === countryName);
    console.log(countryWithName)
    const borders = countryWithName[0].borders;

    
    const countryBorderNames = [];
    
    for (let i = 0; i < borders.length; i++) {
      
      const borderCode = borders[i];
      
      for (let x = 0; x < countryData.length; x++) {
        
        const jsonCode = countryData[x]["alpha-3"];
        
        if (jsonCode === borderCode) {
          countryBorderNames.push(countryData[x].name)
        }
      }
    }

    const detailedCountry = countryWithName[0];
    detailedCountry.borderWithFullNames = countryBorderNames;
    
    setDetailedCountry(countryWithName[0]);

  }

  const reset = () => {
    setDetailedCountry(null)
  }

  useEffect(() => {
    // check if data exists localStorage.setItem
    // if not:

    if (localStorage.length === 0) {
      fetch('https://restcountries.com/v3.1/all')
      .then(results => results.json())
      .then((data) => {
        console.log(data)
        const updatedData = data.map(item => {
          const population = item.population.toLocaleString();
          item.population = population;
          return item;
        })
        // store the data
        localStorage.setItem('myData', JSON.stringify(updatedData))
                setCountries(updatedData)
                setFilteredCountries(updatedData)
              })
    }
        // else: get data from localStorage.getItem

        else {
          const storedData = JSON.parse(localStorage.getItem('myData'))
            setCountries(storedData)
            setFilteredCountries(storedData)
          
        }
        }, [])

  return (
    <CountriesContext.Provider value={{countries, findCountry, filterByRegion, filteredCountries, detailedCountry, showDetailedCountryCard, reset
    }} > 
        <Normalize />
        <GlobalStyle />
          <Header />
        <MainWrapper>
          {
          detailedCountry ?  
          <DetailedCountryCard detailedCountry={detailedCountry} /> :
          <Gallery />

          }
        </MainWrapper>
    </CountriesContext.Provider>
  );
}

  export default App;