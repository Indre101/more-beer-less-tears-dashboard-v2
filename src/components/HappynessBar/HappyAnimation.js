import React, { useState, useEffect, useRef } from "react";
import animationData from "../../assets/lottifiles/datacheers.json";
import lottie from "lottie-web";

export default React.memo(function HappyAnimation(props) {
  const [displayValue, setdisplayValue] = useState("none");
  const [StopShowing, setStopShowing] = useState(false);

  const container = useRef();
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

  useEffect(() => {
    if (StopShowing) {
      return;
    } else if (
      props.amountSold > props.maxBeakerHeight * 10 &&
      displayValue === "none"
    ) {
      setdisplayValue("flex");
      setTimeout(() => {
        setdisplayValue("none");
        setStopShowing(true);
      }, 7000);
    }
  }, [StopShowing, displayValue, props.amountSold, props.maxBeakerHeight]);

  return (
    <div
      style={{ display: displayValue }}
      className="beerMeterFull"
      ref={container}>
      <h1>
        More beers less tears We did it! <br /> The happiness bar is full!
      </h1>
    </div>
  );
});
