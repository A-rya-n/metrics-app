import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchMetrics } from "../cpu/MetricsSlice";

const CpuUsage = () => {
  const LData = useSelector((state) => state.metrics.data);
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics());
    const interval = setInterval(() => {
      dispatch(fetchMetrics());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  if (select !== "cpu") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div
          className={`w-auto h-auto p-5 rounded-xl shadow-xl ml-5 ${
            mode ? "bg-white" : "bg-black"
          }`}
        >
          <div className="font-sans font-medium mb-5">
            Line Chart - CPU Usage
          </div>
          {LData.length > 0 ? (
            <LineChart width={600} height={300} data={LData} syncId="LineID">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timeStamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="load"
                name="CPU Load"
                stroke="#82ca9d"
                strokeWidth={2}
                fill="#82ca9d"
              />
              <Line
                type="monotone"
                dataKey="idle"
                name="CPU idle"
                stroke="#8884d8"
                strokeWidth={2}
                fill="#8884d8"
              />
            </LineChart>
          ) : null}
        </div>
        <div
          className={`w-auto h-auto p-5 rounded-xl shadow-xl ml-5 ${
            mode ? "bg-white" : "bg-black"
          }`}
        >
          <div className="font-sans font-medium mb-5">
            Area Chart - CPU Usage
          </div>
          {LData.length > 0 ? (
            <AreaChart width={600} height={300} data={LData} syncId="lineID">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timeStamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="load"
                name="CPU Load"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="idle"
                name="CPU Idle"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CpuUsage;
