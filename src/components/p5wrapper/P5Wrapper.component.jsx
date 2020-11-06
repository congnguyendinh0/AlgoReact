import P5Wrapper from "react-p5-wrapper";
import React from "react";
import sketch from "./sketch.js";

const P5WrapperContainer = ({ isStart, toggleSpeed }) => {
  return (
    <P5Wrapper
      sketch={sketch}
      isStart={isStart}
      toggleSpeed={toggleSpeed}
      speed={40}
    ></P5Wrapper>
  );
};

export default P5WrapperContainer;
// the moment this component is mounted the quicksort function already started
// had to refresh the page to see the animationo again
// solution is to call setup function again need to set some trigger event e.g doubleClicked
