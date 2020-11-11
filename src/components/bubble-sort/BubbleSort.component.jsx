import P5Wrapper from "react-p5-wrapper";
import React from "react";
import sketch from "./sketch.js";

const BubbleSort = ({ isStart, toggleSpeed }) => {
  return (
    <>
      <P5Wrapper
        sketch={sketch}
        isStart={isStart}
        toggleSpeed={toggleSpeed}
        speed={80}
      ></P5Wrapper>
    </>
  );
};

export default BubbleSort;
