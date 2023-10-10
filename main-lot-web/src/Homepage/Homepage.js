import React from 'react';
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import './Homepage.css';
import Typewriter from 'typewriter-effect';
import tipfp from "../images/ti-background.jpg";
import tibgvid from '../images/updated-ti-background-vid.mp4';
import Socials from '../Socials/Socials';

function Homepage() {
  return (
    <div>
<div>
  <div className='fade in'>
    <div className='bg-wrapper'>
      <div className="main-section">
        <Navbar />
        <video autoPlay loop muted className='bg-video'>
          <source src={tibgvid} type='video/mp4' />
        </video>
        <div className="content-wrapper">
          <img src={tipfp} alt='ti-pic' className='ti-pfp' />
          <div className="text-wrapper">
            <p className='intro-text'>I am Legend Of Ti</p>
            <Typewriter className="custom-typewriter" options={{
              strings: ['Creator', 'Gamer', 'Bodybuilder'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 500,
            }} />
            <span className='typewriter'></span>
          </div>
        </div>
      </div>
    </div>
    <div className='social-section'>
      <section id='Socials' className='socials-title'>Socials</section>
      <p className='social-text'>The Socials are a representation of me. My Twitch, Instagram, TikTok, Youtube, and Kick are a part of who I am.</p>
      <Socials/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Homepage
