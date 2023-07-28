import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countrydetails from "./pages/countrydetails";
import Countrylist from "./pages/countrylist";

function App() {
  return (
    <>
       <Router>
           <Nav/>
         <Routes>
           <Route path="/" element={<Countrylist/>} />
           <Route path="/Countrydetails/:CountrynumericCode" element={<Countrydetails/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
