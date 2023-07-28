import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Countrydetails = () => {
    const { jobId } = useParams();
    const [jobsData, setJobsData] = useState([]);
     
     useEffect(() => {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setJobsData(data));
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Countrydetails
