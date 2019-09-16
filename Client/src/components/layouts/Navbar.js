import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <ul>
        <li>
          Logo
        </li>
        <li>
          <Link to='/' style={{ textDecoration: 'none', color: '#020A68' }} >Home</Link>
        </li>
        <li>
          <Link to='/about' style={{ textDecoration: 'none', color: '#020A68' }} >About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
