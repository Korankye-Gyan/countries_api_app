import React from 'react'
//import { Link } from 'react-router-dom';

const Country = ({country}) => {
  return (
    <div className='card_details'>
      <img
        src={country.flags.png}
        alt='country flag'
        style={{width:'100%'}}
      />
         <div style={{paddingLeft:'40px'}}>

            <h3>{country.name}</h3>

            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>capital: {country.capital}</p>
      </div>

    </div>
  )
}

export default Country
