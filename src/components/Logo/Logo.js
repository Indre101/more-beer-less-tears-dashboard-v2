// Logo Animation Lottie
import React, { useState } from "react";
import animationData from "../../assets/lottifiles/data08.json";
import lottie from "lottie-web";
export default React.memo(function Logoanimation() {
  const [isStopped, setisStopped] = useState(false);

  return (
    <div>
      {/* <div className="wrapper">
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={isStopped}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                setTimeout(() => {
                  setisStopped(true);
                  setisStopped(false);
                }, 20000);
              },
            },
          ]}
        />
      </div> */}
    </div>
  );
});
