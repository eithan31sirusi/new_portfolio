import { useState } from "react";
import imageStock from "../../helpers/imagesStock";
console.log(imageStock, "fefefefe");

const ImageSilder = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageStockContainer = {
    width: "450px",
    height: "250px",
    position: "relative",
    margin: "0 auto",
    padding: "2rem",
  };

  const slidesContariner = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "(translate(0,50%))",
    left: "32px",
    fontSize: "45px",
    colort: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "(translate(0,50%))",
    right: "32px",
    fontSize: "45px",
    colort: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={imageStockContainer}>
      <h1>ihsioahjoish</h1>
      <div style={leftArrow} onClick={goToPrev}>
        left
      </div>
      <div style={slidesContariner}></div>
      <div style={rightArrow} onClick={goToNext}>
        right
      </div>
    </div>
  );
};

export default ImageSilder;
