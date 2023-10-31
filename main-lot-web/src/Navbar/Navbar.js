import React from "react";
import "./Navbar.css";
import tipfp from "../images/ti pfp.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="navbar">
      <a href="/" className="navbar-link">
        <img src={tipfp} alt="ti-pfp" className="main-pfp" />
      </a>
      <ul>
        <a href="/" className="navbar-link">
          Home
        </a>
        <a href="#socials" className="navbar-link">
          Socials
        </a>
        <a href="#about" className="navbar-link">
          About
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
