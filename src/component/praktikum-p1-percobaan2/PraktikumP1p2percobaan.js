import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";
import { Knob, Pointer, Scale } from "rc-knob";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import "../styles/praktikum.css";
import { CSVLink, CSVDownload } from "react-csv";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SpeedDial from "@mui/material/SpeedDial";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

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

const PraktikumP1p2percobaan = () => {
  const [value, setValue] = React.useState(0);
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState(150);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, settableData] = useState([]);
  const [sudut, setSudut] = useState();
  const [tegangan, setTegangan] = useState();
  const [mode, setMode] = useState(0);

  const classes = useStyles();
  const size = 300;

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

  const handleSubmitData = (e) => {
    e.preventDefault();
    const obj = createData(sudut, tegangan);
    const array = tableData.slice();
    array.push(obj);
    settableData(array);
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

  function createData(sudut, tegangan) {
    return { sudut, tegangan };
  }

  let rows = [];

  //sort((a, b) => (a.actual < b.misalignment ? -1 : 1));

  useEffect(() => {
    settableData(rows);
  }, []);

  let emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const steps = [
    {
      label:
        "Pastikan angka pada output potensiometer adalah 150, jika belum maka minta asisten untuk merubahnya",
      description: (
        <Grid item xs={12} md={12}>
          <Box className={classes.wrapper}>
            <Typography variant="h3">IP150H</Typography>
            <Knob
              size={size}
              angleOffset={220}
              angleRange={280}
              steps={10}
              min={150}
              max={360}
              snap={true}
              onChange={(value) => setSetpoint(Math.round(value / 10) * 10)}
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
              {/*   <label>
                    <input
                      type="number"
                      placeholder="value"
                      onChange={(e) => setSetpoint(e.target.value)}
                    />
               </label>*/}
              <div>
                <button type="submit" className={classes.button}>
                  Enter
                </button>
              </div>
            </form>
          </Box>
        </Grid>
      ),
    },
    {
      label: "Putar input potensiometer pada sudut 150 dan click tombol enter",
      description: (
        <Box>
          <Box className="container">
            <form onSubmit={handleSubmitData}>
              <label for="Setpoint">Sudut :&emsp;</label>
              <input
                type="number"
                onChange={(e) => setSudut(e.target.value)}
                min="0"
                max="360"
              />
              <br />
              <label for="Propotional">Tegangan (Error) :&emsp;</label>
              <input
                type="number"
                onChange={(e) => setTegangan(e.target.value)}
                step="0.000001"
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
                <tr>
                  <th>SUDUT</th>
                  <th>TEGANGAN (ERROR)</th>
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
                    <td>{row.sudut}</td>
                    <td style={{ width: 120 }} align="right">
                      {row.tegangan}
                    </td>
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
      label:
        "Perhatikan nilai tegangan yang terbaca pada multimeter, tuliskan pada lembar kerja ",
      description: "",
    },
    {
      label: "Ulangi langkah tersebut 1-4 untuk sudut 200, 250, 300, dan 350",
      description: "",
    },
    {
      label: "Download data lembar kerja",
      description: "",
    },
  ];

  const maxSteps = steps.length;

  const url =
    "https://api.thingspeak.com/update?api_key=KRBZ5PPPBY4F46WF&field2=0&field3=0&field4=0&field5=0&field1=";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
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
                    {steps[0].description}
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
    </>
  );
};

export default PraktikumP1p2percobaan;
