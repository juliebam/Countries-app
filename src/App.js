
import './App.css';

import React, { useEffect, useState, createContext } from 'react';
import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
// import DetailedCountryCard from "./components/detailedCountryCard.jsx";

export const CountriesContext = createContext()

function App() {
  
  const [ countries, setCountries ] = useState([])

  const findCountry = (name) => {
    setCountries((prevState) => {
      const singleCountry = prevState.filter((country) => {
        let result = country.name
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
    setCountries((prevState) => {
      const regionCountries = prevState.filter(country => country.region === region
      );

      return regionCountries;
    });
  }


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(results => results.json())
        .then((data) => {
          setCountries(data)
        })
        }, [])
  
  
  return (
    <CountriesContext.Provider value={{countries, findCountry, filterByRegion}} >
        <div className="App">
          <Header />
          <Gallery />
          {/* //if gallery is on, detailedcountryCard is hidden. detailedcountryCard appears when data is filtered by name */}
          
          {/* <DetailedCountryCard /> */}
          {
            // when detailedCountryCard is on, both gallery and search will be off
          }
        </div>
    </CountriesContext.Provider>
  );
}

  export default App;