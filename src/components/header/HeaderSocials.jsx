import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com/eithan31sirusi" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href="https://www.tiktok.com/@eitan.sirusi" target="_blank">
        <FaTiktok size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
