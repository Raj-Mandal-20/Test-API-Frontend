import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
const EndPoint = "http://localhost:8080/feed/post";

const defaultTheme = createTheme();

export default function UploadPost() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile((eve) => selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
  
    const data = {
      title: event.target.title.value,
      describe: event.target.describe.value,
      prize: event.target.prize.value,
      imageUrl: event.target.imageUrl.files[0],
    };
    console.log(event.target.imageUrl.files[0].name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try{
       const res = await axios.post(EndPoint, data, config);
       console.log(res);
    }   
    catch(err){
        console.log(err);
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ p: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Send Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="describe"
              label="Describe"
              type="text"
              id="describe"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="prize"
              label="Networth"
              type="number"
              id="prize"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageUrl"
              type="file"
              id="imageUrl"
              onChange={handleFileChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
