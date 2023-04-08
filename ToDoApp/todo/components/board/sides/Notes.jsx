import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineDeleteSweep, MdOutlineModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";
function Notes() {
  const { notes } = useSelector((state) => state.Note);

  const deletedTaskAll = () => {
    dispatch(handleDeletedAll());
  };
  return (
    <div className="w-full h-2/3 border-2 rounded-3xl bg-white p-3 ">
      <div className="flex justify-between items-center  border-b">
        <h5 className="font-semibold">Notes</h5>
        <button onClick={deletedTaskAll} className="btn">
          <MdOutlineDeleteSweep />
        </button>
      </div>
      <div className="flex flex-col w-full h-[calc(100%-56px)]  mt-2 gap-2 overflow-y-auto">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex flex-col w-full h-full justify-start rounded-3xl max-h-[7rem]  border p-2 bg-[#F4F6F6] "
          >
            <div className="w-full flex justify-between items-center px-1 text-[#196F3D]">
              <span className="font-semibold underline underline-offset-2">
                {note.title.title}
              </span>
              <span className="text-[13px]">{note.date.noteDate}</span>
              <button className="hover:scale-125 hover:text-red-500">x</button>
            </div>

            <p
              className={`text-[12px] break-words max-h-[7rem]  overflow-hidden`}
            >
              {note.note.addNote.length > 150
                ? note.note.addNote
                : note.note.addNote.slice(0, 150) }
            </p>
            {note.note.addNote.length > 150 && <span className="text-[10px] flex justify-end text-[#196F3D] underline underline-offset-2 font-semibold hover:scale-105 cursor-alias ">Show More</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
