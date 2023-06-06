import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./SidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.selected);

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
  };

  return (
    <div className="flex-col flex gap-4">
      <div className="flex m-2">
        <button
          className={`w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans ${
            mode ? "bg-blue-400 text-white" : "bg-slate-500"
          }`}
          value="dashboard"
          onClick={handleClick}
        >
          Dashboard
        </button>
      </div>
      <div className="flex m-2">
        <button
          className={`w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans ${
            mode ? "bg-blue-400 text-white" : "bg-slate-500"
          }`}
          value="cpu"
          onClick={handleClick}
        >
          CPU
        </button>
      </div>
      <div className="flex m-2">
        <button
          className={`w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans ${
            mode ? "bg-blue-400 text-white" : "bg-slate-500"
          }`}
          value="memory"
          onClick={handleClick}
        >
          Memory
        </button>
      </div>
    </div>
  );
};

export default SideBar;
