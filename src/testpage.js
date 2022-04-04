import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import axios from "axios";
import { Box } from "@mui/system";
import { CSVLink, CSVDownload } from "react-csv";
import { makeStyles } from "@mui/styles";

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
    gap: 10px;

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

export default function BasicDatePicker() {
  const [urldownload, setUrldownload] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, settableData] = useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const [required, setRequied] = useState();
  const [actual, setActual] = useState();
  const [misalignment, setMisalignment] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const classes = useStyles();

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * RTCPeerConnection configuration
   */
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/download");
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const api = "http://localhost:5000/api/uploads/";
      const download = api + urldownload;
      const response = axios.get(download);
    } catch (err) {
      console.error(err.message);
    }
  };

  function createData(sudut, tegangan) {
    return { sudut, tegangan };
  }

  const rows = [
    createData(270, 305, 3.7),
    createData(330, 452, 25.0),
    createData(300, 262, 16.0),
  ];

  const handleSubmitData = (e) => {
    e.preventDefault();

    const obj = createData(required, actual, misalignment);
    const array = tableData.slice();
    array.push(obj);
    settableData(array);
    console.log(array);
  };

  const handleLog = () => {
    console.log(tableData);
    console.log("rows:", rows);
  };

  //sort((a, b) => (a.actual < b.misalignment ? -1 : 1));

  useEffect(() => {
    settableData(rows);
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <Box>
        <button onClick={handleLog}>log</button>
        <Box className="container">
          <form onSubmit={handleSubmitData}>
            <label for="Setpoint">Requied :&emsp;</label>
            <input
              type="number"
              onChange={(e) => setRequied(e.target.value)}
              min="0"
              max="360"
            />
            <br />
            <label for="Propotional">Actual :&emsp;</label>
            <input
              type="number"
              onChange={(e) => setActual(e.target.value)}
              min="0"
              max="360"
            />
            <br />
            <label for="Propotional">Misalignment :&emsp;</label>
            <input
              type="number"
              onChange={(e) => setMisalignment(e.target.value)}
              min="0"
              max="360"
            />
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
                <th colSpan={3} align="center">
                  Output Cursor Position in degrees
                </th>
              </tr>
              <tr>
                <th>Required</th>
                <th>Actual</th>
                <th>Misalignment</th>
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
                  <td style={{ width: "33%" }}>{row.required}</td>
                  <td style={{ width: "33%" }} align="right">
                    {row.actual}
                  </td>
                  <td style={{ width: "33%" }} align="right">
                    {row.misalignment}
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={rows.length}
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
          className="btn btn-primary"
          data={tableData}
          filename={"Lembar Kerja P1 - Percobaan 1.csv"}
        >
          Download Data
        </CSVLink>
      </Box>
      <div className="wrapper">
        <button onClick={handleDownload}>download</button>
        <form onSubmit={onSubmitForm}>
          <input type="text" onChange={(e) => setUrldownload(e.target.value)} />
          <button type="submit">submit download</button>
        </form>
        <form
          action="http://localhost:5000/api/uploadfile"
          encType="multipart/form-data"
          method="post"
        >
          <input type="file" className="form-control-file" name="file" />
          <input
            type="text"
            className="form-control"
            placeholder="Number of speakers"
            name="nspeakers"
          />
          <input
            type="submit"
            value="Get me the stats!"
            className="btn btn-default"
          />
        </form>
      </div>
    </>
  );
}
