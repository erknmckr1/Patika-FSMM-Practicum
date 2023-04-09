import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleShowModal } from "@/redux/noteSlice";
import OutsideClickHandler from "react-outside-click-handler";
function NoteShowModal() {
  const dispatch = useDispatch();
  const { isShowModal,currentNote } = useSelector((state) => state.Note);

  const clickOutSide = () => {
    dispatch(handleShowModal());
  };
  return (
    <div
      className={`absolute top-0 right-0 w-full h-full bg-white opacity-90  ${
        isShowModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full p-20 text-white ">
        <div className="h-full w-full overflow-y-auto bg-slate-500 rounded-3xl relative ">
          <OutsideClickHandler onOutsideClick={clickOutSide}>
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-[3rem] flex justify-between items-center py-8 px-10  bg-slate-500 border-b-2 ">
                <span className="text-[40px]">{currentNote.title.title}</span>
                <span
                  onClick={() => dispatch(handleShowModal())}
                  className="text-[25px] cursor-pointer hover:text-red-500"
                >
                  x
                </span>
              </div>
              <div className=" overflow-y-auto w-full h-[calc(h-full_-_80px)] px-10 mt-2 ">
                {currentNote.note.addNote}
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
}

export default NoteShowModal;
