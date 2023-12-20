import { useState } from "react";

import Modal from "../../UI/Modal";

import "./myArt.css";
import ART1 from "../../assets/arts/starwars.png";
import ART2 from "../../assets/arts/ZOOM_INTERVIEW.png";
import ART3 from "../../assets/arts/Inked.png";
import ART4 from "../../assets/arts/Inkedhook2_LI.jpg";
import ART5 from "../../assets/arts/junpradox.png";
import ART6 from "../../assets/arts/new_art/1.jpeg";
import ART7 from "../../assets/arts/new_art/2.jpeg";
import ART8 from "../../assets/arts/new_art/3.jpeg";
import ART9 from "../../assets/arts/new_art/4.jpeg";
import ART10 from "../../assets/arts/new_art/5.jpeg";
import ART11 from "../../assets/arts/new_art/6.jpeg";
import ART12 from "../../assets/arts/new_art/7.jpeg";
import ART13 from "../../assets/arts/new_art/8.jpeg";
import ART14 from "../../assets/arts/new_art/9.jpeg";
import ART15 from "../../assets/arts/new_art/10.jpeg";
import ART16 from "../../assets/arts/new_art/11.jpeg";
import ART17 from "../../assets/arts/new_art/12.jpeg";
import ART18 from "../../assets/arts/new_art/13.jpeg";
import ART19 from "../../assets/arts/new_art/14.jpeg";
import ART20 from "../../assets/arts/new_art/15.jpeg";
import ART21 from "../../assets/arts/new_art/16.jpeg";
import ART22 from "../../assets/arts/new_art/17.jpeg";
import ART23 from "../../assets/arts/new_art/18.jpeg";
import ART24 from "../../assets/arts/new_art/19.jpeg";
import ART25 from "../../assets/arts/new_art/20.jpeg";
import ART26 from "../../assets/arts/new_art/father_daוghter.png";
import ART27 from "../../assets/arts/new_art/father_kids.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; // סגנון בסיסי של Swiper
import "swiper/css/pagination"; // סגנון עבור pagination
import "swiper/css/navigation";

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
  {
    id: 8,
    avatar: ART8,
    title: "IDF Ninjs",
    text: "art8",
  },
  {
    avatar: ART9,
    id: 9,
    title: "IDF Ninja Group",
    text: "art9",
  },
  {
    avatar: ART10,
    id: 10,
    title: "IDF Naruto",
    text: "art10",
  },
  {
    avatar: ART11,
    id: 11,
    title: "Inked Hook parody",
    text: "art11",
  },
  {
    avatar: ART12,
    id: 12,
    title: "Junpradox parody",
    text: "art12",
  },
  {
    avatar: ART13,
    id: 13,
    title: "WP parody",
    text: "art13",
  },
  {
    avatar: ART14,
    id: 14,
    title: "Cartoon parody",
    text: "art14",
  },
  {
    id: 15,
    avatar: ART15,
    title: "Star Wars parody",
    text: "art15",
  },
  {
    avatar: ART16,
    id: 16,
    title: "ZOOM Interview parody",
    text: "art16",
  },
  {
    avatar: ART17,
    id: 17,
    title: "Inked parody",
    text: "art17",
  },
  {
    avatar: ART18,
    id: 18,
    title: "Inked Hook parody",
    text: "art18",
  },
  {
    avatar: ART19,
    id: 19,
    title: "Junpradox parody",
    text: "art19",
  },

  {
    avatar: ART20,
    id: 20,
    title: "WP parody",
    text: "art20",
  },
  {
    avatar: ART21,
    id: 21,
    title: "Cartoon parody",
    text: "art21",
  },
  {
    avatar: ART22,
    id: 22,
    title: "Inked parody",
    text: "art22",
  },
  {
    avatar: ART23,
    id: 23,
    title: "Inked Hook parody",
    text: "art23",
  },
  {
    avatar: ART24,
    id: 24,
    title: "Junpradox parody",
    text: "art24",
  },
  {
    avatar: ART25,
    id: 25,
    title: "WP parody",
    text: "art25",
  },
  {
    avatar: ART26,
    id: 26,
    title: "Cartoon parody",
    text: "art26",
  },
  {
    avatar: ART27,
    id: 27,
    title: "Cartoon parody",
    text: "art27",
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
    <section id="testimonials">
      <h2 style={{ marginBottom: "unset" }}>My Art</h2>
      <h4 style={{ marginBottom: "2rem" }}>Drawing & Sketchs</h4>
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
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
            </SwiperSlide>
          );
        })}{" "}
      </Swiper>{" "}
    </section>
  );
};

export default MyArt;
