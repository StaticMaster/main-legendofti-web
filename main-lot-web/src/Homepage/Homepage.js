import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import tipfp from "../images/ti-background.jpg";
import tibgvid from "../images/updated-ti-background-vid.mp4";
import gameradvantage from "../images/gamer-advantage-logo.png";
import ghost from "../images/ghost-logo.png";
import altcustoms from "../images/altcustoms.png";
import Socials from "../Socials/Socials";
import About from "../About/About";

function Homepage() {
  return (
    <div>
      <div>
        <div className="fade in">
          <div className="bg-wrapper">
            <div className="main-section">
              <Navbar />
              <video autoPlay loop muted className="bg-video">
                <source src={tibgvid} type="video/mp4" />
              </video>
              <div className="content-wrapper">
                <img src={tipfp} alt="ti-pic" className="ti-pfp" />
                <div className="text-wrapper">
                  <p className="intro-text">I am Legend Of Ti</p>
                  <Typewriter
                    className="custom-typewriter"
                    options={{
                      strings: ["Creator", "Gamer", "Bodybuilder"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 500,
                    }}
                  />
                  <div className="sponsor-section">
                    <center>
                      <p className="sponsor-text">Sponsors</p>
                    </center>
                    <div className="sponsor-image-section">
                     <a href="https://gameradvantage.com/?ref=Ti"><img src={gameradvantage} className="gameradvantage-image"></img></a> 
                      <a href="https://www.ghostlifestyle.com/"><img src={ghost} className="ghost-image"></img></a>
                     <a href="https://altcustoms.com/?ref=Ti"><img src={altcustoms} className="altcustoms-image"></img></a> 
                    </div>
                  </div>
                  <span className="typewriter"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="social-section">
            <section id="socials" className="socials-title">
              Socials
            </section>
            <p className="social-text">
              The Socials are a representation of me. My Twitch, Instagram,
              TikTok, Youtube, and Kick are a part of who I am.
            </p>
            <br></br>
            <Socials />
          </div>
          <div className="about-section">
            <section id="about" className="about-title">
              About Me
            </section>
            <About />
          </div>
          <footer className="footer-section">
            <p className="footer-text">
              This entire website was built by the one and only Kaiju. You
              already know the vibes.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
