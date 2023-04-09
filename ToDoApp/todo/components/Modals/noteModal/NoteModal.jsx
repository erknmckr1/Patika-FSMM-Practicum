import React from "react";
import { useState } from "react";
// icons
import { GrStatusDisabled } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
// icons
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { handleNoteModal,handleAddNote } from "@/redux/noteSlice";


function NoteModal() {
  const dispatch = useDispatch();
  const [title,setTitle] = useState("")
  const [noteDate, setNoteDate] = useState("");
  const [addNote, setAddNote] = useState("");
  const [isNoteDisabled, setİsNoteDisabled] = useState(true);
  const {isNoteModal} = useSelector(state=>state.Note)


  
  const handleNote = (e) => {
    setAddNote(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  // Date inputun degerını aldık
  const handleChangeDate = (e) => {
    setNoteDate(e.target.value);
  };

  //Date input için disabled durumunu gunceleyecek fonksıyon(önceki degerı degıstırecek)
  const handleDisabled = (e) => {
    e.preventDefault();
    setİsNoteDisabled((prev) => !prev);
  };

  // Kapsayıcımızın dısına tıkladıgımızda Note modal ın ekrandan gıtmesı ıcın clıckoutside kutuphanesini kullandık ve kapsayıcı dısına tıkladıgımızda isNoteModal'ın degerının degısmesı ıcın dıspatch ettik.
  const clickOutSide = () => {
    dispatch(handleNoteModal());
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    const value = {title:{title}, note:{addNote},date:{noteDate}}
    dispatch(handleAddNote(value))
    dispatch(handleNoteModal())
  }
  return ( 
    <div
      className={`absolute top-0 right-0 w-full h-full bg-white opacity-90  ${
        isNoteModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center relative">
        {/* kapsayıcı dısına tıkladııgmız taktırde clickoutside fonksıyonu tetıklenecek. */}
        <div className="w-3/3 bg-slate-500 rounded-3xl opacity-100 ">
          <OutsideClickHandler onOutsideClick={clickOutSide}>
            <div className="flex h-full w-full flex-col ">
              <h4 className="font-dancing text-[50px] w-full h-full text-title font-bold underline underline-offset-8 flex justify-center pb-3 ">
                Add Note
              </h4>

              <form onSubmit={handleNoteSubmit} className="w-full h-full flex flex-col gap-y-5  items-center   text-[20px] text-white p-5 ">
              {/* title input start */}
              <div className="w-full h-full flex flex-col  px-5">
                  <label className="text-[13px]">
                    {" "}
                    Title{" "}
                  </label>

                  <input
                      className="w-3/3 py-1 px-5 rounded-3xl bg-[#BFC9CA] bg-opacity-50 outline-none "
                      type="text"
                      onChange={handleChangeTitle}
                      value={title}
                    />
                </div>

              {/* title input end */}
                {/* Note input start */}
                <div className="w-full h-full flex flex-col  px-5">
                  <label className="text-[13px]">
                    {" "}
                    Write Note{" "}
                  </label>

                  <textarea
                    className="w-3/3 h-[6rem]   rounded-3xl bg-[#BFC9CA] bg-opacity-50 outline-none px-5 "
                    type="text"
                    id="addTask"
                    placeholder="Write something"
                    value={addNote}
                    onChange={handleNote}
                  />
                </div>
                {/* task input end */}

                {/* date input start */}
                <div className="w-full flex flex-col justify-between  px-5">
                  <div>
                    <label className="text-[13px]" htmlFor="">
                      {" "}
                      Choose Date{" "}
                    </label>
                  </div>

                  <div className="w-full h-full flex justify-between items-center">
                    <input
                      className="w-2/3 py-1 px-5 rounded-3xl bg-[#BFC9CA] bg-opacity-50 outline-none "
                      type="date"
                      id="taskDate"
                      name="taskDate"
                      value={noteDate}
                      onChange={handleChangeDate}
                      disabled={isNoteDisabled}
                    />
                    <button
                      onClick={handleDisabled}
                      className="btn w-1/3 mr-10 text-black transition-all"
                    >
                      {isNoteDisabled ? <FaPlus /> : <GrStatusDisabled />}
                    </button>
                  </div>
                </div>
                {/* date input end */}

                {/* submıt btn */}
                <button className="btn text-black !w-28 !h-14 !text-[40px] hover:bg-green-500">
                  <MdAddTask />
                </button>
                {/* submıt btn */}
              </form>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
