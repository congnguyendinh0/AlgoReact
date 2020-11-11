import React from "react";
import Grid from "@material-ui/core/Grid";
import QuickSort from "./quick-sort/QuickSort.component";
import BubbleSort from "./bubble-sort/BubbleSort.component";

const DiagramContainer = ({ isStart, toggleSpeed }) => {
  return (
    <Grid container spacing={2} m={3}>
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
              <QuickSort isStart={isStart} toggleSpeed={toggleSpeed} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiagramContainer;
