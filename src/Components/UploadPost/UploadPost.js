import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
const EndPoint = "http://localhost:8080/feed/post";

const defaultTheme = createTheme();

export default function UploadPost() {
  const initialProps = {
    imageUrl: "",
    title: "",
    prize: "",
    describe: "",
  };

  let [values, setValues] = useState(initialProps);
  const [doyouSumit, setDoYouSubmit] = useState(false);
  const InputeChangeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  


  const fileHandler = (event) => {
    // values.imageUrl = event.target.files[0];

    if(event !== undefined){
      const {name, value} = event.target;
      console.log(name, " ",  event.target.files[0]);
      setValues({...values, [name] : event.target.files[0]});
      
    }

  };

  useEffect(()=>{
    fileHandler();
  }, [doyouSumit])



  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(EndPoint, values, config);
      console.log(res);
      setValues(()=>initialProps);
      setDoYouSubmit(true);
    } catch (err) {
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
              value={values.title}
              onChange={InputeChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="describe"
              label="Describe"
              type="text"
              id="describe"
              value={values.describe}
              onChange={InputeChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="prize"
              label="Networth"
              type="number"
              id="prize"
              value={values.prize}
              onChange={InputeChangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageUrl"
              type="file"
              id="imageUrl"
              title=" "
              onChange={fileHandler}
              value={values.imageUrl?.value}
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
