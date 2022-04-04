import * as React from "react";
import { Paper } from "@mui/material";
import sample from "../asset/modul/ModulP32022.pdf";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  hidden: { display: "none" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  buttonwrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  gridContainer: {
    justifyContent: "left",
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
  component: { paddingTop: 20 },
  button: { margin: "20px" },
}));

const PraktikumP3overview = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <object
          width="100%"
          height="1080"
          data={sample}
          type="application/pdf"
        />
      </Paper>
    </div>
  );
};

export default PraktikumP3overview;
