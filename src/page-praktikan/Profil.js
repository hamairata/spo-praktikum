import React, { Fragment, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import dayjs from "dayjs";
import "dayjs/locale/id";
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function Profil() {
  ///  const user = getUser();
  // handle click event of logout button
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [NRP, setNRP] = useState();
  const [role, setRole] = useState();
  const [data, setData] = React.useState(() => {
    const stickyValue = window.localStorage.getItem("user");
    return stickyValue !== null ? JSON.parse(stickyValue) : {};
  });
  const [daftar, setDaftar] = React.useState({});
  const [jadwal, setJadwal] = React.useState({});

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

  //const url = "http://localhost:5000/api/db/getasistenkelompok";
  //const urlgetjadwal = "http://localhost:5000/api/db/j4dwal";

  const url = "https://ui-spo-backend.herokuapp.com/api/db/getasistenkelompok";
  const urlgetjadwal = "https://ui-spo-backend.herokuapp.com/api/db/j4dwal";

  useEffect(() => {
    setDaftar(() => {
      // getting stored value
      const saved = localStorage.getItem("asisten");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    });
    setJadwal(() => {
      // getting stored value
      const saved = localStorage.getItem("jadwal");
      var initialValue = JSON.parse(saved);
      if (initialValue.jadwal != null) {
        var jadwal = dayjs
          .utc(initialValue.jadwal)
          .locale("id")
          .format("dddd, DD MMMM YYYY [-] HH:mm [WIB]");
        //var jadwal = initialValue.jadwal.split(/[TZ]+/);
        initialValue.jadwal = jadwal;
        return initialValue || "TBD";
      } else {
        initialValue.jadwal = "Harap Hubungi Asisten & Tentukan Jadwal";
        return initialValue || "TBD";
      }
    });
  }, []);

  const userString = sessionStorage.getItem("accessToken");
  const userToken = JSON.parse(userString);
  const getUser = Object.values(userToken);

  function createData(Item, P1, P2, P3) {
    return { Item, P1, P2, P3 };
  }

  const rows = [
    createData(
      "Tugas Pendahuluan",
      getUser[6].toString(),
      getUser[7].toString(),
      getUser[8].toString()
    ),
    createData(
      "Praktikum",
      getUser[9].toString(),
      getUser[10].toString(),
      getUser[11].toString()
    ),
    createData(
      "Asistensi",
      getUser[12].toString(),
      getUser[13].toString(),
      getUser[14].toString()
    ),
    createData(
      "Laporan Resmi",
      getUser[15].toString(),
      getUser[16].toString(),
      getUser[17].toString()
    ),
  ];

  return (
    <div>
      {data.userrole === "Praktikan" ? (
        <Grid container spacing={8} column={12}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h5">{getUser[1].toString()}</Typography>
                <Typography variant="h6">{getUser[2].toString()}</Typography>
                <Typography variant="overline">
                  {getUser[3].toString()}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h4">Praktikum P-1</Typography>
                <Typography variant="h5">{getUser[18].toString()}</Typography>
                <Typography variant="h6"></Typography>
                <Grid item xs>
                  <Stack spacing={0}>
                    <Item>Jadwal : {jadwal.jadwal}</Item>
                    <Item>Asisten : {daftar.nama}</Item>
                    <Item>Kontak : {daftar.line}(line)</Item>
                  </Stack>
                </Grid>
                <Typography variant="h5"></Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">Progress Praktikum</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Item</StyledTableCell>
                    <StyledTableCell align="center">P1</StyledTableCell>
                    <StyledTableCell align="center">P2</StyledTableCell>
                    <StyledTableCell align="center">P3</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((rows) => (
                    <StyledTableRow key={rows.Item}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {rows.Item}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P1 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P2 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P3 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : data.userrole === "Asisten" ? (
        <Grid container spacing={8} column={12}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h5">{getUser[1].toString()}</Typography>
                <Typography variant="h6">{getUser[2].toString()}</Typography>
                <Typography variant="overline">
                  {getUser[3].toString()}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h4">Praktikum P-1</Typography>
                <Typography variant="h5">{getUser[18].toString()}</Typography>
                <Typography variant="h6"></Typography>
                <Grid item xs>
                  <Stack spacing={0}>
                    <Item>Jadwal : {jadwal.jadwal}</Item>
                  </Stack>
                </Grid>
                <Typography variant="h5"></Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">Progress Praktikum</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Item</StyledTableCell>
                    <StyledTableCell align="center">P1</StyledTableCell>
                    <StyledTableCell align="center">P2</StyledTableCell>
                    <StyledTableCell align="center">P3</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((rows) => (
                    <StyledTableRow key={rows.Item}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {rows.Item}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P1 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P2 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P3 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={8} column={12}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h5">{getUser[1].toString()}</Typography>
                <Typography variant="h6">{getUser[2].toString()}</Typography>
                <Typography variant="overline">
                  {getUser[3].toString()}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ margin: 2 }}>
                <Typography variant="h4">Praktikum P-</Typography>
                <Typography variant="h5">{getUser[18].toString()}</Typography>
                <Typography variant="h6"></Typography>
                <Grid item xs>
                  <Stack spacing={0}>
                    <Item>Jadwal : Koordinator</Item>
                  </Stack>
                </Grid>
                <Typography variant="h5"></Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">Progress Praktikum</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Item</StyledTableCell>
                    <StyledTableCell align="center">P1</StyledTableCell>
                    <StyledTableCell align="center">P2</StyledTableCell>
                    <StyledTableCell align="center">P3</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((rows) => (
                    <StyledTableRow key={rows.Item}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {rows.Item}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P1 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P2 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {rows.P3 === "x" ? "✗" : "✓"}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
