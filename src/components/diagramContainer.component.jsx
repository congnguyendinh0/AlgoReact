import React from "react";
//import Diagram from "./diagram.component";
import Grid from "@material-ui/core/Grid";

import BubbleSort from "./bubbleSort.component";
import P5WrapperContainer from "./p5wrapper/P5Wrapper.component";

const DiagramContainer = ({ isStart, toggleSpeed }) => {
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
              {/* <Diagram isStart={isStart} /> */}
              <P5WrapperContainer isStart={isStart} toggleSpeed={toggleSpeed} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DiagramContainer;
