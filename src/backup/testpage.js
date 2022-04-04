import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TextField, Typography } from "@mui/material";
import { AppBar } from "@material-ui/core";
import axios from "axios";
import { Donut } from "react-dial-knob";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Videosidebar from "./component/Videosidebar";
import { makeStyles } from "@material-ui/core/styles";
import Notifications from "./component/Notification";
import VideoPlayer from "./component/VideoPlayer";
import { ContextProvider } from "./Context";

require("highcharts/modules/boost")(Highcharts);
require("react-dom");
window.React2 = require("react");

const Testpage = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState();
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
    "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field2=";

  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

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

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ContextProvider>
        <div className="classes.wrapper">
          <VideoPlayer />
          <Videosidebar>
            <Notifications />
          </Videosidebar>
        </div>
      </ContextProvider>
      {devices.map((device, key) => (
        <div>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {device.deviceId}
        </div>
      ))}
      <HighchartsReact highcharts={Highcharts} options={options} />
      <p>Value</p>
      <Donut
        diameter={150}
        min={150}
        max={360}
        step={10}
        value={Setpoint}
        theme={{
          donutColor: "gray",
        }}
        onValueChange={setSetpoint}
      ></Donut>
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
    </>
  );
};
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
export default Testpage;
