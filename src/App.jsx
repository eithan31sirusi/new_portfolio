import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import MyArt from "./components/myArt/MyArt";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import AnimatedBG from "./UI/AnimatedBG";
import ImageSilder from "./components/imageslider/ImageSlider";
import imageStock from "./helpers/imagesStock";
import Iframe from "./components/iframe/Iframe";

const App = () => {
  return (
    <>
      <AnimatedBG>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <MyArt />
        <Iframe />
        <Contact />
        <Footer />
      </AnimatedBG>
    </>
  );
};

export default App;
