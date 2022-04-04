import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpeedDial from "@mui/material/SpeedDial";
import { styled } from "@mui/material/styles";
import { Link, Memory } from "react-router-dom";
import PraktikumP1p1 from "../component/PraktikumP1p1";
import PraktikumP1p2 from "../component/PraktikumP1p2";
import PraktikumP1p3 from "../component/PraktikumP1p3";
import PraktikumP1overview from "../component/PraktikumP1overview";
import PraktikumP3overview from "../component/PraktikumP3overview";
import PraktikumP3p1 from "../component/PraktikumP3p1";
import PraktikumP2overview from "../component/PraktikumP2overview";
import PraktikumP2p1 from "../component/PraktikumP2p1";
import PraktikumP2p2 from "../component/PraktikumP2p2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(5),
    left: theme.spacing(0),
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [subvalue, setSubvalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubchange = (event, newSubvalue) => {
    setSubvalue(newSubvalue);
  };

  const withLink = (to, children) => <Link to={to}>{children}</Link>;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Praktikum P1" {...a11yProps(0)} />
          <Tab disabled label="Praktikum P2" {...a11yProps(1)} />
          <Tab disabled label="Praktikum P3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={subvalue}
              onChange={handleSubchange}
              aria-label="basic tabs example"
            >
              <Tab label="Modul" {...a11yProps(0)} />
              <Tab label="Percobaan 1" {...a11yProps(1)} />

              <Tab label="Percobaan 2" {...a11yProps(2)} />
              <Tab label="Percobaan 3" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={subvalue} index={0}>
            <PraktikumP1overview />
          </TabPanel>
          <TabPanel value={subvalue} index={1}>
            <PraktikumP1p1 />
          </TabPanel>
          <TabPanel value={subvalue} index={2}>
            <PraktikumP1p2 />
          </TabPanel>
          <TabPanel value={subvalue} index={3}>
            <PraktikumP1p3 />
          </TabPanel>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={subvalue}
              onChange={handleSubchange}
              aria-label="basic tabs example"
            >
              <Tab label="Modul" {...a11yProps(0)} />
              <Tab label="Percobaan 1" {...a11yProps(1)} />
              <Tab label="Percobaan 2, 3, 4" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={subvalue} index={0}>
            <PraktikumP2overview />
          </TabPanel>
          <TabPanel value={subvalue} index={1}>
            <PraktikumP2p1 />
          </TabPanel>
          <TabPanel value={subvalue} index={2}>
            <PraktikumP2p2 />
          </TabPanel>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={subvalue}
              onChange={handleSubchange}
              aria-label="basic tabs example"
            >
              <Tab label="Modul" {...a11yProps(0)} />
              <Tab label="Percobaan 1" {...a11yProps(1)} />
              <Tab label="Percobaan 2" {...a11yProps(2)} />
              <Tab label="Percobaan 3" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={subvalue} index={0}>
            <PraktikumP3overview />
          </TabPanel>
          <TabPanel value={subvalue} index={1}>
            <PraktikumP3p1 />
          </TabPanel>
          <TabPanel value={subvalue} index={2}></TabPanel>
          <TabPanel value={subvalue} index={3}></TabPanel>
        </Box>
      </TabPanel>
    </Box>
  );
}
