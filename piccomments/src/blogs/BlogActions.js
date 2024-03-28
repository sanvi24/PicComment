import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getBlogDetails = createAsyncThunk("blog-details", async() => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
    return response.data;
});
