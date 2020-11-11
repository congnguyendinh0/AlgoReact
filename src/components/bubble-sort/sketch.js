let arr = [];
let w = 10;
var speed = 800;
var isStart;
var sorter;

export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    arr = new Array(400 / w);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = p.random(400);
    }
    sorter = bubbleSort2(arr);
  };

  // try using generator function
  function* bubbleSort2() {
    //my bubble sort implementation
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        yield;
      }
    }
  }

  async function bubbleSort(arr) {
    let i = 0;
    let j = 0;
    for (let k = 0; k < arr.length; k++) {
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
        p.noLoop();
      }
    }
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
        speed = 800;
      }

      if (props.isStart === true) {
        isStart = true;
      } else {
        isStart = false;
      }
    };
    // below code works
    // but runs too fast

    // if (isStart) {
    //   bubbleSort(arr);
    //   for (let i = 0; i < arr.length; i++) {
    //     p.stroke(100, 143, 143);
    //     p.fill(250);
    //     p.rect(i * w, 400, w, -arr[i], 25);
    //   }
    // }

    // above code works

    // alternative : try generator funnction below
    // how to adjust the speed with generator function
    if (sorter.next) {
      sorter.next();
      for (let i = 0; i < arr.length; i++) {
        p.stroke(100, 143, 143);
        p.fill(250);
        p.rect(i * w, 400, w, -arr[i], 25);
      }
    }

    // above code works!
  };

  p.doubleClicked = function () {
    p.setup();
  };
}
// end of sketch function
