import { configureStore } from "@reduxjs/toolkit";
import { blogDetailsReducer } from "./blogs";

export const store  = configureStore({
    reducer: blogDetailsReducer
});
