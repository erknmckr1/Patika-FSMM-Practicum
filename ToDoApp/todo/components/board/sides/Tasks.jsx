import React from "react";

function Tasks() {
  return (
    
    <div className="w-full min-h-[23rem]  border-2 p-3 rounded-3xl bg-white  ">
      {/* title start */}
      <div className="flex justify-between items-center ">
        <h5 className="font-bold">Recent Task</h5>
        <button className="btn">All</button>
      </div>
      {/* title end */}

      
      {/* todo start  */}
      <div className="mt-3 flex flex-col gap-y-5  ">
        <div className="flex justify-between w-full border-b-4 border-dotted">
          <div className="flex gap-4 items-center">
            <input className="w-5 h-5  " type="checkbox" />
            <p>Erto'yu besle</p>
          </div>
          <span>Tarih</span>
        </div>
        <div className="flex justify-between w-full border-b-4 border-dotted">
          <div className="flex gap-4 items-center">
            <input className="w-5 h-5  " type="checkbox" />
            <p>Saİt'i bağla</p>
          </div>
          <span>Tarih</span>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
