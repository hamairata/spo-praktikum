import React, { Fragment, useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PengumumanView from "../component/pengumuman_view";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const theme = createTheme({
  status: {
    danger: "#f72707",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Pengumuman = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("");

  //const url = "http://localhost:5000/pengumuman/db";

  const url = "https://ui-spo-backend.herokuapp.com/pengumuman/db";

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const userString = sessionStorage.getItem("accessToken");
  const userToken = JSON.parse(userString);
  const getUser = Object.values(userToken);

  return (
    <Box>
      {getUser[3].toString() === "Koordinator" ? (
        <Box
          sx={{
            boxShadow: 1, // theme.shadows[1]
            m: 1, // margin: theme.spacing(1)
            p: {
              xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
            },
            zIndex: "tooltip",
            width: "100%",
          }}
        >
          <Typography variant="h2" component="div" gutterBottom>
            Pengumuman
          </Typography>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Tambah Pengumuman
          </Button>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <h2 id="unstyled-modal-title">Tambah Pengumuman</h2>
              <form onSubmit={onSubmitForm}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  size="large"
                  variant="outlined"
                  multiline
                  rows={10}
                  rowsMax={10}
                  margin="normal"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Divider />
                <Button
                  variant="contained"
                  color="success"
                  sx={{ m: 2 }}
                  type="submit"
                >
                  Tambah
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Batalkan
                </Button>
              </form>
            </Box>
          </StyledModal>
          <PengumumanView />
        </Box>
      ) : (
        <Box
          sx={{
            boxShadow: 1, // theme.shadows[1]
            m: 1, // margin: theme.spacing(1)
            p: {
              xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
            },
            zIndex: "tooltip",
            width: "100%",
          }}
        >
          <Typography variant="h2" component="div" gutterBottom>
            Pengumuman
          </Typography>
          <PengumumanView />
        </Box>
      )}
    </Box>
  );
};

export default Pengumuman;
