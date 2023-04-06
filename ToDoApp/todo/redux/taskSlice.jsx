import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [],
    // Editlemek için mevcut taskı tuttugumuz state
    editingTask: null,
    //Modalları acıp kapatmak ıcın olusturdugumuz state'ler
    isTaskModal: false,
    isEditModal: false,
    isNoteModal: false,
  },
  reducers: {
    handleAddTask: {
      reducer: (state, action) => {
        state.tasks = [...state.tasks, action.payload];
      },
      // data editing
      prepare: ({ todo, date }) => {
        return {
          payload: {
            id: nanoid(5),
            todo,
            date,
            isEditing: false,
            isCompleted: false,
          },
        };
      },
    },
    // modal açıp kapadıgımız reducerlar
    handleTaskModal: (state) => {
      state.isTaskModal = !state.isTaskModal;
    },
    handleEditModal: (state) => {
      state.isEditModal = !state.isEditModal;
    },
    handleNotesModal: (state) => {
      state.isNoteModal = !state.isNoteModal;
    },
    //

    // asagıdakı reducer da task id'lerimiz uniq olmasaydı veya taskları bırbırınden ayrıstıracak ozellıgımız olmasaydı index kullanabılırdık.
    handleCompleted: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find((item) => item.id === id);
      task.isCompleted = !task.isCompleted;
    },
    handleDeleted: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== id);
    },
    // Tasks dızısındekı butun elemanları sılmemızı saglayan reducer.
    handleDeletedAll: (state) => {
      state.tasks = Array.from([]);
    },

    // Tasks componentınde kullandık. Seçtigimiz taskın mevcut degerlerını editingTask state'ine atadık.
    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
    //Gelen verıler dogrultusunda secılen taskı dızıde bularak Task ve date degerını guncelledık.
    updateTask: (state, action) => {
      const { id, editTask, editDate } = action.payload;
      const taskToUpdate = state.tasks.find(task=>task.id === id)
      taskToUpdate.todo.addTask = editTask
      taskToUpdate.date.taskDate = editDate
    },
  },
});

export default taskSlice.reducer;
export const {
  handleTaskModal,
  handleEditModal,
  handleNotesModal,
  handleAddTask,
  handleCompleted,
  handleDeleted,
  handleDeletedAll,
  setEditingTask,
  updateTask,
} = taskSlice.actions;
