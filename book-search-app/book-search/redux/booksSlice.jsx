import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./services";

export const bookSlice = createSlice({
    name:"books",
    initialState:{
        data:[],
        status:"ıdle",
        favoriteBooks:[],

    },
    reducers:{
        handlePushFav:(state,action) => {
            const {id} = action.payload; // gelen id'yi yakaladık
            const favItem = state.data.find(item=>item.id === id);// data'da gelen id ile eşleşen veriyi bulduk
            if(!state.favoriteBooks.find(item=>item.id === id));// favoriteBooks içerisinde yoksa pushaladık.
            state.favoriteBooks.push(favItem)
        },
        removeFavoriteBook:(state,action)=>{
            const {id} = action.payload; // gelen id yi yakaladık 
            state.favoriteBooks = state.favoriteBooks.filter(item => item.id !== id); // ve mevcut favoriteBooks dizisini filter ile tekrardan olusturduk.
        }
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
export const {handlePushFav,removeFavoriteBook} = bookSlice.actions;
export default bookSlice.reducer;