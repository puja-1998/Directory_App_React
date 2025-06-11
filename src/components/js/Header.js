import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className='header'>
        <h2>
        Directory App
        </h2>
    </div>
    <div className="redirectTo">
      <Link to='/'><button className='newPerson'>Add New Person</button></Link>
      <Link to='/retrieve'><button className='retrieveData'>Retrieve Information</button></Link>
    </div>
    </>
  )
}

export default Header