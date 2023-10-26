import React, { useState } from 'react';
import './Navbar.css';
import tipfp from "../images/ti pfp.png"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href='/' className='navbar-link'>
        <img src={tipfp} alt='ti-pfp' className='main-pfp'/>
      </a>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      {/* < a href = '/' className='navbar-link' ></a> */}
      <ul className={menuOpen ? 'open' : ''}>
       <a href='/' className='navbar-link'>Home</a> 
       <a href='#socials' className='navbar-link'>Socials</a>
       <a href='#about' className='navbar-link'>About</a>
      </ul>
    </div>
  )
}

export default Navbar
