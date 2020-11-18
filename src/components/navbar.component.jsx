import React, { useState, useReducer } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import clsx from "clsx";
import DiagramContainer from "./diagramContainer.component";

// useReducer to handle state logic

const styles = {
  myroot: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    marginLeft: "50px",
    marginRight: "50px",
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
  const { classes, className } = props; // for material UI
  const [start, setStart] = useState(false);
  const [toggleSpeed, setToggleSpeed] = useState(false);
  const [array, setArray] = useState([]);
  const [isdisabled, setIsdisabled] = useState(false);

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

  setTimeout(() => {
    if (isdisabled) {
      setIsdisabled(false);
    }
  }, 5000); // temp solution to prevent constant clicking -- need to refactor the code

  return (
    <>
      <div style={{ marginBottom: "25px" }}>
        <Box p={2} bgcolor="text.secondary">
          <Button
            mt={2}
            disabled={isdisabled}
            variant="contained"
            color="primary"
            onClick={() => {
              setStart((start) => !start);
              setIsdisabled(true);
            }}
          >
            Start Sort
          </Button>
          <Button
            className={clsx(classes.myroot, className)}
            onClick={() => setToggleSpeed((toggleSpeed) => !toggleSpeed)}
          >
            Speed Toggle
          </Button>

          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              randomizedArr();
              setStart(false);
            }}
          >
            Random Array
          </Button>
        </Box>
      </div>

      <DiagramContainer
        isStart={start}
        toggleSpeed={toggleSpeed}
        array={array}
      />
    </>
  );
};

export default withStyles(styles)(Navbar);
