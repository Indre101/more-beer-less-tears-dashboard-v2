import React, { useRef, useEffect } from "react";
import animationData from "../../assets/lottifiles/data08.json";
import lottie from "lottie-web";
import "./Preloader.scss";

export default React.memo(function Preloader(props) {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        id: "lottie-anim-element",
      },
    });
    animation.play();
  }, []);

  const container = useRef();
  const preloaderContainer = useRef();
  return (
    <div className="preloaderContainer" ref={preloaderContainer}>
      <div
        id="preloader"
        className="preloader"
        ref={container}
        onAnimationEnd={() => {
          preloaderContainer.current.style.display = "none";
        }}></div>
    </div>
  );
});
