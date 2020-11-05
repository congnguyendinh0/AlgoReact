import P5Wrapper from "react-p5-wrapper";
import React from "react";
import sketch from "./sketch.js";

// write in hooks
// try bubbleSort or QuickSort with p5Wrapper
// useEffect to handle async functions
// where to handle state
// set up / draw fn
// custom props
//

const P5WrapperContainer = () => {
  return <P5Wrapper sketch={sketch}></P5Wrapper>;
};

export default P5WrapperContainer;
//
