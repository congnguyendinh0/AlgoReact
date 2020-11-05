import P5Wrapper from "react-p5-wrapper";
import React from "react";
import sketch from "./sketch.js";

const P5WrapperContainer = ({ isStart }) => {
  return <P5Wrapper sketch={sketch} isStart={isStart} speed={500}></P5Wrapper>;
};

export default P5WrapperContainer;
// how to only call quicksort when I click the btn & restart
// the moment this component is mounted the quicksort function already started
// had to refresh the page to see the animationo again :(
