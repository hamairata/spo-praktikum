import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Paper } from "@mui/material";

const PengumumanView = () => {
  const [pengumuman, setPengumuman] = useState([]);
  const [show, setShow] = useState(true);

  //const url = "http://localhost:5000/pengumuman/db/";
  //const url1 = "http://localhost:5000/pengumuman/db";
  const url = "https://ui-spo-backend.herokuapp.com/pengumuman/db/";
  const url1 = "https://ui-spo-backend.herokuapp.com/pengumuman/db";

  const deletePengumuman = async (id) => {
    try {
      const deleteTodo = await axios.delete(url + id);

      setPengumuman(pengumuman.filter((pengumuman) => pengumuman.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPengumuman = async () => {
    try {
      const response = await fetch(url1);
      const jsonData = await response.json();

      setPengumuman(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPengumuman();
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const userString = sessionStorage.getItem("accessToken");
  const userToken = JSON.parse(userString);
  const getUser = Object.values(userToken);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <tbody>
          {pengumuman.map((pengumuman) => (
            <tr key={pengumuman.id}>
              <td>
                <Button onClick={() => setShow((prev) => !prev)}>Hide</Button>
                {show && (
                  <Box>
                    <Card sx={{ minWidth: 275, m: 1 }} elevation={10}>
                      <CardContent>
                        <Typography variant="body2">
                          {pengumuman.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {getUser[3].toString() == "Koordinator" ? (
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deletePengumuman(pengumuman.id)}
                          >
                            Delete
                          </Button>
                        ) : (
                          ""
                        )}
                      </CardActions>
                    </Card>
                  </Box>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default PengumumanView;
