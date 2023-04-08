import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const notesSlice = createSlice({
  name: "Notes",
  initialState: {
    isNoteModal: false,
    notes: [],
  },
  reducers: {
    handleNoteModal: (state) => {
      state.isNoteModal = !state.isNoteModal;
    },

    // prepare zamazıngosunun mantıgını anla
    handleAddNote: {
      reducer: (state, action) => {
        state.notes = [...state.notes, action.payload];
        
      },
      prepare: ({note,date,title}) => {
        return {
          payload: {
            id: nanoid(5),
            title,
            note,
            date,
          },
        };
      },
    },
  },
});

export default notesSlice.reducer;
export const { handleNoteModal, handleAddNote } = notesSlice.actions;
