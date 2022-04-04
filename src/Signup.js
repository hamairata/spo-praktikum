import React, { useState } from "react";
import { Box, Button, InputLabel, Input } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";

const Signup = ({ setSignup }) => {
  const [username, setUsername] = useState();
  const [userpassword, setUserpassword] = useState();
  const [nrp, setNrp] = useState();
  const [email, setEmail] = useState();
  const [nama, setNama] = useState();
  const [role, setUserrole] = useState("Praktikan");

  const url = "http://localhost:5000/api/signup/dump/praktikan";
  //const url = "https://ui-spo-backend.herokuapp.com/api/signup/dump/praktikan";

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(url, {
        nama,
        nrp,
        email,
        username,
        userpassword,
      });
      console.log("pendaftaran berhasil");
    } catch (err) {
      console.log(err);
    } finally {
      handleSignup();
    }
  };

  const handleSignup = () => {
    setSignup(false);
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

export default Signup;
