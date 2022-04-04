import React, { useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login({
  setUser,
  setSignup,
  setData,
  setSignupAsisten,
}) {
  const [username, setUsername] = useState();
  const [userpassword, setUserpassword] = useState();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = "http://localhost:5000/api/userlogin";
  const urlasisten = "http://localhost:5000/api/db/getasistenkelompok";
  const urlforasisten = "http://localhost:5000/api/db/getasistenkelompokfor";
  const urlgetjadwal = "http://localhost:5000/api/db/j4dwal";

  /*const url = "https://ui-spo-backend.herokuapp.com/api/userlogin";
  const urlforasisten =
    "https://ui-spo-backend.herokuapp.com/api/db/getasistenkelompokfor";
  const urlasisten =
    "https://ui-spo-backend.herokuapp.com/api/db/getasistenkelompok";
  const urlgetjadwal = "https://ui-spo-backend.herokuapp.com/api/db/j4dwal";
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        url,
        {
          username,
          userpassword,
        },
        {
          headers: {
            "Access-Control-Allow-Origin":
              // "https://riset.its.ac.id/praktikum/tf-spo/",
              "http://localhost:3000/praktikum/tf-spo/",
          },
        }
      );

      window.localStorage.setItem("user", JSON.stringify(res.data));
      const user = JSON.parse(window.localStorage.getItem("user"));
      const kelompok = res.data.kelompok;
      const nama = res.data.nama;

      if (user.userrole == "Praktikan") {
        const response = await axios.post(urlasisten, { kelompok });
        window.localStorage.setItem("asisten", JSON.stringify(response.data));
        const jadwal = await axios.post(urlgetjadwal, { kelompok });
        window.localStorage.setItem("jadwal", JSON.stringify(jadwal.data));
      } else if (user.userrole == "Asisten") {
        const response = await axios.post(urlforasisten, { nama });
        window.localStorage.setItem("asisten", JSON.stringify(response.data));
        const jadwal = await axios.post(urlgetjadwal, { kelompok });
        window.localStorage.setItem("jadwal", JSON.stringify(jadwal.data));
      } else {
        const dummyasisten = {
          nama: "Linggar Handy Swandana",
          wa: "081486525130",
          line: "aldebaran_vc",
        };
        const dummyjadwal = {
          kelompok: "Kelompok 70",
          jadwal: "2022-01-27T12:01:00.000Z",
        };
        window.localStorage.setItem("asisten", JSON.stringify(dummyasisten));
        window.localStorage.setItem("jadwal", JSON.stringify(dummyjadwal));
      }

      /*if (user.userrole === "Koordinator") {
        const dummyasisten = {
          nama: "Linggar Handy Swandana",
          wa: "081486525130",
          line: "aldebaran_vc",
        };
        const dummyjadwal = {
          kelompok: "Kelompok 70",
          jadwal: "2022-01-27T12:01:00.000Z",
        };
        window.localStorage.setItem("asisten", JSON.stringify(dummyasisten));
        window.localStorage.setItem("jadwal", JSON.stringify(dummyjadwal));
      } else {
        const response = await axios.post(urlasisten, { kelompok });
        window.localStorage.setItem("asisten", JSON.stringify(response.data));
        const jadwal = await axios.post(urlgetjadwal, { kelompok });
        window.localStorage.setItem("jadwal", JSON.stringify(jadwal.data));
      }*/
      setUser(user);
      setData(user);
    } catch (err) {
      setMessage(err.message);
      handleOpen();
    }
  };

  const handleSignup = () => {
    setSignup(true);
  };

  const handleSignupAsisten = () => {
    setSignupAsisten(true);
  };
  /*<button className="submitButton" onClick={handleSignup}>
            Sign Up
          </button>
          <button className="submitButton" onClick={handleSignupAsisten}>
            Sign Up Asisten
          </button>
          */
  return (
    <div className="login-wrapper">
      <button className="submitButton" onClick={handleSignup}>
        Sign Up
      </button>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setUserpassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" className="submitButton">
            Login
          </button>
        </div>
      </form>
      <Typography>Password = NRP</Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-description"
              align="center"
              sx={{ mt: 2 }}
            >
              Username belum terdaftar/tervalidasi!
            </Typography>
            <Typography
              id="transition-modal-description"
              align="center"
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
