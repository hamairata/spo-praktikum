import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Button,
  InputLabel,
  Input,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Signupasisten = ({ setSignupAsisten }) => {
  const [username, setUsername] = useState();
  const [userpassword, setUserpassword] = useState();
  const [nrp, setNrp] = useState();
  const [email, setEmail] = useState();
  const [nama, setNama] = useState();
  const [kontakWA, setKontakWA] = useState();
  const [kontakLine, setKontakLine] = useState();
  const [userrole, setUserrole] = useState("Asisten");

  //const url = "http://localhost:5000/api/signup/dump/asisten";
  const url = "https://ui-spo-backend.herokuapp.com/api/signup/dump/asisten";

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(url, {
        nama,
        nrp,
        email,
        username,
        userpassword,
        kontakWA,
        kontakLine,
        userrole,
      });
      console.log("pendaftaran berhasil");
    } catch (err) {
      console.log(err);
    } finally {
      handleSignup();
    }
  };

  const handleSignup = () => {
    setSignupAsisten(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1.2, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Nama
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            NRP
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setNrp(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Kontak WhatsApp
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setKontakWA(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Kontak Line
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setKontakLine(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Username
          </InputLabel>
          <Input
            required
            label="Error"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <InputLabel shrink htmlFor="bootstrap-input">
            Password
          </InputLabel>
          <Input
            type="password"
            required
            label="Error"
            onChange={(e) => setUserpassword(e.target.value)}
          />
        </div>
        <div>
          <input
            key={"file_mahasiswa.file_id"}
            type="file"
            onChange={() => console.log("changed")}
          />
          <Button
            variant="contained"
            icon={<FileUploadIcon />}
            sx={{ m: 2 }}
            type="submit"
            onClick={handleSubmit}
          >
            Daftar
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Signupasisten;
