import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const colors = ["#0088FE", "#FF8042"];

const BatteryUsage = () => {
  const BData = useSelector((state) => state.batteryInfo.data);
  const mode = useSelector((state) => state.mode.selected);

  const Data = Object.entries(BData);
  const upperData = Data.slice(0, 3);

  const percentage = [
    { name: "Battery", value: Data[3][1] },
    { name: "Battery spent", value: 100 - Data[3][1] },
  ];

  const barData = [
    { name: "Original", original: upperData[0][1] },
    { name: "Max", max: upperData[1][1] },
    { name: "Current", current: upperData[2][1] },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div
          className={`w-auto h-auto p-5 rounded-xl shadow-xl ml-5 ${
            mode ? "bg-white" : "bg-black"
          }`}
        >
          <div className="font-sans font-medium mb-5 text-white">
            Pie Chart - Memory Percentage
          </div>
          <PieChart width={250} height={250}>
            <Legend />
            <Tooltip />
            <Pie
              data={percentage}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {Data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div
          className={`w-auto h-auto p-5 rounded-xl shadow-xl ml-5 ${
            mode ? "bg-white" : "bg-black"
          }`}
        >
          <div className="font-sans font-medium mb-5 text-white">
            Bar Chart - Battery Metrics
          </div>
          <BarChart
            width={400}
            height={300}
            data={barData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="original" fill="#8884d8" />
            <Bar dataKey="max" stackId="a" fill="#82ca9d" />
            <Bar dataKey="current" stackId="a" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default BatteryUsage;
