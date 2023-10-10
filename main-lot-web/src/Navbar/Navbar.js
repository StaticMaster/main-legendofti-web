import React from 'react';
import './Navbar.css';
import tipfp from "../images/ti pfp.png"; 

function Navbar() {
  return (
    <div className='navbar'>
      < a href = '/' ><img src={tipfp} alt='ti-pfp' className='main-pfp'/></a>
      <ul>
       <a href='/'>Home</a> 
       <a href='#Socials'>Socials</a>
       <a href='/about'>About</a>
      </ul>
    </div>
  )
}

export default Navbar
