import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { Donut } from "react-dial-knob";
import Videosidebar from "../component/Videosidebar";
import Notifications from "../component/Notifications";
import VideoPlayer from "../component/VideoPlayer";
import { ContextProvider } from "../Context";
import { styled } from "@mui/system";
import { Knob, Pointer, Value, Arc, Scale } from "rc-knob";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

require("highcharts/modules/boost")(Highcharts);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const PraktikumContent = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState();

  const classes = useStyles();

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
    "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field1=";

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

  const objArray = Mydata;
  let values = objArray.map((a) => a.x);

  const options = {
    boost: { enabled: true },
    title: {
      text: "My chart",
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
          <Box>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              steps={0.1}
              min={0}
              max={2}
              onChange={(value) => setSetpoint(value)}
            >
              <Scale tickWidth={1} tickHeight={2} radius={45} />
              <circle r="35" cx="50" cy="50" fill="#3d3a30" />,
              <Pointer
                width={2}
                height={35}
                radius={10}
                type="rect"
                color="#3d3a30"
              />
              <Value decimalPlace={1} />
            </Knob>

            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="number"
                  placeholder="value"
                  onChange={(e) => setSetpoint(e.target.value)}
                />
              </label>
              <div>
                <button type="submit" className="submitButton">
                  Enter
                </button>
              </div>
            </form>
            <p>Value</p>
          </Box>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
      </div>
    </>
  );
};

export default PraktikumContent;
