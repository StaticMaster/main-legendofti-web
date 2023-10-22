import React from 'react';
import './Slideshow.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import titwitchpage from '../images/ti-twitch-page.mp4';


const Slideshow = () => {
  return (
    <div className='carousel-section'>
    <Carousel showArrows={false} className='carousel-root'>
    <div>
    <video autoPlay loop muted className="ti-twitch">
        <source src={titwitchpage} type="video/mp4" />
      </video>
      <p className='social-name'>Twitch</p>
    </div>
    <div>
    <video autoPlay loop muted className="ti-twitch">
        <source src={titwitchpage} type="video/mp4" />
      </video>
      <p className='social-name'>Twitch</p>
    </div>
    <div>
    <video autoPlay loop muted className="ti-twitch">
        <source src={titwitchpage} type="video/mp4" />
      </video>
      <p className='social-name'>Twitch</p>
    </div>
    </Carousel>
    </div>
  );
};

export default Slideshow;
