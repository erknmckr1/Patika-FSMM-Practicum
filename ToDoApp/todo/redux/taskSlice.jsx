import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name:"taskSlice",
    initialState:{
        tasks:[],
        isTaskModal:false,
        isNoteModal:false,
    },
    reducers:{
        handleTaskModal: (state) => {
            state.isTaskModal = !state.isTaskModal;
        },
        handleNotesModal:(state) => {
            state.isNoteModal = !state.isNoteModal
        }
    }
})

export default taskSlice.reducer
export const {handleTaskModal,handleNotesModal} = taskSlice.actions