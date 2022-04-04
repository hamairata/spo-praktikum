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
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Validasi = () => {
  const [daftar, setDaftar] = useState([]);
  const [tabvalue, setTabValue] = React.useState(0);
  const [subtabvalue, setSubtabvalue] = React.useState(0);
  const [kelompok, setKelompok] = React.useState([]);
  const [pass, setPass] = React.useState("");
  const [value, setValue] = React.useState(null);
  const [asisten, setAsisten] = React.useState([]);
  const [praktikan, setPraktikan] = React.useState([]);
  const [asistendb, setAsistendb] = React.useState([]);
  const [jadwal, setJadwal] = React.useState([]);
  const [sqljadwal, setSqljadwal] = useState();

  const handleChange = (event) => {
    setKelompok(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubchange = (event, newSubvalue) => {
    setSubtabvalue(newSubvalue);
  };

  const handleChangeJadwal = (newValue) => {
    setValue(newValue);
  };
  /*
  const url = "http://localhost:5000/api/signup/dump/praktikan/";
  const url1 = "http://localhost:5000/api/signup/pr4ktikan";
  const url2 = "http://localhost:5000/api/signup/4sisten";

  const urlgetasisten = "http://localhost:5000/api/signup/dump/asisten";
  const urlgetpraktikan = "http://localhost:5000/api/db/getpraktikan";
  const urlgetasistendb = "http://localhost:5000/api/db/getasisten";
  const urlgetjadwal = "http://localhost:5000/api/db/jadwal";
*/
  const url = "https://ui-spo-backend.herokuapp.com/api/signup/dump/praktikan/";
  const url1 = "https://ui-spo-backend.herokuapp.com/api/signup/pr4ktikan";
  const url2 = "https://ui-spo-backend.herokuapp.com/api/signup/4sisten";

  const urlgetasisten =
    "https://ui-spo-backend.herokuapp.com/api/signup/dump/asisten";
  const urlgetpraktikan =
    "https://ui-spo-backend.herokuapp.com/api/db/getpraktikan";
  const urlgetasistendb =
    "https://ui-spo-backend.herokuapp.com/api/db/getasisten";
  const urlgetjadwal = "https://ui-spo-backend.herokuapp.com/api/db/jadwal";

  const getFileStatus = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      setDaftar(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAsisten = async () => {
    try {
      const response = await fetch(urlgetasisten);
      const jsonData = await response.json();

      setAsisten(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPraktikan = async () => {
    try {
      const response = await fetch(urlgetpraktikan);
      const jsonData = await response.json();

      setPraktikan(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAsistendb = async () => {
    try {
      const response = await fetch(urlgetasistendb);
      const jsonData = await response.json();

      setAsistendb(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getJadwal = async () => {
    try {
      const response = await fetch(urlgetjadwal);
      const jsonData = await response.json();

      setJadwal(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const postJadwal = async () => {
    try {
      const response = await axios.post(urlgetjadwal, { sqljadwal, kelompok });
      getJadwal();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async () => {
    let nama = pass.nama;
    let username = pass.username;
    let userpassword = pass.userpassword;
    let nrp = pass.nrp;
    let email = pass.email;
    const userrole = "Praktikan";
    let kelompok = pass.kelompok;
    try {
      const res = await axios.post(url1, {
        username,
        userpassword,
        nama,
        nrp,
        email,
        userrole,
        kelompok,
      });
      getFileStatus();
      getAsisten();
      getPraktikan();
      getAsistendb();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitAsisten = async () => {
    let nama = pass.nama;
    let username = pass.username;
    let userpassword = pass.userpassword;
    let nrp = pass.nrp;
    let email = pass.email;
    const userrole = "Asisten";
    let kelompok = pass.kelompok;
    try {
      const res = await axios.post(url2, {
        username,
        userpassword,
        nama,
        nrp,
        email,
        userrole,
        kelompok,
      });
      getFileStatus();
      getAsisten();
      getPraktikan();
      getAsistendb();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFileStatus();
    getAsisten();
    getPraktikan();
    getAsistendb();
    getJadwal();
  }, []);

  const handleCross = async (id) => {
    try {
      const deleteuser = await axios.delete(url + id);
      getFileStatus();
      getAsisten();
      getPraktikan();
      getAsistendb();
    } catch (err) {
      console.error(err.message);
    }
  };

  let tempPass = {};

  const handleCheck = async (rows) => {
    tempPass[rows.user_id] = rows;
    rows.kelompok = kelompok;
    console.log(rows);
    let nama = rows.nama;
    let username = rows.username;
    let userpassword = rows.userpassword;
    let nrp = rows.nrp;
    let email = rows.email;
    const userrole = "Praktikan";
    let kelompoka = rows.kelompok;
    try {
      const res = await axios.post(url1, {
        username,
        userpassword,
        nama,
        nrp,
        email,
        userrole,
        kelompoka,
      });

      getFileStatus();
      getAsisten();
      getPraktikan();
      getAsistendb();
    } catch (err) {}
  };

  const handleCheckAsisten = async (rows) => {
    tempPass[rows.user_id] = rows;
    rows.kelompok = kelompok;
    console.log(rows);
    let nama = rows.nama;
    let username = rows.username;
    let userpassword = rows.userpassword;
    let nrp = rows.nrp;
    let email = rows.email;
    const userrole = "Asisten";
    let kelompoka = rows.kelompok;
    let kelompoka2 = rows.kelompok2;
    try {
      const res = await axios.post(url2, {
        username,
        userpassword,
        nama,
        nrp,
        email,
        userrole,
        kelompoka,
        kelompoka2,
      });

      getFileStatus();
      getAsisten();
      getPraktikan();
      getAsistendb();
    } catch (err) {}
  };

  const handleRefresh = () => {
    getFileStatus();
    getAsisten();
    getPraktikan();
    getAsistendb();
    getJadwal();
  };

  return (
    <Fragment>
      <Typography variant="h3" component="div" gutterBottom>
        Daftar Mahasiswa & Validasi
      </Typography>
      <Button onClick={handleRefresh}>Refresh</Button>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabvalue}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            <Tab label="Validasi" {...a11yProps(0)} />
            <Tab label="Praktikan" {...a11yProps(1)} />
            <Tab label="Asisten" {...a11yProps(2)} />
            <Tab label="Jadwal" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={tabvalue} index={0}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={subtabvalue}
                onChange={handleSubchange}
                aria-label="basic tabs example"
              >
                <Tab label="Calon Praktikan" {...a11yProps(0)} />
                <Tab label="Asisten" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={subtabvalue} index={0}>
              <Button onClick={handleSubmit}>Submit</Button>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Nama</StyledTableCell>
                      <StyledTableCell align="center">NRP</StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">FRS</StyledTableCell>
                      <StyledTableCell align="center">Kelompok</StyledTableCell>
                      <StyledTableCell align="center">Validasi</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {daftar.map((rows) => (
                      <StyledTableRow key={rows.user_id}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {rows.nama}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.nrp}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          File FRS
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <div key={rows.user_id}>
                            <FormControl fullWidth key={rows.user_id}>
                              <Select
                                value={rows.kelompok ? rows.kelompok : kelompok}
                                label="Kelompok"
                                onChange={handleChange}
                              >
                                <MenuItem value={"Kelompok 1"}>
                                  Kelompok 1
                                </MenuItem>
                                <MenuItem value={"Kelompok 2"}>
                                  Kelompok 2
                                </MenuItem>
                                <MenuItem value={"Kelompok 3"}>
                                  Kelompok 3
                                </MenuItem>
                                <MenuItem value={"Kelompok 4"}>
                                  Kelompok 4
                                </MenuItem>
                                <MenuItem value={"Kelompok 5"}>
                                  Kelompok 5
                                </MenuItem>
                                <MenuItem value={"Kelompok 6"}>
                                  Kelompok 6
                                </MenuItem>
                                <MenuItem value={"Kelompok 7"}>
                                  Kelompok 7
                                </MenuItem>
                                <MenuItem value={"Kelompok 8"}>
                                  Kelompok 8
                                </MenuItem>
                                <MenuItem value={"Kelompok 9"}>
                                  Kelompok 9
                                </MenuItem>
                                <MenuItem value={"Kelompok 10"}>
                                  Kelompok 10
                                </MenuItem>
                                <MenuItem value={"Kelompok 11"}>
                                  Kelompok 11
                                </MenuItem>
                                <MenuItem value={"Kelompok 12"}>
                                  Kelompok 12
                                </MenuItem>
                                <MenuItem value={"Kelompok 13"}>
                                  Kelompok 13
                                </MenuItem>
                                <MenuItem value={"Kelompok 14"}>
                                  Kelompok 14
                                </MenuItem>
                                <MenuItem value={"Kelompok 15"}>
                                  Kelompok 15
                                </MenuItem>
                                <MenuItem value={"Kelompok 16"}>
                                  Kelompok 16
                                </MenuItem>
                                <MenuItem value={"Kelompok 17"}>
                                  Kelompok 17
                                </MenuItem>
                                <MenuItem value={"Kelompok 18"}>
                                  Kelompok 18
                                </MenuItem>
                                <MenuItem value={"Kelompok 19"}>
                                  Kelompok 19
                                </MenuItem>
                                <MenuItem value={"Kelompok 20"}>
                                  Kelompok 20
                                </MenuItem>
                                <MenuItem value={"Kelompok 21"}>
                                  Kelompok 21
                                </MenuItem>
                                <MenuItem value={"Kelompok 22"}>
                                  Kelompok 22
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Stack direction="row">
                            <IconButton
                              type="button"
                              onClick={() => handleCheck(rows)}
                            >
                              <CheckIcon aria-label="check" color="success" />
                            </IconButton>
                            <IconButton
                              onClick={() => handleCross(rows.user_id)}
                            >
                              <ClearIcon aria-label="cleaer" color="warning" />
                            </IconButton>
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={subtabvalue} index={1}>
              <Button onClick={handleSubmitAsisten}>Submit Asisten</Button>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Nama</StyledTableCell>
                      <StyledTableCell align="center">NRP</StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">
                        Kontak WhatsApp
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Kontak Line
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Kelompok 1
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Kelompok 2
                      </StyledTableCell>
                      <StyledTableCell align="center">Validasi</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {asisten.map((rows) => (
                      <StyledTableRow key={rows.user_id}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {rows.nama}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.nrp}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.kontak_wa}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {rows.kontak_line}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <div key={rows.user_id}>
                            <FormControl fullWidth key={rows.user_id}>
                              <Select
                                value={rows.kelompok ? rows.kelompok : kelompok}
                                label="Kelompok 1"
                                onChange={handleChange}
                              >
                                <MenuItem value={"Kelompok 1"}>
                                  Kelompok 1
                                </MenuItem>
                                <MenuItem value={"Kelompok 2"}>
                                  Kelompok 2
                                </MenuItem>
                                <MenuItem value={"Kelompok 3"}>
                                  Kelompok 3
                                </MenuItem>
                                <MenuItem value={"Kelompok 4"}>
                                  Kelompok 4
                                </MenuItem>
                                <MenuItem value={"Kelompok 5"}>
                                  Kelompok 5
                                </MenuItem>
                                <MenuItem value={"Kelompok 6"}>
                                  Kelompok 6
                                </MenuItem>
                                <MenuItem value={"Kelompok 7"}>
                                  Kelompok 7
                                </MenuItem>
                                <MenuItem value={"Kelompok 8"}>
                                  Kelompok 8
                                </MenuItem>
                                <MenuItem value={"Kelompok 9"}>
                                  Kelompok 9
                                </MenuItem>
                                <MenuItem value={"Kelompok 10"}>
                                  Kelompok 10
                                </MenuItem>
                                <MenuItem value={"Kelompok 11"}>
                                  Kelompok 11
                                </MenuItem>
                                <MenuItem value={"Kelompok 12"}>
                                  Kelompok 12
                                </MenuItem>
                                <MenuItem value={"Kelompok 13"}>
                                  Kelompok 13
                                </MenuItem>
                                <MenuItem value={"Kelompok 14"}>
                                  Kelompok 14
                                </MenuItem>
                                <MenuItem value={"Kelompok 15"}>
                                  Kelompok 15
                                </MenuItem>
                                <MenuItem value={"Kelompok 16"}>
                                  Kelompok 16
                                </MenuItem>
                                <MenuItem value={"Kelompok 17"}>
                                  Kelompok 17
                                </MenuItem>
                                <MenuItem value={"Kelompok 18"}>
                                  Kelompok 18
                                </MenuItem>
                                <MenuItem value={"Kelompok 19"}>
                                  Kelompok 19
                                </MenuItem>
                                <MenuItem value={"Kelompok 20"}>
                                  Kelompok 20
                                </MenuItem>
                                <MenuItem value={"Kelompok 21"}>
                                  Kelompok 21
                                </MenuItem>
                                <MenuItem value={"Kelompok 22"}>
                                  Kelompok 22
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <div key={rows.user_id}>
                            <FormControl fullWidth key={rows.user_id}>
                              <Select
                                value={rows.kelompok ? rows.kelompok : kelompok}
                                label="Kelompok 2"
                                onChange={handleChange}
                              >
                                <MenuItem value={"Kelompok 1"}>
                                  Kelompok 1
                                </MenuItem>
                                <MenuItem value={"Kelompok 2"}>
                                  Kelompok 2
                                </MenuItem>
                                <MenuItem value={"Kelompok 3"}>
                                  Kelompok 3
                                </MenuItem>
                                <MenuItem value={"Kelompok 4"}>
                                  Kelompok 4
                                </MenuItem>
                                <MenuItem value={"Kelompok 5"}>
                                  Kelompok 5
                                </MenuItem>
                                <MenuItem value={"Kelompok 6"}>
                                  Kelompok 6
                                </MenuItem>
                                <MenuItem value={"Kelompok 7"}>
                                  Kelompok 7
                                </MenuItem>
                                <MenuItem value={"Kelompok 8"}>
                                  Kelompok 8
                                </MenuItem>
                                <MenuItem value={"Kelompok 9"}>
                                  Kelompok 9
                                </MenuItem>
                                <MenuItem value={"Kelompok 10"}>
                                  Kelompok 10
                                </MenuItem>
                                <MenuItem value={"Kelompok 11"}>
                                  Kelompok 11
                                </MenuItem>
                                <MenuItem value={"Kelompok 12"}>
                                  Kelompok 12
                                </MenuItem>
                                <MenuItem value={"Kelompok 13"}>
                                  Kelompok 13
                                </MenuItem>
                                <MenuItem value={"Kelompok 14"}>
                                  Kelompok 14
                                </MenuItem>
                                <MenuItem value={"Kelompok 15"}>
                                  Kelompok 15
                                </MenuItem>
                                <MenuItem value={"Kelompok 16"}>
                                  Kelompok 16
                                </MenuItem>
                                <MenuItem value={"Kelompok 17"}>
                                  Kelompok 17
                                </MenuItem>
                                <MenuItem value={"Kelompok 18"}>
                                  Kelompok 18
                                </MenuItem>
                                <MenuItem value={"Kelompok 19"}>
                                  Kelompok 19
                                </MenuItem>
                                <MenuItem value={"Kelompok 20"}>
                                  Kelompok 20
                                </MenuItem>
                                <MenuItem value={"Kelompok 21"}>
                                  Kelompok 21
                                </MenuItem>
                                <MenuItem value={"Kelompok 22"}>
                                  Kelompok 22
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Stack direction="row" spacing={1}>
                            <IconButton
                              type="button"
                              onClick={() => handleCheckAsisten(rows)}
                            >
                              <CheckIcon aria-label="check" color="success" />
                            </IconButton>

                            <form onSubmit={handleCross}>
                              <IconButton type="submit">
                                <ClearIcon
                                  aria-label="cleaer"
                                  color="warning"
                                />
                              </IconButton>
                            </form>
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </Box>
        </TabPanel>
        <TabPanel value={tabvalue} index={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Nama</StyledTableCell>
                  <StyledTableCell align="center">NRP</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Kelompok</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {praktikan.map((rows) => (
                  <StyledTableRow key={rows.user_id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {rows.nama}
                    </StyledTableCell>
                    <StyledTableCell align="center">{rows.nrp}</StyledTableCell>
                    <StyledTableCell align="center">
                      {rows.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rows.kelompok}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabvalue} index={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Nama</StyledTableCell>
                  <StyledTableCell align="center">NRP</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Kelompok</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {asistendb.map((rows) => (
                  <StyledTableRow key={rows.user_id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {rows.nama}
                    </StyledTableCell>
                    <StyledTableCell align="center">{rows.nrp}</StyledTableCell>
                    <StyledTableCell align="center">
                      {rows.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rows.kelompok}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabvalue} index={3}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Kelompok</StyledTableCell>
                  <StyledTableCell align="center">Jadwal</StyledTableCell>
                  <StyledTableCell align="center">Set</StyledTableCell>
                  <StyledTableCell align="center">Submit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jadwal.map((rows) => (
                  <StyledTableRow key={rows.jadwal_id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {rows.kelompok}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rows.timezone}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <DateTimePicker
                          label="Jadwal"
                          value={value}
                          onChange={handleChangeJadwal}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <Button
                        onClick={() => {
                          setSqljadwal(dayjs(value).format("YYYY-MM-DD HH:mm"));
                          setKelompok(rows.kelompok);
                        }}
                      >
                        Apply
                      </Button>
                      <Button
                        onClick={() => {
                          console.log("jadwal", sqljadwal);
                          console.log("kelompok", kelompok);
                          postJadwal();
                        }}
                      >
                        Submit
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
    </Fragment>
  );
};

export default Validasi;
