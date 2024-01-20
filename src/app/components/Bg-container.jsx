import { useSelector } from "react-redux";

const BgContainer = () => {
  const { isDark } = useSelector((state) => state.themeReducer);

  return (
    <div
      className={`h-screen w-full  ${
        isDark ? "bg-light" : "bg-dark"
      } absolute inset-0 -z-10`}
    >
      <div className="w-full h-[30%]"></div>
      <div
        className={`w-full h-[70%] ${isDark ? "bg-white" : "bg-slate-900"}`}
      ></div>
    </div>
  );
};

export default BgContainer;
