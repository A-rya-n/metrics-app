import { useDispatch } from "react-redux";
import { setSelected } from "./SidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
  };

  return (
    <div className="flex-col flex gap-4">
      <div className="flex m-2">
        <button
          className="bg-slate-500 w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans"
          value="dashboard"
          onClick={handleClick}
        >
          Dashboard
        </button>
      </div>
      <div className="flex m-2">
        <button
          className="bg-slate-500 w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans"
          value="cpu"
          onClick={handleClick}
        >
          CPU
        </button>
      </div>
      <div className="flex m-2">
        <button
          className="bg-slate-500 w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans"
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
