import React from "react";
import "./Socials.css";
import titwitch from "../images/ti-twitch-updated.mp4";
import tiinstagram from "../images/ti-instagram-updated.mp4";
import titiktok from "../images/ti-tiktok.mp4";
import tiytshorts from "../images/ti-ytshorts-updated.mp4";
import Slideshow from "../Slideshow/Slideshow";

function Socials() {
  return (
    <div className="content-section">
      <Slideshow/>
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
          <div className="content-title-section">
           <a href="https://www.instagram.com/legendof_ti/?hl=en" className="social-link"><p className="content-title">Instagram</p></a>
            <a href="https://www.tiktok.com/@legendof_ti" className="social-link"><p className="content-title">Tiktok</p></a>
            <a href="https://www.youtube.com/@legendoftishorts" className="social-link"><p className="content-title">Shorts</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
