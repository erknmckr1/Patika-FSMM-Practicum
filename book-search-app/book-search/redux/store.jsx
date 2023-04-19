import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./booksSlice";

export const store = configureStore({
   reducer:{
    books:bookSlice.reducer
   }
})