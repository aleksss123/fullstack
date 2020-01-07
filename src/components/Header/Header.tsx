import React from "react";
import { Link } from "react-router-dom";
import header_logo from "../../assets/jerry_meme.jpg";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-item">
        Site with memes (templates of memes, actually)
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="header-item"> Site logo --></div>
      <img className="header-image" src={header_logo} />
      <button className="meme-button">Login </button>
    </header>
  );
};

export default Header;
