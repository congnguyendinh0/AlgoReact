import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

// note: this component is react-p5 rather than react-p5-wrapper
// Challenge: how to create a random array when btn click

// HOW TO MANIPULATE ARRAY WITH HOOKS OR REDUX OR CONTEXT API
// HOW TO async function

const BubbleSort = ({ isStart }) => {
  //const [arr, setArr] = useState([]);
  // dummy data for arr
  const arr = [
    220,
    150,
    80,
    40,
    500,
    118,
    90,
    75,
    64,
    20,
    5,
    80,
    500,
    44,
    54,
    99,
    180,
    10,
    10,
    10,
    100,
    10,
    10,
    10,
    50,
    20,
    20,
    20,
    30,
    80,
    70,
    60,
    10,
    180,
    500,
    150,
    260,
    470,
    70,
    20,
    30,
    50,
    10,
    5,
    20,
    10,
    10,
    900,
  ];

  const draw = (p5) => {
    p5.background(50);
    for (let i = 0; i < 10; i++) {
      p5.line(i * 40, 0, i * 40, 400);
      p5.line(0, i * 40, 400, i * 40);
      p5.stroke(100);
    }

    let i = 0;
    let j = 0;
    for (let k = 0; k < 50; k++) {
      if (i < arr.length) {
        let temp = arr[j];
        if (arr[j] > arr[j + 1]) {
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        j++;

        if (j >= arr.length - i - 1) {
          j = 0;
          i++;
        }
      } else {
        p5.noLoop();
      }
    }

    if (isStart) {
      for (let i = 0; i < 50; i++) {
        p5.stroke(100, 143, 143);
        p5.fill(250);
        p5.rect(i * 8, 400, 8, -arr[i], 20);
      }
    }
  };

  const setUp = (p5, parentRef) => {
    p5.createCanvas(400, 400).parent(parentRef);
  };

  return (
    <div>
      <Sketch setup={setUp} draw={draw} />
      {/* <button onClick={randomize}> Randomize</button> */}
    </div>
  );
};

export default BubbleSort;
