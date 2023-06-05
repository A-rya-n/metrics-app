import LineMetrics from "./modules/charts/Line";

function App() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-slate-700 w-4/5 h-4/5 rounded-lg shadow-xl flex justify-center items-center">
        <LineMetrics />
      </div>
    </div>
  );
}

export default App;
