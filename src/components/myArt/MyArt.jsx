import React from "react";
import "./myArt.css";
import ART1 from "../../assets/arts/cartoon.png";
import ART2 from "../../assets/arts/starwars.png";
import ART3 from "../../assets/arts/Inked.jpg";
import ART4 from "../../assets/arts/Inkedhook2_LI.jpg";
import ART5 from "../../assets/arts/junpradox.jpg";
import ART6 from "../../assets/arts/WP.png";
import ART7 from "../../assets/arts/ZOOM_INTERVIEW.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: ART1,
  },
  {
    avatar: ART2,
  },
  {
    avatar: ART3,
  },
  {
    avatar: ART4,
  },
  {
    avatar: ART5,
  },
  {
    avatar: ART6,
  },
  {
    avatar: ART7,
  },
];

const MyArt = () => {
  return (
    <section id="testimonials">
      <h2 style={{ marginBottom: "unset" }}>My Art</h2>
      <h5 style={{ marginBottom: "2rem" }}>Comedy Sketchs</h5>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MyArt;
