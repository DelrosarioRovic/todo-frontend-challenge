import { useState } from "react";
import checkIcon from "../todo-app-main/images/icon-check.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

const InputTextBox = ({ setTodoItemList }) => {
  const { isDark } = useSelector((state) => state.themeReducer);
  const [isCheck, setIsCheck] = useState(false);
  const [todoInput, setTodoInput] = useState("");

  const handleInputTodo = () => {
    if (todoInput !== "") {
      setIsCheck(!isCheck);
      setTodoItemList((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 0, // Increment the last item's id or start from 0 if the array is empty
          text: todoInput,
        },
      ]);
      //should clear
      setTodoInput("");
      setIsCheck(false);
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-white" : "bg-slate-800"
      }  rounded-md shadow-md clear-start flex gap-5 items-center px-5 py-2`}
    >
      <button
        onClick={handleInputTodo}
        className={`flex justify-center items-center w-[20px] h-[20px] rounded-full outline-1 outline-gray-700 hover:outline-gray-300 outline ${
          isCheck && "bg-blue-400"
        }`}
      >
        {isCheck && <Image alt="check" src={checkIcon} />}
      </button>

      <input
        value={todoInput}
        type="text"
        placeholder="Currently typing"
        onChange={(e) => setTodoInput(e.target.value)}
        className={`${isDark ? "bg-white" : "bg-slate-800"} ${
          isDark ? "bg-white text-gray-700" : "bg-slate-800 text-white"
        } outline-none border-none`}
      />
    </div>
  );
};

export default InputTextBox;
