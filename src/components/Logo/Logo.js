// Logo Animation Lottie
import React, { useEffect, useRef } from "react";
import animationData from "../../assets/lottifiles/data08.json";
import lottie from "lottie-web";
import Wrapper from "../Wrapper.js/Wrapper";

export default React.memo(function Logoanimation() {
  const container = useRef();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
      onComplete: () => console.log("hi"),
    });
    animation.play();
    animation.addEventListener("complete", () =>
      setTimeout(() => {
        animation.stop();
        animation.play();
      }, 10000)
    );
  }, []);

  return (
    <Wrapper>
      <div className="logo" ref={container}></div>
    </Wrapper>
  );
});
