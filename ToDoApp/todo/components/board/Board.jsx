import React, { useState } from "react";
import Tasks from "./sides/Tasks";
import Chart from "./sides/Chart";
import CompletedTasks from "./sides/CompletedTask";
import Notes from "./sides/Notes";
import TaskModal from "../Modals/taskModal/TaskModal";
import { useSelector } from "react-redux";
import TaskEditModal from "../Modals/taskModal/TaskEditModal";
import NoteModal from "../Modals/noteModal/NoteModal";
import NoteShowModal from "../Modals/noteModal/NoteShowModal";

function Board() {
  const {isTaskModal,isEditModal} = useSelector((state)=>state.Task)
  const {isNoteModal,isShowModal} = useSelector((state)=>state.Note)
  const [searchValue ,setSearchValue] = useState("")

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div className="w-[65%] p-3 h-full bg-[#F8F9F9] rounded-l-[40px] relative ">
      {/* search ınput start */}
      <div className=" text-[30px] h-[5rem] py-5 flex justify-between items-center gap-x-4">
        <h4 className="px-5 flex font-semibold">Dashboard</h4>
        <div className="w-full flex justify-end  rounded-3xl overflow-hidden text-[20px] ">
          <input
            className="w-full py-1 px-5 bg-[#BFC9CA] bg-opacity-50 outline-none "
            type="text"
            placeholder="search for a task or note..."
            onChange={handleChangeSearch}
          />
        </div>
      </div>
      {/* search ınput end */}
      <div className=" w-full h-[calc(100%_-_5rem)] flex justify-between gap-x-3">
        <div className="w-1/2 h-full flex flex-col gap-y-4 ">
          <Tasks search={searchValue} />
          <Chart />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-4 ">
          <CompletedTasks/>
          <Notes search={searchValue}/>
        </div>
      </div>
      {/* Task modal komponenti isTaskModal'ın durumuna gore ekrana gelecek  */}
      <div >
      {isTaskModal&& <TaskModal/>}
      {isEditModal && <TaskEditModal/>}
      {isNoteModal && <NoteModal/>}
      {isShowModal && <NoteShowModal/>}
      </div>
      
    </div>
  );
}

export default Board;
