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

function Tasks({search}) {
  console.log(search)
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.Task);
 
  // board komponentımızdeki ınputa gırdıgımız karaktere göre tasks ve notes dızımızı fıltreleyıp buna gore listeleme işlemimizi gerçekleştirdik.
  const filteredTasks = tasks.filter((task)=>task.todo.addTask.toLowerCase().includes(search.toLowerCase()))


  //Tıkladıgımız taskın ıd'sını alıp tasklarımızın arasından eşleşen var ise bu taskın id'sini handleCompleted actionu ile yolladık. store'da taskın id'si ile gonderdıgımız id'yi eşleştirip isCompleted degerını degıstırecegız.
  const completedTask = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        dispatch(handleCompleted({ id: task.id }));
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

  // editleyecegımız taskı tasks dızısı ıcınden find ile  bulduk setEditingTask reducerını kullanarak  editingTask state'ini store da guncelledık. EditingTask state'i click attıgımız taskın verılerını tutacak.
  const editToTask = (id) => {
    dispatch(handleEditModal());
    const taskEdit = tasks.find((task) => id === task.id);
    dispatch(setEditingTask(taskEdit));
  };
  return (
    <div className="w-full min-h-[23rem]  border p-3 rounded-3xl bg-white overflow-y-auto ">
      {/* title start */}
      <div className="flex justify-between items-center w-full border-b ">
        <h5 className="font-bold">Recent Task</h5>
        <button onClick={deletedTaskAll} className="btn">
          <MdOutlineDeleteSweep />
        </button>
      </div>
      {/* title end */}

      {/* todo start  */}
      <div className="mt-3 flex flex-col gap-y-5  ">
        {filteredTasks.map((task, index) => {
          // Listeleyecegımız her tasklar ıcın komponent olusturup her task ıcın  bır komponent dondurebılırdık. isCompleted ozellıgı true olmayan tasakları lıstelıyoruz.
          if (!task.isCompleted) {
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
                    <button onClick={() => editToTask(task.id)} className="btn">
                      <MdOutlineModeEditOutline />
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

export default Tasks;
