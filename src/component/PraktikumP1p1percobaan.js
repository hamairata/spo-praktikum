import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import VideoPlayer from "../component/VideoPlayer";
import { Knob, Pointer, Value, Arc, Scale } from "rc-knob";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import { styled } from "@mui/system";
import { CSVLink, CSVDownload } from "react-csv";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SpeedDial from "@mui/material/SpeedDial";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Knobp1p2 from "./praktikum-p1-percobaan2/Knobp1p2";

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

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: center;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);

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

const PraktikumP1p1percobaan = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState(0);
  const [atesetpoint, setAteSetpoint] = useState(0);
  const [target, setTarget] = useState();
  const [hasil, setHasil] = useState();
  const [selisih, setSelisih] = useState();
  const [tableData, settableData] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = React.useState(0);
  const [mode, setMode] = useState(0);

  const theme = useTheme();
  const classes = useStyles();
  const size = 300;
  let rows = [];

  let emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const url =
    "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field1=360&field3=0&field4=0&field5=0&field6=0&field2=";

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputval = atesetpoint.toString();
    const urlthingspeak = url.concat(inputval);
    try {
      axios.get(urlthingspeak);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const obj = createData(target, hasil, selisih);
    const array = tableData.slice();
    array.push(obj);
    settableData(array);
    console.log(array);
  };

  function createData(target, hasil, selisih) {
    return { target, hasil, selisih };
  }

  const steps = [
    {
      label: (
        <Typography>
          Putar nilai attenuator menuju nilai lebih besar dari 0 dan click enter
        </Typography>
      ),
      description: (
        <Grid item xs={12} md={12}>
          <Knobp1p2 />
        </Grid>
      ),
    },
    {
      label: (
        <div>
          <Typography>
            Ketika posisi motor sudah mendekati sudut 150, putar attenuator
            menuju 0, dan click enter
          </Typography>
          <Typography>
            (Jika motor bergerak terlalu cepat maka ulangi langkah 1 dengan
            nilai yang lebih kecil)
          </Typography>
        </div>
      ),
      description: (
        <Box>
          <Box className="container">
            <form onSubmit={handleSubmitData}>
              <label for="Setpoint">Target :&emsp;</label>
              <input
                type="number"
                onChange={(e) => setTarget(e.target.value)}
                min="0"
                max="360"
              />
              <br />
              <label for="Propotional">Hasil :&emsp;</label>
              <input
                type="number"
                onChange={(e) => setHasil(e.target.value)}
                min="0"
                max="360"
              />
              <br />
              <label for="Propotional">Selisih :&emsp;</label>
              <input
                type="number"
                onChange={(e) => setSelisih(e.target.value)}
                min="0"
                max="360"
              />
              <br />
              <div>
                <button type="submit" className={classes.button}>
                  Enter
                </button>
              </div>
            </form>
          </Box>
          <Root sx={{ width: 500, maxWidth: "100%" }}>
            <table aria-label="custom pagination table">
              <thead>
                <th colSpan={3} align="center">
                  POSISI SUDUT
                </th>
                <tr>
                  <th>TARGET</th>
                  <th>HASIL</th>
                  <th>SELISIH</th>
                </tr>
              </thead>
              <tbody>
                {(rowsPerPage > 0
                  ? tableData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : tableData
                ).map((row, key) => (
                  <tr key={key}>
                    <td>{row.target}</td>
                    <td align="right">{row.hasil}</td>
                    <td align="right">{row.selisih}</td>
                  </tr>
                ))}

                {emptyRows > 0 && (
                  <tr style={{ height: 41 * emptyRows }}>
                    <td colSpan={3} />
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <CustomTablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    componentsProps={{
                      select: {
                        "aria-label": "rows per page",
                      },
                      actions: {
                        showFirstButton: true,
                        showLastButton: true,
                      },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </tr>
              </tfoot>
            </table>
          </Root>
          <CSVLink
            className="container"
            data={tableData}
            filename={"Lembar Kerja P1 - Percobaan 1.csv"}
          >
            Download Data
          </CSVLink>
        </Box>
      ),
    },
    {
      label: (
        <Typography>
          Catat hasil bacaan output potentiometer pada lembar kerja
        </Typography>
      ),
      description: "",
    },
    {
      label: (
        <Typography>
          Ulangi langkah 1-3 dengan sudut 200, 250, 300, dan 350
        </Typography>
      ),
      description: "",
    },
    {
      label: <Typography>Download hasil lembar kerja</Typography>,
      description: "",
    },
  ];

  const maxSteps = steps.length;

  useEffect(() => {
    settableData(rows);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={4} lg={12}>
          <Paper className={classes.paper}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={() => {
                    handleNext();
                  }}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={() => {
                    handleBack();
                  }}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            <Typography align="center">{steps[activeStep].label}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={12} md={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              <Paper className={classes.paper}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                  >
                    <Tab label="Input" {...a11yProps(0)} />
                    <Tab label="Lembar Kerja" {...a11yProps(1)} />
                  </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                  <Knobp1p2 />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {steps[1].description}
                </TabPanel>
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <VideoPlayer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default PraktikumP1p1percobaan;
