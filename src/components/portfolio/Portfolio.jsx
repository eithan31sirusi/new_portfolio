import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/clothing_project.png";
// import IMG2 from "../../assets/usersmanagement.jpg";
// import IMG3 from "../../assets/usersmanagementexpo.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

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
    image: {},
    title: "Users Management System",
    github: "https://github.com/eithan31sirusi/employee-system",
    demo: "",
  },
  {
    id: 3,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
