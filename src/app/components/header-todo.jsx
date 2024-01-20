import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { handleChangeTheme } from "@/lib/hooks/theme-reducer";

const HeaderTodo = () => {
  const { isDark } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl text-white">T O D O</h1>
      <button onClick={() => dispatch(handleChangeTheme())}>
        {isDark ? <FaMoon /> : <MdSunny color="white" />}
      </button>
    </div>
  );
};

export default HeaderTodo;
