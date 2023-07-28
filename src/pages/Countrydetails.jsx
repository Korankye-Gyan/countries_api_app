import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Countrydetails = () => {
    const { CountrynumericCode } = useParams();
    const [countryData, setCountryData] = useState([]);
     
    useEffect(() => {
        fetch("src/assets/Countries_app_project/data.json") // Fetch the JSON data from the correct path
          .then(response => response.json())
          .then(data => setCountryData(data)) // Set the state with the fetched data
      }, []);

      const countryDetailsPage = countryData.find((countryData) => countryData.id === Number(CountrynumericCode));
  return (
    <div>
      <p>Testing</p>
    </div>
  )
}

export default Countrydetails
