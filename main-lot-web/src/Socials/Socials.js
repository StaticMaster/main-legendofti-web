import React from "react";
import "./Socials.css";
// import titwitch from '../images/ti-twitch.mp4'

function Socials() {
  return (
    <div className="content-section">
      <a href="https://www.twitch.tv/legendof_ti" className="twitch-link">
        <button className="social-subsection-twitch-button">Twitch</button></a>
        {/* <video autoPlay loop muted className='ti-twitch'>
          <source src={titwitch} type='video/mp4' />
        </video> */}
      
    </div>
  );
}

export default Socials;
