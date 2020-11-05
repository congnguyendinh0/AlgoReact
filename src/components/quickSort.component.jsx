import React, { useState } from "react";
import Sketch from "react-p5";
import { quickSort } from "./quickSort";

// alternative solution
// write quicksort algo in plain JS and import it here
// use other styling to display quick sort
// combine what Clement and coding train code together
// we might need redux

const QuickSort = ({ isStart }) => {
  var values = [80, 100, 150, 255, 350, 400];
  const currentArr = [0, 1, 0, 0, 1, 1];
  // dummy data here

  const w = 25;
  // drawfunction
  const draw = (p5) => {
    p5.background(50);
    if (isStart === true) {
      for (let i = 0; i < values.length; i++) {
        if (currentArr[i] === 0) {
          p5.fill("#E0777D");
        } else if (currentArr[i] === 1) {
          p5.fill("#D6FFB7");
        } else {
          p5.fill(50);
        }
        p5.rect(i * w, 400 - values[i], w, values[i]);
      }
    }
  };

  // setup function
  const setUp = (p5, parentRef) => {
    p5.createCanvas(400, 400).parent(parentRef);
    //values = new Array(400 / w);
    //for (let i = 0; i < values.length; i++) {
    //values[i] = Math.random(400);
    //currentArr[i] = -1;
    //}
    quickSort(values, 0, values.length - 1);
  };

  return (
    <div>
      <Sketch setup={setUp} draw={draw} />
    </div>
  );
};

export default QuickSort;
