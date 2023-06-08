import { useSelector } from "react-redux";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const MemoryUsage = () => {
  const MData = useSelector((state) => state.memoryInfo.data);

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
      <div className="font-sans font-medium mb-5">Pie Chart - Memory Usage</div>
      <ResponsiveContainer width={400} height={250}>
        <PieChart>
          <Tooltip />
          <Pie
            data={MData ? Object.entries(MData) : []}
            dataKey="1"
            nameKey="0"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MemoryUsage;
