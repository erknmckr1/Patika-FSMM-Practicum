import Image from "next/image";
import React, { useState } from "react";
// icons
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { MdOutlineFindInPage } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
//icons
import { useSelector,useDispatch } from "react-redux";
import { handleTaskModal } from "@/redux/taskSlice";
import { handleNoteModal } from "@/redux/noteSlice";
function Navbar() {
  const dispatch = useDispatch()
  const {isTaskModal} = useSelector((state)=>state.Task)
  
  const {isNoteModal} = useSelector((state)=>state.Note)

  // Task butonuna clıkc eventı vererek dispatch ile handleTaskModal'ı tetıkleyerek redux uzerınde tanımladıgımız isTaskModal state'ini guncelledık. True false olma durumunu gore ekrana gelecek. Bu işlemi board componnetınde yapacagız.
  const handleTask = () =>{
    dispatch(handleTaskModal())
  }

  const handleNote = () => {
    dispatch(handleNoteModal())
  }
  
  return (
    <div className="w-[6rem] bg-[#B6D4CE] h-full flex flex-col justify-between py-10 items-center rounded-l-3xl ">
      <div className="relative bg-white w-12 h-12 rounded-full ">
        <Image src="/Images/logo.jpeg" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col h-[50%] items-center justify-between mb-14 ">
        <button onClick={handleTask}  className={`btn ${isTaskModal && '!bg-activebtn'}`}>
          <FaTasks />
        </button>
        <button className={`btn ${isNoteModal && '!bg-activebtn'}`} onClick={handleNote} >
          <TbNotes />
        </button>
        <button className="btn">
          <MdOutlineFindInPage />
        </button>
        <span className="btn">
          <FcStatistics />
        </span>
        <button className="btn">
          <SlCalender />
        </button>
      </div>
      <div>
        <button className="btn">
          <RxExit />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
