import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

//create a random array

// TO-DO:
// 1. STUDY THE BUILT IN FUNCTION IN P5.JS
// 2. HOW TO INTEGRATE P5 WITH REACT
// Challenge: how to write a function inside the draw function

// 3. HOW TO MANIPULATE ARRAY WITH HOOKS OR REDUX OR CONTEXT API
// 4. HOW TO SET TIME OUT IN P5.js and React

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

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomize = () => {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      let newItem = getRandomInt(5, 150);
      newArr.push(newItem);
    }
    //setArr((arr) => [...arr, ...newArr]);
    //console.log(arr, "what is arr in randomize fn");
  };

  // solution perhaps: pass in a random array when initiazize the canvas
  // randomize array has to be stored somewhere else? redux? and can be generated on btn click
  const draw = (p5) => {
    p5.background(50);
    for (let i = 0; i < 10; i++) {
      p5.line(i * 40, 0, i * 40, 400);
      p5.line(0, i * 40, 400, i * 40);
      p5.stroke(100);
    }

    //bubble sort - how to call this function only when btn click
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
    //animating bubblesort
    // how to slow down animation
    // const sleep = (milliseconds) => {
    //   return new Promise((resolve) => setTimeout(resolve, milliseconds));
    // };
    // const list = [1, 2, 3, 4];
    // const doSomething = async () => {
    //   for (const item of list) {
    //     await sleep(1000);
    //     console.log("🦄");
    //   }
    // };

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
