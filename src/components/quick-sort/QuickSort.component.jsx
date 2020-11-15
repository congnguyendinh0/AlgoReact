import P5Wrapper from "react-p5-wrapper";
import React, { useState } from "react";
import sketch from "./sketch.js";

const QuickSort = ({ isStart, toggleSpeed, array }) => {
  return (
    <>
      <P5Wrapper
        sketch={sketch}
        isStart={isStart}
        toggleSpeed={toggleSpeed}
        array={array}
        speed={20}
      ></P5Wrapper>
    </>
  );
};

export default QuickSort;
// the moment this component is mounted the quicksort function already started
// had to refresh the page to see the animationo again
// solution is to call setup function again need to set some trigger event e.g doubleClicked
