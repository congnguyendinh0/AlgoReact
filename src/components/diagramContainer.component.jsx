import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import QuickSort from "./quick-sort/QuickSort.component";
import BubbleSort from "./bubble-sort/BubbleSort.component";
// move array to redux store?

const DiagramContainer = ({ isStart, toggleSpeed }) => {
  const [array, setArray] = useState([]);

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomizedArr = () => {
    const newArr = [];
    for (let i = 0; i < 40; i++) {
      newArr.push(randomInt(60, 380));
    }
    setArray(newArr);
  };

  return (
    <Grid container spacing={2} m={3}>
      <button onClick={randomizedArr}>Click me to generate random array</button>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <BubbleSort isStart={isStart} toggleSpeed={toggleSpeed} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <QuickSort
                isStart={isStart}
                toggleSpeed={toggleSpeed}
                array={array}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiagramContainer;
