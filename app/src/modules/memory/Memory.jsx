import { useSelector } from "react-redux";

const Memory = () => {
  const select = useSelector((state) => state.sidebar.selected);
  const mode = useSelector((state) => state.mode.selected);

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
        ></div>
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-green-300" : "bg-green-700"
          }`}
        ></div>
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex flex-col items-center justify-center text-3xl font-medium font-sans ${
            mode ? "bg-slate-300" : "bg-slate-500"
          }`}
        ></div>
        <div
          className={`w-1/6 h-full rounded-lg shadow-xl flex justify-center items-center text-3xl font-medium font-sans ${
            mode ? "bg-red-300" : "bg-red-700"
          }`}
        ></div>
      </div>
      <div className="w-full h-3/4 flex justify-center items-center"></div>
    </div>
  );
};

export default Memory;
