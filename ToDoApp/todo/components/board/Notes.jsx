import React from "react";

function Notes() {
  return (
    <div className="w-full h-2/3 border-2 rounded-3xl bg-white">
      <div className="flex justify-between items-center p-3">
        <h5 className="font-semibold">Notes</h5>
        <button className="btn">All</button>
      </div>
      <div className="flex justify-center items-center w-full h-[calc(100%-56px)]">
                Notes
      </div>
    </div>
  );
}

export default Notes;
