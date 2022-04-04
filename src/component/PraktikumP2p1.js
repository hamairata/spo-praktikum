import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import VideoPlayer from "../component/VideoPlayer";
import { Knob, Pointer, Value, Arc, Scale } from "rc-knob";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

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

const labelStyle = {
  display: "inline-block",
  float: "left",
  clear: "left",
  width: "250",
  alignItems: "right",
};

const inputStyle = {
  display: "inline-block",
  float: "left",
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

const PraktikumP2p1 = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState(0);
  const [mode, setMode] = useState(0);
  const [data, setData] = React.useState(() => {
    const stickyValue = window.localStorage.getItem("user");
    return stickyValue !== null ? JSON.parse(stickyValue) : {};
  });
  const classes = useStyles();
  const size = 300;

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

  const url =
    "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field1=360&field3=0&field4=0&field5=0&field6=0&field2=";

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputval = Setpoint.toString();
    const urlthingspeak = url.concat(inputval);
    try {
      axios.get(urlthingspeak);
    } catch (err) {
      console.log(err);
    }
    console.log(Setpoint);
  };

  const handleMode = async () => {
    try {
      if (mode === 0) {
        setMode(1);
        const urlget =
          "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field6=1";
        axios.get(urlget);
      } else {
        setMode(0);
        const urlget =
          "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field6=0";
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
          <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
              <Grid item xs={12} md={12}>
                <Box className={classes.wrapper}>
                  <Typography variant="h3">Setpoint</Typography>
                  <Knob
                    size={size}
                    angleOffset={220}
                    angleRange={280}
                    steps={10}
                    min={0}
                    max={10}
                    snap={true}
                    onChange={(value) => setSetpoint(Math.round(value) / 10)}
                  >
                    <Scale
                      steps={10}
                      tickWidth={1}
                      tickHeight={2}
                      radius={(size / 2) * 0.8}
                    />
                    <circle
                      r={size * 0.35}
                      cx={size * 0.5}
                      cy={size * 0.5}
                      fill="#3d3a30"
                    />
                    ,
                    <Pointer
                      width={2}
                      height={size * 0.35}
                      radius={10}
                      type="rect"
                      color="#3d3a30"
                    />
                  </Knob>
                  {Setpoint}
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

          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <VideoPlayer />
              <Box className={classes.component}>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
      )
    </>
  );
};

export default PraktikumP2p1;
