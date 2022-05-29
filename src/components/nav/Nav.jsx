import React, { useLayoutEffect, useState } from "react";

import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { VscSymbolColor } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState();

  useLayoutEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth <= 700;
        if (ismobile !== isMobile) setIsMobile(ismobile);

        console.log(ismobile, "size");
      },
      false
    );
  }, [isMobile]);

  return (
    <>
      <nav className={isMobile ? "nav_mobile" : ""}>
        {isMobile && (
          <a
            href="#null"
            className="mobile_menu_btn"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {showNav ? <AiOutlineClose /> : <TiThMenu />}
          </a>
        )}
        {showNav && (
          <>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <AiOutlineHome />
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <AiOutlineUser />
            </a>
            <a
              href="#experience"
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              <BiBook />
            </a>
            <a
              href="#services"
              onClick={() => setActiveNav("#services")}
              className={activeNav === "#services" ? "active" : ""}
            >
              <RiServiceLine />
            </a>
            <a
              href="#myart"
              onClick={() => setActiveNav("#myart")}
              className={activeNav === "#myart" ? "active" : ""}
            >
              <VscSymbolColor />
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <BiMessageSquareDetail />
            </a>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
