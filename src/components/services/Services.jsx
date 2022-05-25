import { useState } from "react";

import WebDevImg from "../../assets/services/webdev.gif";
import WebDesignImg from "../../assets/services/webdesgin.gif";
import ContentImg from "../../assets/services/content.gif";

import "./services.css";

const Services = () => {
  const [isWebDevClicked, setIsWebDevClicked] = useState(false);
  const [isWebDesignClicked, setIsWebDesignClicked] = useState(false);
  const [isContentClicked, setIsContentClicked] = useState(false);

  const handleServiceClick = (service) => {
    switch (service) {
      case "webdev":
        setIsWebDevClicked(!isWebDevClicked);
        setIsWebDesignClicked(false);
        setIsContentClicked(false);
        break;
      case "webdesign":
        setIsWebDesignClicked(!isWebDesignClicked);
        setIsWebDevClicked(false);
        setIsContentClicked(false);
        break;
      case "content":
        setIsContentClicked(!isContentClicked);
        setIsWebDevClicked(false);
        setIsWebDesignClicked(false);
        break;
      default:
        setIsWebDevClicked(false);
        setIsWebDesignClicked(false);
        setIsContentClicked(false);

        break;
    }
  };
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div
            className="service__head"
            onClick={() => {
              handleServiceClick("webdesign");
            }}
          >
            <h3>UI/UX Design</h3>
          </div>
          {isWebDesignClicked ? (
            <div className="service__body">
              <img src={WebDesignImg} alt="web design" />
            </div>
          ) : null}
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div
            className="service__head"
            onClick={() => {
              handleServiceClick("webdev");
            }}
          >
            <h3>Web Development</h3>
          </div>
          {isWebDevClicked ? (
            <div className="service__body">
              <img src={WebDevImg} alt="Web Development" />
            </div>
          ) : null}
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div
            className="service__head"
            onClick={() => {
              handleServiceClick("content");
            }}
          >
            <h3>Content Creation</h3>
          </div>
          {isContentClicked ? (
            <div className="service__body">
              <img src={ContentImg} alt="Content Creation" />
            </div>
          ) : null}
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
