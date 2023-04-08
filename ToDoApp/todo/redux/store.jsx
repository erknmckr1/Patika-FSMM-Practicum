import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import notesSlice  from "./noteSlice";
export const store = configureStore({
    reducer:{
        Task:taskSlice,
        Note:notesSlice,
    }
})