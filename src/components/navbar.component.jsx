import React, { useState, useReducer } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
//import { spacing, palette } from "@material-ui/system";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

import DiagramContainer from "./diagramContainer.component";

// useReducer to handle state logic

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    marginLeft: "50px",
    color: "white",
    height: 40,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

    "&:hover": {
      color: "black",
    },
  },
};

const Navbar = (props) => {
  const { classes, className } = props;
  const [start, setStart] = useState(false);

  return (
    <>
      <div style={{ marginBottom: "25px" }}>
        <Box p={2} bgcolor="text.secondary">
          <Button
            m={2}
            variant="contained"
            color="primary"
            onClick={() => setStart((start) => !start)}
          >
            Generate
          </Button>
          <Button
            className={clsx(classes.root, className)}
            onClick={() => setStart((start) => !start)}
          >
            Sort
          </Button>
        </Box>
      </div>

      <DiagramContainer isStart={start} />
    </>
  );
};

export default withStyles(styles)(Navbar);
