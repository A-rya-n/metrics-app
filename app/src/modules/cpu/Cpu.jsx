import { useEffect } from "react";
import CpuUsage from "../charts/CpuUsage";
import { useSelector, useDispatch } from "react-redux";
import { updateScpuInfo } from "./SMetricsSlice";
import { io } from "socket.io-client";

const Cpu = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);
  const SData = useSelector((state) => state.smetrics.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io.connect("http://localhost:3001/Scpu");
    socket.on("scpuInfo", (data) => {
      dispatch(updateScpuInfo(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  if (select !== "Cpu") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        CPU METRICS
      </div>
      <div
        className={`rounded-lg shadow-xl h-1/5 flex gap-4 items-center pl-3 ${
          mode ? "bg-slate-100" : "bg-slate-600"
        }`}
      >
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 m-2">
            {SData.speed}
          </div>
          <div className="text-xl">GHz</div>
        </div>
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 px-3 m-2">
            {SData.cores}
          </div>
          <div className="text-xl">Cores</div>
        </div>
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex flex-col items-center justify-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="mx-auto bg-blue-500 rounded-md shadow-lg p-1 px-3 mb-2">
            {SData.performance}
          </div>
          <div className="mx-auto text-xl">Performance Cores</div>
        </div>
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 px-3 m-2">
            {SData.tempreture}
          </div>
          <div className="text-xl">°C</div>
        </div>
      </div>
      <div
        className={`w-full h-3/4 flex justify-center items-center rounded-lg shadow-xl ${
          mode ? "bg-slate-200" : "bg-slate-600"
        }`}
      >
        <CpuUsage />
      </div>
    </div>
  );
};

export default Cpu;
