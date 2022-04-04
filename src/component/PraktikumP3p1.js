import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import VideoPlayer from "../component/VideoPlayer";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

import "./styles/praktikum.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  text: {},
  label: {
    display: "inline-block",
    float: "left",
    clear: "left",
    width: "250px",
    alignItems: "right",
  },
  input: {
    display: "inline - block",
    float: "left",
  },
  wrapper: {
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
  button: { marginTop: "20px" },
}));

const styles = {
  border: "1px solid rgba(0, 0, 0, 1)",
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  alignItems: "center",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PraktikumP3p1 = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState(0);
  const [valve, setValve] = useState(0);

  const [propotional, setPropotional] = useState(0);
  const [integral, setIntegral] = useState(0);
  const [derivative, setDerivative] = useState(0);
  const [pompa, setPompa] = useState(0);
  const [mode, setMode] = useState(0);
  const classes = useStyles();
  const size = 150;

  const getData = () => {
    fetch(
      "test.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);
        setMydata(myJson);
      });
  };

  const urlThingspeak =
    "https://api.thingspeak.com/update?api_key=21EM4BAUIS3K3BHX";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const field1 = "&field1=";
    const field2 = "&field2=";
    const field3 = "&field3=";
    const field4 = "&field4=";
    const field5 = "&field5=";
    const inputSet = Setpoint.toString();
    const urlthingspeak1 = field1.concat(inputSet);
    const inputSet2 = valve.toString();
    const urlthingspeak2 = field2.concat(inputSet2);
    const inputSet3 = propotional.toString();
    const urlthingspeak3 = field3.concat(inputSet3);
    const inputSet4 = integral.toString();
    const urlthingspeak4 = field4.concat(inputSet4);
    const inputSet5 = derivative.toString();
    const urlthingspeak5 = field5.concat(inputSet5);

    const urlget = urlThingspeak.concat(urlthingspeak1);
    const urlget1 = urlget.concat(urlthingspeak2);
    const urlget2 = urlget1.concat(urlthingspeak3);
    const urlget3 = urlget2.concat(urlthingspeak4);
    const urlget4 = urlget3.concat(urlthingspeak5);
    console.log(urlget4);

    try {
      axios.get(urlget4);
    } catch (err) {
      console.log(err);
    }
    console.log(Setpoint);
  };

  const handlePompa = async () => {
    try {
      if (pompa === 0) {
        setPompa(1);
        const urlget =
          "https://api.thingspeak.com/update?api_key=21EM4BAUIS3K3BHX&field6=1";
        axios.get(urlget);
      } else {
        setPompa(0);
        const urlget =
          "https://api.thingspeak.com/update?api_key=21EM4BAUIS3K3BHX&field6=0";
        axios.get(urlget);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMode = async () => {
    try {
      if (mode === 0) {
        setMode(1);
        const urlget =
          "https://api.thingspeak.com/update?api_key=21EM4BAUIS3K3BHX&field7=1";
        axios.get(urlget);
      } else {
        setMode(0);
        const urlget =
          "https://api.thingspeak.com/update?api_key=21EM4BAUIS3K3BHX&field7=0";
        axios.get(urlget);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const objArray = Mydata;
  let values = objArray.map((a) => a.x);

  const options = {
    boost: { enabled: true },
    title: {
      text: "PRAKTIKUM SPO",
    },
    series: [
      {
        data: values,
      },
    ],
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs sm md lg>
            <Paper className={classes.paper}>
              <Grid item xs={12} sm md lg>
                <Box className="container">
                  <Typography variant="h4" align={"center"}>
                    Input
                  </Typography>
                  <FormGroup>
                    <Grid container alignItems="center">
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography align="center">Mode</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography>Manual</Typography>
                          <AntSwitch
                            onChange={handleMode}
                            label="Mode"
                            labelPlacement="top"
                            defaultChecked={false}
                          />
                          <Typography>Auto</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs sm md lg>
                        <Typography align="center">Pompa Panas</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography>Off</Typography>
                          <AntSwitch
                            onChange={handlePompa}
                            label="Pompa Panas"
                            labelPlacement="top"
                            defaultChecked={false}
                          />
                          <Typography>On</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </FormGroup>
                  <label for="Setpoint">Setpoint Temperatur :&emsp;</label>
                  <input
                    type="number"
                    id="Setpoint"
                    placeholder="0°C-100°C"
                    onChange={(e) => setSetpoint(e.target.value)}
                    min="0"
                    max="100"
                  />
                  <br />
                  <label for="Propotional">MV Valve Manual :&emsp;</label>
                  <input
                    type="number"
                    id="Setpoint"
                    placeholder="0%-100%"
                    onChange={(e) => setValve(e.target.value)}
                    min="0"
                    max="100"
                  />
                  <br />
                  <label for="Propotional">Kp :&emsp;</label>
                  <input
                    type="number"
                    id="Setpoint"
                    onChange={(e) => setPropotional(e.target.value)}
                    placeholder="0-100"
                    min="0"
                    max="100"
                    step="0.0001"
                  />
                  <br />
                  <label for="Integral">Ti :&emsp;</label>
                  <input
                    type="number"
                    id="Setpoint"
                    onChange={(e) => setIntegral(e.target.value)}
                    placeholder="0-100"
                    min="0"
                    max="100"
                    step="0.0001"
                  />
                  <br />
                  <label for="Derivative">Td :&emsp;</label>
                  <input
                    type="number"
                    id="Setpoint"
                    placeholder="0-100"
                    onChange={(e) => setDerivative(e.target.value)}
                    min="0"
                    max="100"
                    step="0.0001"
                  />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <button type="submit" className={classes.button}>
                        Enter
                      </button>
                    </div>
                  </form>
                </Box>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Paper className={classes.paper}>
              <VideoPlayer />
              <Box className={classes.component}>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PraktikumP3p1;
