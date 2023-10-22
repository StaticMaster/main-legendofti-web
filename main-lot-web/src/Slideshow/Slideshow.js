import React from 'react';
import './Slideshow.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import titwitchpage from '../images/ti-twitch-page.mp4';


const Slideshow = () => {
  return (
    <div className='carousel-section'>
    <Carousel showArrows={true} autoPlay={true} interval={6000} infiniteLoop={true}>
    <div>
    <video autoPlay loop muted className="slideshow-video">
       <source src={titwitchpage} type="video/mp4" />
      </video>
     <a href='https://www.twitch.tv/legendof_ti' className='social-link'><p className='social-name'>Twitch</p></a> 
    </div>
    <div>
    <video autoPlay loop muted className="slideshow-video">
        <source src={titwitchpage} type="video/mp4" />
      </video>
      <a href='https://www.youtube.com/@LegendofTi/featured' className='social-link'><p className='social-name'>Youtube</p></a>
    </div>
    <div>
    <video autoPlay loop muted className="slideshow-video">
        <source src={titwitchpage} type="video/mp4" />
      </video>
      <a href='https://kick.com/legendof_ti' className='social-link'><p className='social-name'>Kick</p></a>
    </div>
    </Carousel>
    </div>
  );
};

export default Slideshow;
