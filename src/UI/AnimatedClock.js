import { useRef, useEffect } from "react";

import "./animatedClock.css";

const AnimatedClock = () => {
  const hours = useRef(null);
  const minutes = useRef(null);
  const seconds = useRef(null);

  useEffect(() => {
    setInterval(() => {
      const deg = 6;

      const date = new Date();

      let hh = date.getHours() * 30;
      let mm = date.getMinutes() * deg;
      let ss = date.getSeconds() * deg;

      hours.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      minutes.current.style.transform = `rotateZ(${mm}deg)`;
      seconds.current.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
  }, []);

  return (
    <div className="clock">
      <div className="hour" ref={hours}>
        <div className="hr" id="hr"></div>
      </div>
      <div className="min" ref={minutes}>
        <div className="mn" id="mn"></div>
      </div>
      <div className="sec" ref={seconds}>
        <div className="sc" id="sc"></div>
      </div>
    </div>
  );
};

export default AnimatedClock;
