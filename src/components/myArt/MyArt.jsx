import { useState } from "react";

import Modal from "../../UI/Modal";

import "./myArt.css";
import ART1 from "../../assets/arts/starwars.png";
import ART2 from "../../assets/arts/ZOOM_INTERVIEW.png";
import ART3 from "../../assets/arts/Inked.png";
import ART4 from "../../assets/arts/Inkedhook2_LI.jpg";
import ART5 from "../../assets/arts/junpradox.png";
import ART6 from "../../assets/arts/WP.png";
import ART7 from "../../assets/arts/cartoon.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: ART1,
    title: "Star Wars parody",
    text: "art1",
  },
  {
    avatar: ART2,
    id: 2,
    title: "ZOOM Interview parody",
    text: "art2",
  },
  {
    avatar: ART3,
    id: 3,
    title: "Inked parody",
    text: "art3",
  },
  {
    avatar: ART4,
    id: 4,
    title: "Inked Hook parody",
    text: "art4",
  },
  {
    avatar: ART5,
    id: 5,
    title: "Junpradox parody",
    text: "art5",
  },
  {
    avatar: ART6,
    id: 6,
    title: "WP parody",
    text: "art6",
  },
  {
    avatar: ART7,
    id: 7,
    title: "Cartoon parody",
    text: "art7",
  },
];

const MyArt = () => {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);
  console.log(selectedArt);

  //function to take cliked image id ano push i to the modal
  const handleClick = (id) => {
    const chosenCard = data.find((card) => card.id === id);
    setSelectedArt(chosenCard);
    setIsModalOpen(true);
  };

  return (
    <section id="myart">
      <h2 style={{ marginBottom: "unset" }}>My Art</h2>
      <h4 style={{ marginBottom: "2rem" }}>Comedy Sketchs</h4>

      {data.map(({ title, text, id }, index) => {
        return (
          ismodalOpen && (
            <Modal
              key={id}
              imgSrc={selectedArt.avatar}
              alt={title}
              closeModal={() => setIsModalOpen(false)}
            />
          )
        );
      })}

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review, id }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial"
              onClick={() => handleClick(id)}
            >
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
