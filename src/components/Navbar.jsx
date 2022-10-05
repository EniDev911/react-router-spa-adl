import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/react-router-spa-adl">🏠 Home</Link> 
        </li>
        <li>
          <Link to="/react-router-spa-adl/contacto">📬  Contacto</Link>
        </li>
        <li className='brand'>
          <Link to="/react-router-spa-adl">Happy Cake 🎂</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar