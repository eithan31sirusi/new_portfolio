import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/clothing_project.png";
import IMG2 from "../../assets/tamara.png";
import IMG3 from "../../assets/placeholder2.jpg";
import IMG4 from "../../assets/personal_diary.png";

import AnimatedBG from "../../UI/AnimatedBG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Virtual Clothing Shop",
    github: "https://github.com",
    demo: "https://papaya-conkies-6a8115.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "women's clothing e-commerce site",
    github: ".",
    demo: "https://www.tammaradesign.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Users Management System (Expo)",
    github: "https://github.com/eithan31sirusi/employees_system_expo",
    demo: "",
  },
  ,
  {
    id: 4,
    image: IMG4,
    title: "Personal Note Journal",
    github: "https://github.com/eithan31sirusi/Personal_Note_Journal",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <AnimatedBG />
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ textAlign: "center" }}>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
