import React, { useState, useEffect } from 'react';
import Country from '../components/country';

const Countrylist = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch("src/assets/Countries_app_project/data.json") // Fetch the JSON data from the correct path
      .then(response => response.json())
      .then(data => setCountrys(data)) // Set the state with the fetched data
  }, []);

  return (
    <ul>
      {countrys.map(country => (
        <Country country={country} key={country.numericCode} />
      ))}
    </ul>
  );
}

export default Countrylist;
