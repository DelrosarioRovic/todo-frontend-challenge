import { useState } from "react";
import { useSelector } from "react-redux";

const FooterTodo = ({
  filterOption,
  setFilterOption,
  filteredTodoList,
  setCompletedTodo,
  setTodoItemList,
  completedTodo,
}) => {
  const { isDark } = useSelector((state) => state.themeReducer);
  const [isHover, setIsHover] = useState(null);

  const handleSelectFilterOption = (filterOp) => {
    setFilterOption(filterOp);
  };

  const handleHover = (id) => {
    setIsHover(id);
  };

  const handleRemoveAllCompleted = () => {
    setTodoItemList((prev) =>
      prev.filter((list) => !completedTodo.includes(list.id))
    );
    setCompletedTodo([]);
  };

  console.log(filterOption);

  return (
    <div
      className={`${
        isDark ? "bg-white" : "bg-slate-800 "
      } bg-slate-800 rounded-sm shadow-md clear-start flex items-center px-5 py-2 justify-between`}
    >
      <div>
        <p className="text-xs text-gray-500">
          {filteredTodoList.length} items left
        </p>
      </div>
      <ul className="flex gap-3">
        <li
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => setIsHover(null)}
          className={`text-gray-500 text-xs cursor-pointer ${
            isHover === 1 && "text-white"
          } ${filterOption === "all" && "!text-blue-500"}`}
          onClick={() => handleSelectFilterOption("all")}
        >
          All
        </li>
        <li
          onMouseLeave={() => setIsHover(null)}
          onMouseEnter={() => handleHover(2)}
          className={`text-gray-500 text-xs cursor-pointer ${
            isHover === 2 && "text-white"
          } ${filterOption === "active" && "!text-blue-500"}`}
          onClick={() => handleSelectFilterOption("active")}
        >
          Active
        </li>
        <li
          onMouseLeave={() => setIsHover(null)}
          onMouseEnter={() => handleHover(3)}
          className={`text-gray-500 text-xs cursor-pointer ${
            filterOption === "completed" && "!text-blue-500"
          } ${isHover === 3 && "text-white"}`}
          onClick={() => handleSelectFilterOption("completed")}
        >
          Completed
        </li>
      </ul>
      <button
        className="text-gray-500 text-xs hover:text-white"
        onClick={handleRemoveAllCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FooterTodo;
