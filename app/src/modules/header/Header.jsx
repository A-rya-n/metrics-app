import logo from "../../assets/cpu-logo.svg";

const Header = () => {
  return (
    <div className="p-5">
      <img src={logo} className="w-12 h-12 bg-slate-300 rounded-lg shadow-xl" />
      <div></div>
    </div>
  );
};

export default Header;
