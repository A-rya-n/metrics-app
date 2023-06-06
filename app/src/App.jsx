import Header from "./modules/header/Header";
import SideBar from "./modules/sidebar/Sidebar";

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="bg-black w-full h-20 shadow-xl mb-5">
        <Header />
      </div>
      <div className="flex gap-8 h-5/6">
        <div className="bg-slate-400 w-1/6 rounded-lg shadow-xl ml-3">
          {/* SideBar options . . . */}
          <SideBar />
        </div>
        <div className="bg-slate-400 w-4/5 rounded-lg shadow-xl mr-3 p-5">
          {/* Displaying all graphs and clickables . . . */}
        </div>
      </div>
    </div>
  );
}

export default App;
