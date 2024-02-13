import UploadPost from "./Components/UploadPost/UploadPost";
import Post from "./Components/Posts/Post";
import { ClipLoader } from "react-spinners";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


import { useState, useEffect } from "react";
import { CookieSharp } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [postItem, setPostItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:8080/feed/posts";
  const getPosts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPostItem(() => data.post);
      // console.log(postItem);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(postItem);
    postItem.map(({ title, prize, imageUrl, describe }) =>
      console.log(title, prize, imageUrl, describe)
    );
    const timer = setTimeout(()=>{
      getPosts();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading, getPosts]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={8}>
          {!loading && <ClipLoader md />}
          {loading &&
            postItem.map(({ title, prize, imageUrl, describe }) => (
              <Post
                title={title}
                imageUrl={imageUrl}
                prize={prize}
                describe={describe}
              />
            ))}
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            <UploadPost />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
