import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { updateMemoryInfo } from "./MemorySlice";
import MemoryUsage from "../charts/MemoryUsage";

const Memory = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);

  const MData = useSelector((state) => state.memoryInfo.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io.connect("http://localhost:3001/memory");
    socket.on("memoryInfo", (data) => {
      dispatch(updateMemoryInfo(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  if (select !== "Memory") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        MEMORY METRICS
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
            {(MData.Total / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-xl">Total space</div>
        </div>
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 m-2">
            {(MData.Used / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-xl">Used space</div>
        </div>
        <div
          className={`w-1/6 h-4/5 rounded-lg shadow-xl flex flex-col items-center justify-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 m-2">
            {(MData.Free / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-xl">Free space</div>
        </div>
      </div>
      <div
        className={`w-full h-3/4 flex justify-center items-center rounded-lg shadow-xl ${
          mode ? "bg-slate-200" : "bg-slate-600"
        }`}
      >
        <MemoryUsage />
      </div>
    </div>
  );
};

export default Memory;
