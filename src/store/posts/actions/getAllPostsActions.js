import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    try {
      const response = await axios.get(
        "https://movstar-api.herokuapp.com/api/posts"
      );
      return response.data.data.posts;
    } catch (err) {
      console.log(err);
    }
  }
);
