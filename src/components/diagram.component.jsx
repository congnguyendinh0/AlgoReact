import React, { useState } from "react";
import Sketch from "react-p5";

const Diagram = ({ isStart }) => {
  const [y, setY] = useState(0);

  const draw = (p5) => {
    p5.background(50);
    for (let i = 0; i < 10; i++) {
      p5.line(i * 40, 0, i * 40, 400);
      p5.line(0, i * 40, 400, i * 40);
      p5.stroke(100);
    }
    if (isStart === true) {
      p5.fill(255, y * 1.5, 0);
      p5.ellipse(p5.width / 3, y, 50);
      p5.fill(150, y * 0.5, 100);
      p5.ellipse(p5.height / 5, y * 1.2, 30);
      if (y < p5.height) setY(y + 1);
    } else setY(0);
  };

  return (
    <div>
      <Sketch
        setup={(p5, parentRef) => {
          p5.createCanvas(400, 400).parent(parentRef);
        }}
        draw={draw}
      />
    </div>
  );
};

export default Diagram;
