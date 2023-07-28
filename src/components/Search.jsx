import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
  return (
    <div className='form_wrapper'>
      <form className='search_item'>
         <div className='search_input_wrapper'>
               <FontAwesomeIcon 
                    icon={faSearch} 
                    className='search_icon' 
               />
                <input 
                   className='search_input'
                   type='text'
                   placeholder='Search a country...'
                />
         </div>
      </form>
      <form className='filter_item'>     
              <select>
                 <option>Filter by Region</option>
                 <option>Africa</option>
                 <option>America</option>
                 <option>Asia</option>
                 <option>Europe</option>
                 <option>Oceania</option>
              </select>
      </form>
    </div>
  )
}

export default Search
