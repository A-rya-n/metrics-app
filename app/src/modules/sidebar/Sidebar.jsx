import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./SidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.selected);
  const select = useSelector((state) => state.sidebar.selected);

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
  };

  const dashboard = ["Dashboard", "Cpu", "Memory", "Battery", "Gpu"];

  return (
    <div className="flex-col flex gap-4">
      <div className="bg-black text-white w-full py-5 font-sans font-medium text-2xl pl-3">
        CONTENT
      </div>
      {dashboard.map((dash) => (
        <div className="flex m-2" key={dash}>
          {console.log("Dash: ", dash, " Select: ", select)}
          <button
            className={`w-2/3 h-fit px-10 py-2 rounded-lg shadow-lg mx-auto text-2xl font-medium font-sans hover:bg-slate-600 ${
              mode
                ? `bg-blue-400 text-white ${select === dash ? "bg-black" : ""}`
                : `bg-slate-500 ${select === dash ? "bg-black" : ""}`
            }`}
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
