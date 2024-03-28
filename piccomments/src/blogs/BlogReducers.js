import { createSlice } from "@reduxjs/toolkit";
import { getBlogDetails } from "./BlogActions";

const initialState = {
  blogDetails: [],
  isLoading: false,
  isError: false,
  likes: 0,
  comments: []
};

const blogDetailsSlice = createSlice({
  name: "BlogDetails",
  initialState,
  reducers: {
    addLikes: (state, action) => {
        state.likes = action.payload;
    },
    addComment: (state, action) => {
        state.comments = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogDetails = action.payload;
    });
    builder.addCase(getBlogDetails.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { addLikes, addComment } = blogDetailsSlice.actions
export default blogDetailsSlice.reducer;
