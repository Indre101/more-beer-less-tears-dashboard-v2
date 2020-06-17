import React, { useState, useEffect, useRef } from "react";
import animationData from "../../assets/lottifiles/datacheers.json";
import lottie from "lottie-web";

export default React.memo(function HappyAnimation(props) {
  const [displayValue, setdisplayValue] = useState("none");
  const [StopShowing, setStopShowing] = useState(false);

  const container = useRef();

  useEffect(() => {
    if (
      props.amountSold > props.maxBeakerHeight * 10 &&
      displayValue === "none" &&
      !StopShowing
    ) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: animationData,
      });
      setdisplayValue("flex");
      animation.play();
      setTimeout(() => {
        setdisplayValue("none");
        setStopShowing(true);
      }, 5000);
    } else if (StopShowing) {
      return;
    }
  }, [StopShowing, displayValue, props.amountSold, props.maxBeakerHeight]);

  return (
    <div style={{ display: displayValue }} className="beerMeterFull">
      <h1>
        More beers less tears We did it! <br /> The happiness bar is full!
      </h1>
      <div ref={container} className="animationContainer"></div>
    </div>
  );
});
