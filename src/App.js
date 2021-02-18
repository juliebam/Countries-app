
import './App.css';

import React, { useEffect, useState, createContext } from 'react';
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Gallery from "./components/Gallery.jsx";

export const CountriesContext = createContext()

function App() {
  
  const [ countries, setCountries ] = useState([])

  const findCountry = (name) => {
    setCountries((prevState) => {
      const singleCountry = {
        // prevState.filter

      }

        return singleCountry
    })
  }

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(results => results.json())
        .then((data) => {
          setCountries(data)
        })
        }, [])
  
  
  return (
    <CountriesContext.Provider value={ countries, findCountry } >
        <div className="App">
          <Header />
          <Search />
          <Gallery />
        </div>
    </CountriesContext.Provider>
  );
}

  export default App;