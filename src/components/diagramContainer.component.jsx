import React from "react";
import Diagram from "./diagram.component";
//import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import QuickSort from "./quickSort.component";
import BubbleSort from "./bubbleSort.component";
import P5WrapperContainer from "./p5wrapper/P5Wrapper.component";

const DiagramContainer = ({ isStart }) => {
  return (
    <Grid container spacing={2} m={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <BubbleSort isStart={isStart} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              {/* <QuickSort isStart={isStart} /> */}
              {/* <Diagram isStart={isStart} /> */}
              <P5WrapperContainer isStart={isStart} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiagramContainer;
