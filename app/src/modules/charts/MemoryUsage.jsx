import { useSelector } from "react-redux";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const MemoryUsage = () => {
  const MData = useSelector((state) => state.memoryInfo.data);
  const Data = Object.entries(MData);

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
      <div className="font-sans font-medium mb-5">Pie Chart - Memory Usage</div>
      <PieChart width={450} height={350}>
        <Tooltip />
        <Legend />
        <Pie
          data={Data}
          dataKey="1"
          nameKey="0"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default MemoryUsage;
