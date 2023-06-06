import LineMetricsC from "../charts/LineMetricsC";
import { useSelector } from "react-redux";

const Cpu = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);

  if (select !== "cpu") {
    return null;
  }
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="w-full h-1/4 flex gap-4">
        <div
          className={`w-1/4 h-full rounded-lg shadow-xl ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        ></div>
        <div
          className={`w-1/4 h-full rounded-lg shadow-xl ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        ></div>
        <div
          className={`w-1/4 h-full rounded-lg shadow-xl ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        ></div>
        <div
          className={`w-1/4 h-full rounded-lg shadow-xl ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        ></div>
      </div>
      <div className="w-full h-3/4 flex justify-center items-center">
        <LineMetricsC />
      </div>
    </div>
  );
};

export default Cpu;
