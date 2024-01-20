import ListItem from "./list-item";
import { useEffect, useState } from "react";

const ListContainer = ({
  todoItemList,
  setTodoItemList,
  filterOption,
  filteredTodoList,
  setFilteredTodoList,
  completedTodo,
  setCompletedTodo,
}) => {
  const [isHover, setIsHover] = useState(null);

  useEffect(() => {
    //this should filter the data from the array when filter option is triggered
    setFilteredTodoList(() => {
      if (filterOption === "active") {
        return todoItemList.filter((item) => !completedTodo.includes(item.id));
      } else if (filterOption === "completed") {
        return todoItemList.filter((prev) => {
          return completedTodo.includes(prev.id);
        });
      } else {
        return [...todoItemList];
      }
    });
  }, [filterOption, todoItemList, completedTodo]);

  return (
    <div>
      {filteredTodoList.map((todoItems, index) => (
        <div key={todoItems.id}>
          <ListItem
            filteredTodoList={filteredTodoList}
            setFilteredTodoList={setFilteredTodoList}
            isHover={isHover}
            setIsHover={setIsHover}
            text={todoItems.text}
            id={todoItems.id}
            setTodoItemList={setTodoItemList}
            completedTodo={completedTodo}
            setCompletedTodo={setCompletedTodo}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
