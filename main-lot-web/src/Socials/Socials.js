import React from "react";
import "./Socials.css";
import titwitch from "../images/ti-twitch-updated.mp4";
import tiinstagram from "../images/ti-instagram-updated.mp4";
import titiktok from "../images/ti-tiktok.mp4";
import tiytshorts from '../images/ti-ytshorts-updated.mp4';

function Socials() {
  return (
    <div className="content-section">
      <a href="https://www.twitch.tv/legendof_ti" className="twitch-link">
        <button className="social-subsection-twitch-button">Twitch</button>
      </a>
      <video autoPlay loop muted className="ti-twitch">
        <source src={titwitch} type="video/mp4" />
      </video>
      <div className="mobile-section">
        <div className="mobile-content">
          <div className="video-section">
            <video autoPlay loop muted className="ti-social">
              <source src={tiinstagram} type="video/mp4" />
            </video>
            <video autoPlay loop muted className="ti-social">
              <source src={titiktok} type="video/mp4" />
            </video>
            <video autoPlay loop muted className="ti-social">
              <source src={tiytshorts} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
