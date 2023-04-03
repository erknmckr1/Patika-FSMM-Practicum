import React from "react";
import Tasks from "./Tasks";
import Chart from "./Chart";
import Folder from "./Folder";
import Notes from "./Notes";

function Board() {
  return (
    <div className="w-[65%] p-3 h-full bg-[#F8F9F9] rounded-l-[40px] ">
      {/* search ınput start */}
      <div className=" text-[30px] h-[5rem] py-5 flex justify-between items-center gap-x-4">
        <h4 className="px-5 flex font-semibold">Dashboard</h4>
        <div className="w-full flex justify-end  rounded-3xl overflow-hidden text-[20px] ">
          <input
            className="w-full py-1 px-5 bg-[#BFC9CA] bg-opacity-50 outline-none "
            type="text"
          />
        </div>
      </div>
      {/* search ınput end */}
      <div className=" w-full h-[calc(100%_-_5rem)] flex justify-between gap-x-3">
        <div className="w-1/2 h-full flex flex-col gap-y-4 ">
          <Tasks />
          <Chart />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-4 ">
          <Folder/>
          <Notes/>
        </div>
      </div>
    </div>
  );
}

export default Board;
