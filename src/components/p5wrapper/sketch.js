export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  //   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //     if (props.rotation !== null) {
  //       rotation = (props.rotation * Math.PI) / 180;
  //     }
  //   };

  p.draw = function () {
    p.background(50);
    for (let i = 0; i < 10; i++) {
      p.line(i * 40, 0, i * 40, 400);
      p.line(0, i * 40, 400, i * 40);
      p.stroke(100);
    }
  };
}
