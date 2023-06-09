import Header from "./modules/header/Header";
import SideBar from "./modules/sidebar/Sidebar";

import Dashboard from "./modules/dashboard/Dashboard";
import Cpu from "./modules/cpu/Cpu";
import Memory from "./modules/memory/Memory";
import Battery from "./modules/battery/Battery";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode.selected);

  return (
    <div className={`h-screen ${mode ? "bg-white" : "bg-slate-700"}`}>
      <div
        className={`w-full h-20 shadow-xl mb-5 ${
          mode ? "bg-slate-100" : "bg-black"
        }`}
      >
        <Header />
      </div>
      <div className="flex gap-8 h-5/6">
        <div
          className={`w-1/6 rounded-lg shadow-xl ml-3 ${
            mode ? "bg-blue-300" : "bg-slate-400 "
          }`}
        >
          <SideBar />
        </div>
        <div
          className={`w-4/5 rounded-lg shadow-xl mr-3 p-5 ${
            mode ? "bg-blue-300" : "bg-slate-400"
          }`}
        >
          <Dashboard />
          <Cpu />
          <Memory />
          <Battery />
        </div>
      </div>
    </div>
  );
}

export default App;
