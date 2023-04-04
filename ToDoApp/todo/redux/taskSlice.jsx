import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name:"taskSlice",
    initialState:{
        tasks:[],
        isTaskModal:false,
    },
    reducers:{
        handleTaskModal: (state) => {
            state.isTaskModal = !state.isTaskModal;
        }
    }
})

export default taskSlice.reducer
export const {handleTaskModal} = taskSlice.actions