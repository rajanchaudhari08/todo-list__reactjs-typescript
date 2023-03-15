import { Fragment } from "react";
import TodoList from "./components/FunctionalDeployment/TodoList";
import InputTodoList from "./components/UserInterface/InputTodoList";
import TodoListContextProvider from "./TodoListContext/todolist-context";

const App = () => {
  return (
    <Fragment>
      <TodoListContextProvider>
        <InputTodoList />
        <TodoList />
      </TodoListContextProvider>
    </Fragment>
  );
};

export default App;
