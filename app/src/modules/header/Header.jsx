import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./ModeSlice";

import logo from "../../assets/cpu-logo.svg";
import dark from "../../assets/dark-mode.svg";
import light from "../../assets/light-mode.svg";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.selected);

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="p-5 flex gap-6">
      <img src={logo} className="w-12 h-12 bg-slate-300 rounded-lg shadow-xl" />
      <div
        className={`text-2xl font-medium font-sans pt-2 ${
          mode ? "text-black" : "text-white"
        }`}
      >
        DASHBOARD
      </div>
      {mode ? (
        <img
          src={light}
          className="w-12 h-12 ml-auto cursor-pointer"
          onClick={handleToggle}
        />
      ) : (
        <img
          src={dark}
          className="w-12 h-12 ml-auto cursor-pointer"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default Header;
