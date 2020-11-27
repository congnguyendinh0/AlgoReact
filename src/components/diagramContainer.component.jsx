import React from "react";
import Grid from "@material-ui/core/Grid";
import QuickSort from "./quick-sort/QuickSort.component";
import BubbleSort from "./bubble-sort/BubbleSort.component";

const DiagramContainer = ({ isStart, toggleSpeed, array }) => {
  return (
    <Grid container spacing={2} m={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {["Bubble Sort", "Bubble Sort", "Bubble Sort"].map((value, id) => (
            <Grid key={id} item>
              <BubbleSort isStart={isStart} toggleSpeed={toggleSpeed} />
              <h2>{value}</h2>
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={2}>
          {["Quick Sort", "Quick Sort", "Quick Sort"].map((value, id) => (
            <Grid key={id} item>
              <QuickSort
                isStart={isStart}
                toggleSpeed={toggleSpeed}
                array={array}
              />
              <h2>{value}</h2>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiagramContainer;
