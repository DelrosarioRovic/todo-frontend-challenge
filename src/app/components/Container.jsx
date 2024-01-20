import BgContainer from "./Bg-container";
import TodoContainer from "./todo-container";

const Container = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <BgContainer />
      <TodoContainer />
    </div>
  );
};

export default Container;
