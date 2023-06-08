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
    const socket = io.connect("http://localhost:3001");
    socket.on("memoryInfo", (data) => {
      dispatch(updateMemoryInfo(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  console.log(MData);

  if (select !== "Memory") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        MEMORY METRICS
      </div>
      <div className="w-full h-1/6 flex gap-4">
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-black"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 mr-2">
            {(MData.Total / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-white">Total space</div>
        </div>
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-green-300" : "bg-green-700"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 mr-2">
            {(MData.Used / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-white">Used space</div>
        </div>
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex flex-col items-center justify-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        >
          <div className="bg-blue-500 rounded-md shadow-lg p-1 mr-2">
            {(MData.Free / (1024 * 1024 * 1024)).toFixed(2)}
          </div>
          <div className="text-white">Free space</div>
        </div>
      </div>
      <div className="w-full h-3/4 flex justify-center items-center">
        <MemoryUsage />
      </div>
    </div>
  );
};

export default Memory;
