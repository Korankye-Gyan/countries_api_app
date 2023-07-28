import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
  return (
    <nav>
      <h3 className='nav_item'>
           Where in the world?
      </h3>
      <div className='darkmode_button'>
          <FontAwesomeIcon icon={faMoon} />
          <p className='nav_item'>Dark Mode</p>
      </div>
    </nav>
  )
}

export default Nav
