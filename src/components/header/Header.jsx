import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/main_profile_pic.png";
import HeaderSocial from "./HeaderSocials";
import AnimatedBG from "../../UI/AnimatedBG";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h3>Hello I'm</h3>
          <h1>Eithan Sirusi</h1>
          <h4 className="text-light">Fullstack Developer</h4>
          <CTA />
          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            <h3>Scroll Down</h3>
          </a>
        </div>
      </header>
      <AnimatedBG />
    </>
  );
};

export default Header;
