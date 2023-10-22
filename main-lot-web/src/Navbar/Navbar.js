import React from 'react';
import './Navbar.css';
import tipfp from "../images/ti pfp.png"; 

function Navbar() {
  return (
    <div className='navbar'>
      < a href = '/' className='navbar-link' ><img src={tipfp} alt='ti-pfp' className='main-pfp'/></a>
      <ul>
       <a href='/' className='navbar-link'>Home</a> 
       <a href='#socials' className='navbar-link'>Socials</a>
       <a href='#about' className='navbar-link'>About</a>
      </ul>
    </div>
  )
}

export default Navbar
