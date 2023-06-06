import cpu from "../../assets/cpu-icon.svg";
import memory from "../../assets/memory-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../sidebar/SidebarSlice";

const Dashboard = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSelected(e.currentTarget.dataset.value));
  };

  if (select !== "dashboard") {
    return null;
  }

  return (
    <>
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        MY DASHBOARD
      </div>
      <div className="flex grid-cols-4 gap-5 w-full h-2/5">
        <div className="bg-slate-500 w-1/4 h-full rounded-lg shadow-xl flex flex-col gap-4 justify-center items-center">
          <img
            src={cpu}
            className="w-3/4 h-3/4"
            data-value="cpu"
            onClick={handleClick}
          />
          <div className="text-2xl font-sans font-medium">CPU</div>
        </div>
        <div className="bg-slate-500 w-1/4 h-full rounded-lg shadow-xl flex flex-col gap-4 justify-center items-center">
          <img
            src={memory}
            className="w-3/4 h-3/4"
            value="memory"
            onClick={handleClick}
          />
          <div className="text-2xl font-sans font-medium">MEMORY</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
