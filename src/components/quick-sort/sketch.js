let w = 10;
let states = [];
var speed = 500;
var isStart;
var values = [];

export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    // values = new Array(400 / w);
    // for (let i = 0; i < values.length; i++) {
    //   values[i] = p.random(400);
    //   states[i] = -1;
    // }
    quickSort(values, 0, values.length - 1);

    // p.mousePressed = function (e) {
    //   if (e.target.id === "quicksort") {
    //     quickSort(values, 0, values.length - 1);
    //   }
    // };

    // however, when mousepress on the screen outside the sort btn the quick sort function will stop
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
        speed = props.speed;
      } else {
        speed = 500;
      }

      if (props.isStart) {
        isStart = true;
      } else {
        isStart = false;
      }

      // pass in randomized array on button click
      if (props.array.length) {
        values = props.array;
      }
      // start sorting only on button click
      if (isStart) {
        p.setup();
      }
    };

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
  };

  // call setup function again to rerun the quicksort function on doubleClick!
  // p.doubleClicked = function () {
  //   p.setup();
  // };

  // weird behavior whenever calling setimeout on  quicksort
  p.mousePressed = function (e) {
    // console.log(e, "mouse pressed event");
    // if (e.target.id === "generate") {
    //   setTimeout(quickSort(values, 0, values.length - 1), 500);
    // }
  };
}
// end of sketch function
