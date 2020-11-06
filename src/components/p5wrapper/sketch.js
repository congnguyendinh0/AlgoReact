let values = [];
let w = 10;
let states = [];
var speed = 500; // adjust this variable for the animation speed ; use var because it is function scope

// p5.js setup function only runs once
// draw function will run continuously aka infinite loop

export default function sketch(p) {
  let isStart;
  //let pg;
  p.setup = function (props) {
    p.createCanvas(400, 400);
    //pg = p.createGraphics(200, 200);
    values = new Array(400 / w);
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(400);
      states[i] = -1;
    }
    //console.log(isStart, "what is isStart when setup fn is called");
    quickSort(values, 0, values.length - 1);
  };

  async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
      quickSort(arr, start, index - 1),
      quickSort(arr, index + 1, end),
    ]);
  }

  async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
      if (i !== pivotIndex) {
        states[i] = -1;
      }
    }

    return pivotIndex;
  }

  //changing value for the sleep function will adjust animation speed
  // challenge: how to dynamically change the speed
  // how to pass the props into this function
  async function swap(arr, a, b) {
    await sleep(speed);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  p.draw = function () {
    p.background(50);
    for (let i = 0; i < 10; i++) {
      p.line(i * 40, 0, i * 40, 400);
      p.line(0, i * 40, 400, i * 40);
      p.stroke(100);
    }
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.toggleSpeed === true) {
        isStart = true;
        speed = props.speed; // props.speed = 120 animation will be faster
      } else {
        isStart = false;
        speed = 500;
      }
    };

    if (isStart) {
      console.log("isStart is true");
    }
    for (let i = 0; i < values.length; i++) {
      if (states[i] === 0) {
        p.fill("#E0777D");
      } else if (states[i] === 1) {
        p.fill("#D6FFB7");
      } else {
        p.fill("rgba(210,232,232,0.9)");
      }
      p.rect(i * w, p.height - values[i], w, values[i], 25);
    }

    // testing createGraphics
    // pg = p.background("rgba(210,232,232,0.1)");
    // pg = p.ellipse(pg.width / 4, pg.height / 4, 20, 20);
  };

  // testing p.remove will remove entire canvas
  // p.doubleClicked = function () {
  //   p.remove();
  // };

  // solution: simply call setup function again to rerun the quicksort function on doubleClick!
  p.doubleClicked = function () {
    p.setup();
  };
}
// end of sketch function
