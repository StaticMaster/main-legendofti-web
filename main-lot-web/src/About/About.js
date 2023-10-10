import React from "react";
import "./About.css";
import timainpic from '../images/ti-main-pic.jpg';

function About() {
  return (
    <div className="about-section">
        <img src={timainpic} alt="ti-main" className="ti-main-pic"></img>
      <p className="about-text">
        Hi I'm Ti (Tea) and I'm born and raised in Arizona! I've always had a
        passion with gaming since I was a kid and I started streaming from my
        PS4 console in 2016. I mainly play Call of Duty but I thoroughly enjoy
        interacting with my community through Just Chatting streams. I'm also a
        powerlifter and dancer. I do want to compete in powerlifting competition
        in the future. I have a strong passion with fitness and being active!
      </p>
    </div>
  );
}

export default About;
