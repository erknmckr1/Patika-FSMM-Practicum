import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineDeleteSweep, MdOutlineModeEditOutline } from "react-icons/md";
import {
  handleCompleted,
  handleDeleted,
  handleDeletedAll,
  handleEditModal,
  setEditingTask,
} from "@/redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";
function CompletedTasks() {
  const dispatch = useDispatch()
  const { tasks } = useSelector((state) => state.Task);

  const completedTask = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        dispatch(handleCompleted({ id: task.id }));
        console.log(task.id);
      }
    });
  };

  const deletedTask = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        dispatch(handleDeleted({ id: task.id }));
      }
    });
  };

  const deletedTaskAll = () => {
    dispatch(handleDeletedAll());
  };
  return (
    <div className="h-1/3 w-full border bg-white rounded-3xl p-3 overflow-y-auto ">
      {/*  */}
      <div className="flex justify-between items-center border-b  ">
        <h5 className="font-semibold">Completed Tasks</h5>
        <button onClick={deletedTaskAll} className="btn">
          <MdOutlineDeleteSweep />
        </button>
      </div>
      {/*  */}

      <div className="mt-3 flex flex-col gap-y-5  ">
        {tasks.map((task, index) => {
          if (task.isCompleted) {
            return (
              <div
                key={index}
                className="flex flex-col justify-start w-full border-b-4 border-dotted  gap-1"
              >
                <span className={`text-[10px] w-full ml-2 underline underline-offset-2  ${task.isCompleted === true ? "text-red-500" : "text-[#196F3D]"}`}>
                  {task.date.taskDate}
                </span>
                <div className="flex gap-2 items-center justify-between overflow-x-scroll ">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 "
                      type="checkbox"
                      onChange={() => completedTask(task.id)}
                    />
                    <p
                      className={`${
                        task.isCompleted === true
                          ? "line-through text-red-500"
                          : ""
                      }`}
                    >
                      {task.todo.addTask}
                    </p>
                  </div>
                  <div className="flex items-center p-2">
                    <button
                      onClick={() => deletedTask(task.id)}
                      className="btn"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

    </div>
  );
}

export default CompletedTasks;
