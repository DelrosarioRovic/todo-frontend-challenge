import HeaderTodo from "./header-todo";
import InputTextBox from "./input-text-box";
import ListContainer from "./list-container";
import { useState } from "react";
import FooterTodo from "./footer-todo";
import { useSelector } from "react-redux";

const existItem = [
  {
    id: 0,
    text: "Complete online javascript course",
  },
];
const TodoContainer = () => {
  const { isDark } = useSelector((state) => state.themeReducer);
  const [todoItemList, setTodoItemList] = useState([existItem[0]]);
  const [filterOption, setFilterOption] = useState("all");
  // this should display filtered data
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  // completed list
  const [completedTodo, setCompletedTodo] = useState([]);

  return (
    <div
      className={`pt-5 px-5 py-0 w-[600px] ${
        isDark ? "" : "bg-shadow-bg bg-shadow"
      }  rounded-md `}
    >
      <div className="flex flex-col gap-7 shadow-md">
        <div className="w-full">
          <HeaderTodo />
        </div>
        <div className="w-full">
          <InputTextBox setTodoItemList={setTodoItemList} />
        </div>
        <div className="w-full rounded-sm overflow-hidden">
          <ListContainer
            completedTodo={completedTodo}
            setCompletedTodo={setCompletedTodo}
            filteredTodoList={filteredTodoList}
            setFilteredTodoList={setFilteredTodoList}
            filterOption={filterOption}
            todoItemList={todoItemList}
            setTodoItemList={setTodoItemList}
          />
          <FooterTodo
            filteredTodoList={filteredTodoList}
            filterOption={filterOption}
            setFilterOption={setFilterOption}
            setCompletedTodo={setCompletedTodo}
            completedTodo={completedTodo}
            setTodoItemList={setTodoItemList}
          />
        </div>
        <div className="w-full text-center py-5">
          <p className="text-xs text-gray-500">Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
