import LineMetrics from "./modules/charts/Line";

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="bg-black w-full h-20 shadow-xl mb-5"></div>
      <div className="flex gap-6">
        <div className="bg-slate-400 w-1/4 h-96 rounded-lg shadow-xl ml-3"></div>
        <div className="bg-slate-400 w-3/4 h-full rounded-lg shadow-xl mr-3 p-5">
          <LineMetrics />
        </div>
      </div>
    </div>
  );
}

export default App;
