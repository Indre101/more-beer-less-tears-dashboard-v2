import React from "react";
import Wrapper from "../Wrapper.js/Wrapper";

class Announcement extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>ANNOUNCEMENT</h2>
        <div className="wrapperInside">
          <h3>Every Friday 6 - 7 PM</h3>
          <h2>HAPPY HOUR</h2>
          <h3 className="annoucmentDeal">Buy a beer and get one for free</h3>
        </div>
      </Wrapper>
    );
  }
}

export default Announcement;
