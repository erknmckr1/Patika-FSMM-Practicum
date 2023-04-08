import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const notesSlice = createSlice({
  name: "Notes",
  initialState: {
    isNoteModal: false,
    isShowModal:false,
    isEditNoteModal:false,
    // Show more a tıkladıgımız notu bu state'e kaydedip Note Modal'da kullanacagız.
    currentNote:[],
    notes: [],
  },
  reducers: {
    handleNoteModal: (state) => {
      state.isNoteModal = !state.isNoteModal;
    },

    handleShowModal: (state) => {
      state.isShowModal = !state.isShowModal
    },

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

    handleDeleteAll:(state) => {
      state.notes = Array.from([])
    },
    handleDeleteNote:(state,action) => {
      const {id} = action.payload
      state.notes = state.notes.filter(note=> note.id !== id)
    },

    handleCopyNote: (state,action) => {
      const {id} = action.payload
      const value = state.notes.find(note=>note.id === id)
      state.currentNote = value ;
      
    },

    // henuz yapılmadı 
    handleEditModal: (state) => {
      state.isEditNoteModal  = !state.isEditNoteModal
    },
    
    // henuz yapılmadı
    handleUpdateNote: (state,action) => {
      const {id} = state.currentNote
    }
  },
});

export default notesSlice.reducer;
export const { handleNoteModal, handleAddNote,handleShowModal,handleDeleteAll,handleCopyNote, handleDeleteNote } = notesSlice.actions;
