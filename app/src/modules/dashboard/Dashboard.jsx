import cpu from "../../assets/cpu-icon.svg";
import memory from "../../assets/memory-icon.svg";
import battery from "../../assets/battery-icon.svg";
import gpu from "../../assets/gpu-icon.svg";

import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../sidebar/SidebarSlice";

const Dashboard = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSelected(e.currentTarget.dataset.value));
  };

  const details = [
    { key: "Cpu", value: cpu },
    { key: "Memory", value: memory },
    { key: "Battery", value: battery },
    { key: "Gpu", value: gpu },
  ];

  if (select !== "Dashboard") {
    return null;
  }

  return (
    <>
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        MY DASHBOARD
      </div>
      <div className="flex grid-cols-4 gap-20 w-full h-2/5">
        {details.map((detail) => (
          <div
            className={`w-fit h-fit px-9 py-4 rounded-lg shadow-xl flex flex-col gap-4 justify-center items-center ${
              mode ? "bg-slate-200" : "bg-slate-500"
            }`}
            key={detail.key}
          >
            <img
              src={detail.value}
              className="w-48 h-48"
              data-value={detail.key}
              onClick={handleClick}
            />
            <div className="text-2xl font-sans font-medium">
              {detail.key.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
