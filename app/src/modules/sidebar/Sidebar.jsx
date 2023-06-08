import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./SidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.selected);
  const select = useSelector((state) => state.sidebar.selected);

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
  };

  const dashboard = ["dashboard", "cpu", "Memory"];

  return (
    <div className="flex-col flex gap-4">
      {dashboard.map((dash) => (
        <div className="flex m-2" key={dash}>
          <button
            className={`w-fit h-fit px-10 py-1 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans hover:bg-slate-600 ${
              mode ? "bg-blue-400 text-white" : "bg-slate-500"
            } ${select === dash ? "bg-blue-500" : "bg-slate-500"}`}
            value={dash.toString()}
            onClick={handleClick}
          >
            {dash}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
