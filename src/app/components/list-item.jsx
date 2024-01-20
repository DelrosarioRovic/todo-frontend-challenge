import { useState } from "react";
import checkIcon from "../todo-app-main/images/icon-check.svg";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const ListItem = ({
  id,
  text,
  setTodoItemList,
  isHover,
  setIsHover,
  completedTodo,
  setCompletedTodo,
  index,
  filteredTodoList,
  setFilteredTodoList,
}) => {
  const { isDark } = useSelector((state) => state.themeReducer);
  const handleHover = (insideId) => {
    setIsHover(insideId);
  };

  const handleCompleted = (insideId) => {
    if (completedTodo.includes(insideId)) {
      setCompletedTodo((prev) => prev.filter((id) => id !== insideId));
    } else {
      setCompletedTodo((prev) => [...prev, insideId]);
    }
  };

  const handleRemove = (insideId) => {
    setTodoItemList((prev) => prev.filter((item) => item.id !== insideId));
    setCompletedTodo((prev) => prev.filter((item) => item !== insideId));
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    handleHover(id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsHover(null);

    const draggedItemId = e.dataTransfer.getData("text/plain");

    // Perform your drag-and-drop logic here
    console.log(
      `Item with ID ${draggedItemId} dropped near item with ID ${id}`
    );

    // Get the index of the dragged item
    const draggedIndex = filteredTodoList.findIndex(
      (item) => item.id === parseInt(draggedItemId)
    );

    // Update the order of items in the filteredTodoList array
    const updatedTodoList = [...filteredTodoList];
    updatedTodoList.splice(
      index,
      0,
      updatedTodoList.splice(draggedIndex, 1)[0]
    );

    // Update the state with the new order
    setFilteredTodoList(updatedTodoList);
  };

  return (
    <div
      className={`${
        isDark ? "bg-white" : "bg-slate-800 "
      } shadow-md clear-start flex items-center px-5 py-2 justify-between border-b-[1px]  ${
        isDark ? "border-b-gray-300" : "border-b-gray-700"
      } `}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => setIsHover(null)}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      draggable="true"
    >
      <div className="flex justify-between gap-5 items-center">
        <button
          onClick={() => handleCompleted(id)}
          className={`flex justify-center items-center w-[20px] h-[20px] rounded-full outline-1 outline-gray-700 hover:outline-gray-300 outline ${
            completedTodo.some((item) => item === id) && "bg-blue-400"
          } `}
        >
          {completedTodo.some((item) => item === id) && (
            <Image alt="check" src={checkIcon} />
          )}
        </button>

        <p
          className={`${
            completedTodo.some((item) => item === id) &&
            "text-gray-600 line-through"
          } ${
            isDark ? "bg-white text-gray-700" : "bg-slate-800 text-white"
          }  outline-none border-none cursor-pointer`}
        >
          {text}
        </p>
      </div>
      {isHover === id && (
        <button className="text-slate-700" onClick={() => handleRemove(id)}>
          <RxCross2 size={20} />
        </button>
      )}
    </div>
  );
};

export default ListItem;
