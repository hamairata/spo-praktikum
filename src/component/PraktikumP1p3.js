import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import { styled } from "@mui/system";
import PraktikumP1p3percobaan from "./praktikum-p1-percobaan3/PraktikumP1p3percobaan";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import "./styles/praktikum.css";
import { CSVLink, CSVDownload } from "react-csv";
import gambar from "../asset/img/rangkaianp1percobaan3.png";
import Setupalat from "./praktikum-p1-percobaan1/Setupalat";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
  button: { margin: "20px" },
}));

const PraktikumP1p3 = () => {
  const [Mydata, setMydata] = useState([]);
  const [Setpoint, setSetpoint] = useState(150);

  const [activeStep, setActiveStep] = React.useState(0);

  const theme = useTheme();
  const classes = useStyles();
  const size = 300;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "Deskripsi",
      description: (
        <>
          <Typography variant="h5" align="center">
            Deskripsi
          </Typography>
          <Typography sx={{ ml: 3, mr: 3, mt: 3 }}>
            Pada percobaan ini dilakukan pengendalian posisi (sudut) pada motor
            dengan skema close loop.
          </Typography>
          <Card>
            <CardMedia component="img" src={gambar} />
          </Card>
        </>
      ),
    },
    {
      label: "Langkah Percobaan",
      description: <PraktikumP1p3percobaan />,
    },
  ];

  const maxSteps = steps.length;

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={4} lg={12}>
            <Paper variant="h3" className={classes.paper} align="center">
              <Typography variant="h3">UJI CLOSE LOOP</Typography>
            </Paper>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
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
                  onClick={handleBack}
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
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Box>
              <Paper className={classes.paper}>
                {steps[activeStep].description}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PraktikumP1p3;
