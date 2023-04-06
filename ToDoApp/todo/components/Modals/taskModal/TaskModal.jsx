import React from "react";
import { useState } from "react";
// icons
import { GrStatusDisabled } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
// icons
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { handleTaskModal,handleAddTask} from "@/redux/taskSlice";

function TaskModal() {
  const dispatch = useDispatch();
  const [taskDate, setTaskDate] = useState("");
  const [addTask, setAddTask] = useState("");
  const [isDateDisabled, setİsDateDisabled] = useState(true);
  const { isTaskModal } = useSelector((state) => state.Task);

  //Task ınputun degerını state e atadık
  const handleTask = (e) => {
    setAddTask(e.target.value);
  };

  // Date inputun degerını aldık
  const handleChangeDate = (e) => {
    setTaskDate(e.target.value);
  };

  //Date input için disabled durumunu gunceleyecek fonksıyon
  const handleDisabled = (e) => {
    e.preventDefault();
    setİsDateDisabled((prev) => !prev);
  };

  // Kapsayıcımızın dısına tıkladıgımızda Task modal ın ekrandan gıtmesı ıcın clıckoutside kutuphanesini kullandık ve kapsayıcı dısına tıkladıgımızda isTaskModal'ın degerının degısmesı ıcın dıspatch ettik.
  const clickOutSide = () => {
    dispatch(handleTaskModal());
  };

  // Submit func start
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (addTask === "") return; 
    const value = {
      todo: { addTask },
      date:{taskDate}, 
    };
    dispatch(handleAddTask(value))
    setAddTask("")
  };
  // submit func end

  
  return (
    <div
      className={`absolute top-0 right-0 w-full h-full bg-white opacity-90 ${
        isTaskModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center relative">
        {/* kapsayıcı dısına tıkladııgmız taktırde clickoutside fonksıyonu tetıklenecek. */}
        <div className="w-3/3 h-3/5 bg-slate-500 rounded-3xl opacity-100 ">
          <OutsideClickHandler onOutsideClick={clickOutSide}>
            <div className="flex flex-col items-center justify-center">
              <h4 className="font-dancing text-[50px] w-full h-full p-3 text-title font-bold underline underline-offset-8 flex justify-center ">
                Add Task
              </h4>

              <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-y-10 justify-between items-center text-[20px] px-5 text-white ">
                {/* task input start */}
                <div className="w-full flex flex-col  items-start px-5">
                  <label className="text-[15px]" htmlFor="">
                    {" "}
                    Write Task{" "}
                  </label>
                  <input
                    className="w-3/3 py-1 px-5 rounded-3xl bg-[#BFC9CA] bg-opacity-50 outline-none "
                    type="text"
                    id="addTask"
                    placeholder="What is your plan ?"
                    value={addTask}
                    onChange={handleTask}
                  />
                </div>
                {/* task input end */}

                {/* date input start */}
                <div className="w-full flex flex-col justify-between  px-5">
                  <label className="text-[15px]" htmlFor="">
                    {" "}
                    Choose Date{" "}
                  </label>
                  <div className="w-full h-full flex justify-between items-center">
                    <input
                      className="w-2/3 py-1 px-5 rounded-3xl bg-[#BFC9CA] bg-opacity-50 outline-none "
                      type="date"
                      id="taskDate"
                      name="taskDate"
                      value={taskDate}
                      onChange={handleChangeDate}
                      disabled={isDateDisabled}
                    />
                    <button
                      onClick={handleDisabled}
                      className="btn w-1/3 mr-10 text-black transition-all"
                    >
                      {isDateDisabled ? <FaPlus /> : <GrStatusDisabled />}
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

export default TaskModal;
