import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={{pathname: "/"}}>🏠 Home</Link> 
        </li>
        <li>
          <Link to={{pathname: "/contacto"}}>📬  Contacto</Link>
        </li>
        <li className='brand'>
          <Link to="/">Happy Cake 🎂</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar