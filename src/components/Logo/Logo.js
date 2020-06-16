// Logo Animation Lottie
import React, { useState, useEffect, useRef } from "react";
import animationData from "../../assets/lottifiles/data08.json";
import lottie from "lottie-web";
export default React.memo(function Logoanimation() {
  const [isStopped, setisStopped] = useState(false);
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
    <div>
      <div className="wrapper logo" ref={container}></div>
    </div>
  );
});
