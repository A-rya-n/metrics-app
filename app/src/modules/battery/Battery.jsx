import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { updateBatteryInfo } from "./BatterySlice";
import BatteryUsage from "../charts/BatteryUsage";

const Battery = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);

  const BData = useSelector((state) => state.batteryInfo.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io.connect("http://localhost:3001/battery");
    socket.on("batteryInfo", (data) => {
      dispatch(updateBatteryInfo(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const Data = Object.entries(BData);
  const upperData = Data.slice(0, 3);
  const time = Data.slice(4,5)

  if (select !== "Battery") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="text-2xl font-sans font-medium text-white bg-black p-2 w-fit rounded-lg shadow-xl px-4 mb-10">
        BATTERY METRICS
      </div>
      <div
        className={`rounded-lg shadow-xl h-1/5 flex gap-4 items-center pl-3 ${
          mode ? "bg-slate-100" : "bg-slate-600"
        }`}
      >
        {upperData.map(([index, value]) => (
          <div
            className={`w-1/5 h-3/4 rounded-lg shadow-xl flex flex-wrap justify-center items-center text-3xl font-medium font-sans ${
              mode ? "bg-slate-300" : "bg-slate-500"
            }`}
            key={index}
          >
            <div className="bg-blue-500 rounded-md shadow-lg p-1 mr-2">
              {value}
            </div>
            <div>{index}</div>
          </div>
        ))}
      </div>
      <div
        className={`w-full h-full flex items-center rounded-lg shadow-xl ${
          mode ? "bg-slate-200" : "bg-slate-600"
        }`}
      >
        <BatteryUsage />
      </div>
    </div>
  );
};

export default Battery;
