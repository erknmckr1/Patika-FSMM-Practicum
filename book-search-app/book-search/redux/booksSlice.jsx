import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./services";

export const bookSlice = createSlice({
    name:"books",
    initialState:{
        data:[],
        status:"ıdle"

    },
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchBooks.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(fetchBooks.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchBooks.rejected,(state)=>{
            state.status = "failed"
        })
    }

})

export default bookSlice.reducer;