import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import img from "../asset/img.png";
import img2 from "../asset/img.png";

export default function Overview() {
  <Paper elevation={3} sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ ml: 5, mb: 3 }}
        >
          Pengendalian Posisi Motor DC Dengan Menggunakan Sistem Pengendalian
          Open Loop Dan Closed Loop
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          startIcon={<PictureAsPdfIcon />}
          size="large"
          sx={{ mt: 2 }}
        >
          Modul
        </Button>
      </Grid>

      <Divider />
      <Grid item xs={8} sx={{ ml: 5 }}>
        <Typography variant="body2" gutterBottom component="div">
          Sistem Kendali Loop Terbuka adalah suatu sistem kendali yang
          keluarannya tidak akan berpengaruh terhadap aksi kendali. Sehingga
          keluaran sistem tidak dapat diukur dan tidak dapat digunakan sebagai
          perbandingan umpan balik dengan masukan. Jadi pada setiap masukan
          didapatkan suatu kondisi operasi yang tetap. Sedangkan ketelitiannya
          akan tergantung pada kalibrasi. Dalam prakteknya sistem kendali loop
          terbuka dapat digunakan jika hubungan output dan inputnya diketahui
          serta tidak adanya gangguan internal dan eksternal. Konstruksinya
          sederhana dan perawatannya mudah dan lebih murah, tidak ada persoalan
          kestabilan cocok untuk keluaran yang sukar diukur/tidak ekonomis
          (contoh : untuk mengukur kualitas keluaran pemanggang roti)
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={3}>
        <Box sx={{ mr: 5 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ minheight: 0, minweight: 0 }}
                component="img"
                src={img}
                alt="img"
              />
              <CardContent>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  align="center"
                >
                  Sistem Kendali Loop Terbuka
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={8} sx={{ ml: 5, mt: 3 }}>
        <Typography variant="body2" gutterBottom component="div">
          Sistem kendali loop tertutup adalah suatu sistem yang keluarannya
          berpengaruh langsung terhadap aksi kendali. Yang berupaya untuk
          mempertahankan keluaran sehingga sama bahkan hampir sama dengan
          masukan acuan walaupun terdapat gangguan pada sistem. Jadi sistem ini
          adalah sistem kendali berumpan balik, dimana kesalahan penggerak
          adalah selisih antara sinyal masukan dan sinyal umpan balik (berupa
          sinyal keluaran dan turunannya) yang diteruskan ke pengendali /
          controller sehingga melakukan aksi terhadap proses untuk memperkecil
          kesalahan dan membuat agar keluaran mendekati harga yang diingankan.
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-end" item xs={3}>
        <Box sx={{ mr: 5, mt: 3 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ minheight: 0, minweight: 0 }}
                component="img"
                src={img2}
                alt="img"
              />
              <CardContent>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  align="center"
                >
                  Sistem Kendali Loop Tertutup
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </Grid>
  </Paper>;
}
