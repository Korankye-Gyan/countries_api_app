import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
  return (
    <nav>
      <h3 style={{ margin: 0 }}>
                <Link to={'/'} style={{ textDecoration: 'none', color: '#111517' }}>Where in the world?</Link>
      </h3>
      <div className='darkmode_button'>
          <FontAwesomeIcon icon={faMoon} />
          <p className='nav_item'>Dark Mode</p>
      </div>
    </nav>
  )
}

export default Nav
