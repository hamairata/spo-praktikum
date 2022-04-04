import React, { Fragment, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.header5,
  textAlign: "left",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Item, Status, Upload) {
  return { Item, Status, Upload };
}

const Pengumpulan = ({}) => {
  const [statusFile, setstatusFile] = useState([]);
  const [file, setFile] = useState(null);
  const [state, setState] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getFileStatus = async () => {
    try {
      const response = await fetch("http://localhost:5000/db/file");
      const jsonData = await response.json();

      setstatusFile(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFileStatus();
    setState(rows);
  }, []);
  const userString = sessionStorage.getItem("accessToken");
  const userToken = JSON.parse(userString);
  const getUser = Object.values(userToken);

  const updateStatus = async () => {
    try {
      const body = { status: "v" };
      const response = await fetch(
        `http://localhost:5000/db/file/${statusFile.file_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(body);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  function createData(Item, Status, Column) {
    return { Item, Status, Column };
  }

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/api/uploadfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("uploading");
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  const handleOnDownload = async (e) => {
    e.preventDefault();
    console.log(state);
    const link = document.createElement("a");
    link.target = "_blank";
    link.download =
      getUser[1].toString() + "-" + getUser[2].toString() + "- TP1";
    axios
      .get("http://localhost:5000/api/download", {
        responseType: "blob",
      })
      .then((res) => {
        link.href = URL.createObjectURL(
          new Blob([res.data], { type: "application/pdf" })
        );
        link.click();
      });
  };

  const rows = [
    createData("Tugas Pendahuluan P1", getUser[6].toString(), 6),
    createData("Laporan Resmi P1", getUser[15].toString(), 15),
    createData("Tugas Pendahuluan P2", getUser[7].toString(), 7),
    createData("Laporan Resmi P2", getUser[16].toString(), 16),
    createData("Tugas Pendahuluan P3", getUser[8].toString(), 8),
    createData("Laporan Resmi P3", getUser[17].toString(), 17),
  ];

  return (
    <Fragment>
      <Typography variant="h3" component="div" gutterBottom>
        Pengumpulan
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Item</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Upload</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((rows, i) => (
              <StyledTableRow key={rows.Item}>
                <StyledTableCell component="th" scope="row" align="center">
                  {rows.Item}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {rows.Status === "x" ? "✗" : "✓"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <form onSubmit={handleOnSubmit}>
                    <input
                      key={rows.file_id}
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit">Upload</button>
                  </form>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Pengumpulan;
